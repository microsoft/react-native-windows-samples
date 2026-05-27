<#
.SYNOPSIS
    Creates a new versioned docs release for the React Native Windows websitev2 Docusaurus site.

.DESCRIPTION
    Automates the process of creating a new version by:
    1. Copying versioned_docs from the current latest version
    2. Copying the versioned_sidebars file
    3. Updating versions.json
    4. Updating docusaurus.config.js
    5. Replacing version references in doc content

.PARAMETER NewVersion
    The new version number (e.g., "0.84")

.EXAMPLE
    .\create-new-version.ps1 -NewVersion 0.84
#>

param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^\d+\.\d+$')]
    [string]$NewVersion
)

$ErrorActionPreference = 'Stop'
$websiteRoot = $PSScriptRoot

# --- Detect current version from versions.json ---
$versionsFile = Join-Path $websiteRoot 'versions.json'
$versions = Get-Content $versionsFile -Raw | ConvertFrom-Json
$currentVersion = $versions[0]

Write-Host "Current version: $currentVersion"
Write-Host "New version:     $NewVersion"
Write-Host ""

if ($currentVersion -eq $NewVersion) {
    Write-Error "New version '$NewVersion' is the same as the current version."
    exit 1
}

# --- Paths ---
$currentDocsDir  = Join-Path $websiteRoot "versioned_docs\version-$currentVersion"
$newDocsDir      = Join-Path $websiteRoot "versioned_docs\version-$NewVersion"
$currentSidebar  = Join-Path $websiteRoot "versioned_sidebars\version-$currentVersion-sidebars.json"
$newSidebar      = Join-Path $websiteRoot "versioned_sidebars\version-$NewVersion-sidebars.json"
$configFile      = Join-Path $websiteRoot 'docusaurus.config.js'

# --- Validate ---
if (-not (Test-Path $currentDocsDir)) {
    Write-Error "Current versioned docs not found: $currentDocsDir"
    exit 1
}
if (-not (Test-Path $currentSidebar)) {
    Write-Error "Current sidebar not found: $currentSidebar"
    exit 1
}
if (Test-Path $newDocsDir) {
    Write-Error "New version docs already exist: $newDocsDir"
    exit 1
}

# --- 1. Copy versioned_docs ---
Write-Host "[1/5] Copying versioned_docs..."
Copy-Item -Path $currentDocsDir -Destination $newDocsDir -Recurse
Write-Host "  Copied $currentDocsDir -> $newDocsDir"

# --- 2. Copy versioned_sidebars ---
Write-Host "[2/5] Copying versioned_sidebars..."
Copy-Item -Path $currentSidebar -Destination $newSidebar
Write-Host "  Copied sidebar -> $newSidebar"

# --- 3. Update versions.json ---
Write-Host "[3/5] Updating versions.json..."
$newVersionsContent = "[`"$NewVersion`"]"
Set-Content -Path $versionsFile -Value $newVersionsContent -NoNewline
Write-Host "  versions.json -> $newVersionsContent"

# --- 4. Update docusaurus.config.js ---
Write-Host "[4/5] Updating docusaurus.config.js..."
$configContent = Get-Content $configFile -Raw
$configContent = $configContent -replace "lastVersion: '$currentVersion'", "lastVersion: '$NewVersion'"
$configContent = $configContent -replace "onlyIncludeVersions: \['$currentVersion'\]", "onlyIncludeVersions: ['$NewVersion']"
Set-Content -Path $configFile -Value $configContent -NoNewline
Write-Host "  Updated lastVersion and onlyIncludeVersions to $NewVersion"

# --- 5. Update version references in doc content ---
Write-Host "[5/5] Updating version references in docs..."

$filesToUpdate = @(
    @{
        File = "getting-started.mdx"
        Replacements = @(
            @{ Old = "--version $currentVersion.0";           New = "--version $NewVersion.0" }
            @{ Old = "react-native-windows@^$currentVersion.0"; New = "react-native-windows@^$NewVersion.0" }
            @{ Old = "upgrading to $currentVersion";          New = "upgrading to $NewVersion" }
        )
    },
    @{
        File = "native-platform-getting-started.md"
        Replacements = @(
            @{ Old = "--react-native-version ^$currentVersion.0"; New = "--react-native-version ^$NewVersion.0" }
            @{ Old = "react-native-windows@^$currentVersion.0";   New = "react-native-windows@^$NewVersion.0" }
        )
    }
)

foreach ($entry in $filesToUpdate) {
    $filePath = Join-Path $newDocsDir $entry.File
    if (-not (Test-Path $filePath)) {
        Write-Host "  SKIP (not found): $($entry.File)"
        continue
    }
    $content = [System.IO.File]::ReadAllText($filePath)
    $changed = $false
    foreach ($r in $entry.Replacements) {
        if ($content.Contains($r.Old)) {
            $content = $content.Replace($r.Old, $r.New)
            $changed = $true
        }
    }
    if ($changed) {
        [System.IO.File]::WriteAllText($filePath, $content)
        Write-Host "  Updated: $($entry.File)"
    } else {
        Write-Host "  No changes needed: $($entry.File)"
    }
}

# --- 6. Remove old version docs/sidebar ---
Write-Host ""
Write-Host "Cleaning up old version ($currentVersion)..."
Remove-Item -Path $currentDocsDir -Recurse -Force
Write-Host "  Removed $currentDocsDir"
Remove-Item -Path $currentSidebar -Force
Write-Host "  Removed $currentSidebar"

# --- Done ---
Write-Host ""
Write-Host "Done! Version $NewVersion created successfully."
Write-Host ""
Write-Host "Files changed:"
Write-Host "  - versioned_docs/version-$NewVersion/ (copied from $currentVersion)"
Write-Host "  - versioned_sidebars/version-$NewVersion-sidebars.json"
Write-Host "  - versions.json"
Write-Host "  - docusaurus.config.js"
Write-Host ""
Write-Host "Please review the changes and test with: cd websitev2; npm start"
