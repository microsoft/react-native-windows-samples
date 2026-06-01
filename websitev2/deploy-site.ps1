<#
.SYNOPSIS
    Builds and deploys the React Native Windows docs site to a GitHub Pages repo.

.DESCRIPTION
    This script:
    1. Temporarily patches configs for your GitHub Pages URL
    2. Builds the v1 site (with /react-native-windows/v1/ base)
    3. Builds the v2 site (with /react-native-windows/ base)
    4. Copies v1 build output into v2's static/v1 folder
    5. Clones the deploy repo, replaces content, pushes to gh-pages branch
    6. Restores all config files to their original state

.PARAMETER GitHubUsername
    Your GitHub username. Used to construct the deploy repo URL and GitHub Pages URL.
    If not provided, the script will prompt for it.

.PARAMETER DryRun
    If set, builds everything but does not push to GitHub.

.EXAMPLE
    .\deploy-site.ps1 -GitHubUsername myuser
    .\deploy-site.ps1 -GitHubUsername myuser -DryRun
#>

param(
    [string]$GitHubUsername,
    [switch]$DryRun
)

if (-not $GitHubUsername) {
    $GitHubUsername = Read-Host 'Enter your GitHub username'
    if (-not $GitHubUsername) {
        throw 'GitHub username is required.'
    }
}

$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$websiteDir = Join-Path $root "website"
$websitev2Dir = Join-Path $root "websitev2"

function Remove-DirectoryRobust($path) {
    if (Test-Path $path) {
        cmd /c "rd /s /q `"$path`"" 2>$null
        if (Test-Path $path) { Remove-Item $path -Recurse -Force -ErrorAction SilentlyContinue }
    }
}

$deployOrg = $GitHubUsername
$deployProject = "react-native-windows"
$DeployRepo = "https://github.com/$deployOrg/$deployProject.git"
$deployUrl = "https://$deployOrg.github.io"
$deployBaseUrl = "/$deployProject/"

# --- Backup original config files ---
Write-Host "=== Backing up config files ===" -ForegroundColor Cyan
$v2ConfigFile = Join-Path $websitev2Dir "docusaurus.config.js"
$v1ConfigFile = Join-Path $websiteDir "siteConfig.js"
$v2ConfigBackup = "$v2ConfigFile.bak"
$v1ConfigBackup = "$v1ConfigFile.bak"

Copy-Item $v2ConfigFile $v2ConfigBackup -Force
Copy-Item $v1ConfigFile $v1ConfigBackup -Force

# --- Patch v2 config for deploy target ---
Write-Host "=== Patching websitev2 config ===" -ForegroundColor Cyan
$v2Content = [System.IO.File]::ReadAllText($v2ConfigFile)
$v2Content = $v2Content -replace "url: 'https://[^']+'", "url: '$deployUrl'"
$v2Content = $v2Content -replace "baseUrl: '[^']+'", "baseUrl: '$deployBaseUrl'"
$v2Content = $v2Content -replace "organizationName: '[^']+'", "organizationName: '$deployOrg'"
$v2Content = $v2Content -replace "projectName: '[^']+'", "projectName: '$deployProject'"
[System.IO.File]::WriteAllText($v2ConfigFile, $v2Content)

# --- Patch v1 config for deploy target ---
Write-Host "=== Patching website v1 config ===" -ForegroundColor Cyan
$v1Content = [System.IO.File]::ReadAllText($v1ConfigFile)
$v1Content = $v1Content -replace 'url: "https://[^"]+"', "url: `"$deployUrl`""
$v1Content = $v1Content -replace 'baseUrl: "[^"]+"', "baseUrl: `"${deployBaseUrl}v1/`""
$v1Content = $v1Content -replace 'projectName: "[^"]+"', "projectName: `"$deployProject`""
$v1Content = $v1Content -replace 'organizationName: "[^"]+"', "organizationName: `"$deployOrg`""
[System.IO.File]::WriteAllText($v1ConfigFile, $v1Content)

try {
    # --- Clean old builds ---
    Write-Host "=== Cleaning old build artifacts ===" -ForegroundColor Cyan
    $v1BuildDir = Join-Path $websiteDir "build"
    $v2BuildDir = Join-Path $websitev2Dir "build"
    Remove-DirectoryRobust $v1BuildDir
    Remove-DirectoryRobust $v2BuildDir

    # --- Build v1 ---
    Write-Host "=== Building v1 website ===" -ForegroundColor Cyan
    Push-Location $websiteDir
    yarn install --frozen-lockfile
    yarn build
    Pop-Location

    # --- Verify v1 build ---
    $v1BuildOutput = Join-Path $websiteDir "build" $deployProject
    if (-not (Test-Path (Join-Path $v1BuildOutput "index.html"))) {
        throw "V1 build failed: no index.html found at $v1BuildOutput"
    }
    Write-Host "V1 build verified." -ForegroundColor Green

    # --- Copy v1 build into v2 static/v1 ---
    Write-Host "=== Copying v1 build to websitev2/static/v1 ===" -ForegroundColor Cyan
    $v1StaticDest = Join-Path $websitev2Dir "static" "v1"
    Remove-DirectoryRobust $v1StaticDest
    Copy-Item $v1BuildOutput $v1StaticDest -Recurse

    # --- Build v2 ---
    Write-Host "=== Building websitev2 ===" -ForegroundColor Cyan
    Push-Location $websitev2Dir
    npm install
    npx docusaurus clear
    npm run build
    Pop-Location

    # --- Verify v2 build ---
    # Docusaurus outputs into build/<projectName>/ when baseUrl is set
    $v2BuildOutput = Join-Path $websitev2Dir "build"
    $v2BuildNested = Join-Path $v2BuildOutput $deployProject
    if (Test-Path (Join-Path $v2BuildNested "index.html")) {
        $v2BuildOutput = $v2BuildNested
    }
    $v2Index = Join-Path $v2BuildOutput "index.html"
    if (-not (Test-Path $v2Index)) {
        throw "V2 build failed: no index.html found at $v2BuildOutput"
    }
    $indexContent = [System.IO.File]::ReadAllText($v2Index)
    if ($indexContent -match 'configured baseUrl = <span[^>]*>/</span>') {
        throw "V2 build has wrong baseUrl '/'. Config patching may have failed."
    }
    Write-Host "V2 build verified at $v2BuildOutput" -ForegroundColor Green

    if ($DryRun) {
        Write-Host ""
        Write-Host "=== DRY RUN: Build complete ===" -ForegroundColor Yellow
        Write-Host "v2 build output: $v2BuildOutput"
        Write-Host "Skipping deploy."
    }
    else {
        # --- Clone deploy repo and push ---
        Write-Host "=== Deploying to $DeployRepo ===" -ForegroundColor Cyan
        $tempDir = Join-Path $env:TEMP "rnw-deploy-$(Get-Date -Format 'yyyyMMddHHmmss')"
        git clone --depth 1 --branch gh-pages $DeployRepo $tempDir 2>$null
        if (-not (Test-Path $tempDir)) {
            # gh-pages branch doesn't exist yet, create it
            git clone --depth 1 $DeployRepo $tempDir
            Push-Location $tempDir
            git checkout --orphan gh-pages
            git rm -rf . 2>$null
            Pop-Location
        }

        # Clear old content and copy new build
        Get-ChildItem $tempDir -Exclude ".git" | ForEach-Object { Remove-DirectoryRobust $_.FullName }
        Copy-Item "$v2BuildOutput\*" $tempDir -Recurse -Force

        # Commit and push
        Push-Location $tempDir
        git add -A
        git commit -m "Deploy docs site - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
        git push origin gh-pages --force
        Pop-Location

        # Cleanup temp
        Remove-DirectoryRobust $tempDir

        Write-Host ""
        Write-Host "=== Deployed successfully! ===" -ForegroundColor Green
        Write-Host "Site: $deployUrl/$deployProject/"
    }
}
finally {
    # --- Restore original configs ---
    Write-Host "=== Restoring config files ===" -ForegroundColor Cyan
    Copy-Item $v2ConfigBackup $v2ConfigFile -Force
    Remove-Item $v2ConfigBackup -Force
    Copy-Item $v1ConfigBackup $v1ConfigFile -Force
    Remove-Item $v1ConfigBackup -Force

    # --- Clean up v1 static copy ---
    $v1StaticDest = Join-Path $websitev2Dir "static" "v1"
    Remove-DirectoryRobust $v1StaticDest

    Write-Host "Config files restored to original state."
}
