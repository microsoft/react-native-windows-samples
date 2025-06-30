# upgrade-rnw-sample.ps1

# Get version parameter
param(
    [string]$Version
)

# Variables (Replace these with your actual Azure AI Foundry details)
$aiAgentEndpoint = "https://rnw-release.cognitiveservices.azure.com/openai/deployments/o3-mini/chat/completions?api-version=2025-01-01-preview"
$aiAgentApiKey = "CAy3cHksZlUjTUTaMFX1VLYP1T8GiDP55wP7sMzkGcF2q9iRbhCwJQQJ99BFACYeBjFXJ3w3AAAAACOG4xPS"

# Prompt for version if not provided
if (-not $Version) {
    Write-Host "No version specified. Please enter the React Native Windows version to upgrade to (e.g., 0.78.8):" -ForegroundColor Yellow
    $Version = Read-Host "Version"
    if (-not $Version) {
        Write-Host "Version is required. Exiting..." -ForegroundColor Red
        exit 1
    }
}

Write-Host "Upgrading to React Native Windows version: $Version" -ForegroundColor Green

# Helper function to call Azure AI Foundry agent
function Invoke-AIAgent {
    param (
        [string]$prompt,
        [string]$context = ""
    )

    $headers = @{
        "Content-Type"  = "application/json"
        "api-key" = $aiAgentApiKey
    }

    $systemPrompt = @"
You are a PowerShell automation expert helping to fix React Native Windows installation issues. 
When provided with an error, analyze it and provide ONLY executable PowerShell commands that will fix the issue.
Do not include explanations, just the commands that need to be run.
Context: We are upgrading a React Native Windows sample app to version $Version.
Current directory context: $context
"@

    $body = @{
        "messages" = @(
            @{
                "role" = "system"
                "content" = $systemPrompt
            },
            @{
                "role" = "user"
                "content" = $prompt
            }
        )
    } | ConvertTo-Json

    try {
        $response = Invoke-RestMethod -Uri $aiAgentEndpoint -Method Post -Headers $headers -Body $body
        $solution = $response.choices[0].message.content
        return $solution.Trim()
    }
    catch {
        Write-Host "AI Agent error: $_" -ForegroundColor Red
        return $null
    }
}

# Test AI Agent connectivity
Write-Host "`nTesting Azure AI Agent connectivity..." -ForegroundColor Yellow
$testResponse = Invoke-AIAgent -prompt "Please respond with exactly: 'Hello! AI Agent is active and ready to help with React Native Windows automation.'" -context "Initial test"
if ($testResponse) {
    Write-Host "AI Agent says: $testResponse" -ForegroundColor Green
    Write-Host "✓ AI Agent is successfully connected and ready to assist!`n" -ForegroundColor Green
} else {
    Write-Host "⚠ Warning: AI Agent is not responding. The script will continue but without AI assistance for error resolution." -ForegroundColor Yellow
    $continueWithoutAI = Read-Host "Do you want to continue without AI assistance? (y/N)"
    if ($continueWithoutAI -ne 'y') {
        Write-Host "Exiting..." -ForegroundColor Red
        exit 1
    }
}

# Helper function to execute commands with retry and AI assistance
function Invoke-WithAIRetry {
    param (
        [scriptblock]$Command,
        [string]$StepDescription,
        [int]$MaxRetries = 3
    )
    
    $retryCount = 0
    $currentDir = Get-Location
    
    while ($retryCount -lt $MaxRetries) {
        try {
            Write-Host "Executing: $StepDescription" -ForegroundColor Cyan
            $result = & $Command 2>&1
            
            if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne $null) {
                throw "Command failed with exit code $($LASTEXITCODE): $result"
            }
            
            Write-Host "Success: $StepDescription" -ForegroundColor Green
            return $true
        }
        catch {
            $retryCount++
            Write-Host "Error during $StepDescription (Attempt $retryCount/$MaxRetries)" -ForegroundColor Red
            Write-Host "Error: $_" -ForegroundColor Red
            
            if ($retryCount -lt $MaxRetries) {
                Write-Host "Invoking AI agent for solution..." -ForegroundColor Yellow
                
                $errorContext = @"
Step: $StepDescription
Current Directory: $currentDir
Error Message: $_
Last Command Output: $result
"@
                
                $aiSolution = Invoke-AIAgent -prompt $errorContext -context $currentDir
                
                if ($aiSolution) {
                    Write-Host "AI Agent suggested fix:" -ForegroundColor Yellow
                    Write-Host $aiSolution -ForegroundColor Cyan
                    
                    try {
                        # Execute the AI suggested solution
                        Invoke-Expression $aiSolution
                        Write-Host "Applied AI fix, retrying original command..." -ForegroundColor Yellow
                    }
                    catch {
                        Write-Host "Failed to apply AI fix: $_" -ForegroundColor Red
                    }
                }
            }
        }
    }
    
    Write-Host "Failed after $MaxRetries attempts. Skipping step: $StepDescription" -ForegroundColor Red
    return $false
}

# Step 1: Navigate to samples folder (as per README)
Set-Location -Path "samples"

# Step 2: Delete existing fabric folder inside Calculator
if (Test-Path "Calculator\fabric") {
    Remove-Item "Calculator\fabric" -Recurse -Force
    Write-Host "Removed existing Calculator\fabric folder" -ForegroundColor Green
}

# Step 3: Create new React Native app inside Calculator folder
Set-Location -Path "Calculator"

$createAppSuccess = Invoke-WithAIRetry -Command {
    npx --yes @react-native-community/cli@latest init CalculatorFabric --template @react-native-community/template@latest --skip-git-init
} -StepDescription "Create new React Native app"

if (-not $createAppSuccess) {
    Write-Host "Critical error: Could not create React Native app. Exiting." -ForegroundColor Red
    exit 1
}

# Step 4: Add Windows support with specified version
Set-Location -Path "CalculatorFabric"

$addWindowsSuccess = Invoke-WithAIRetry -Command {
    yarn add react-native-windows@$Version
} -StepDescription "Add react-native-windows dependency"

if ($addWindowsSuccess) {
    $initWindowsSuccess = Invoke-WithAIRetry -Command {
        npx @react-native-community/cli init-windows --template cpp-app --overwrite --logging
    } -StepDescription "Initialize Windows project"
}

# Step 5: Rename folder to fabric
Set-Location -Path ".."
$renameSuccess = Invoke-WithAIRetry -Command {
    if (Test-Path "CalculatorFabric") {
        Rename-Item CalculatorFabric fabric -Force
        Write-Host "Renamed CalculatorFabric to fabric" -ForegroundColor Green
    } else {
        throw "CalculatorFabric folder does not exist."
    }
} -StepDescription "Rename CalculatorFabric to fabric" -MaxRetries 2

if (-not $renameSuccess) {
    Write-Host "Critical error: Could not rename CalculatorFabric to fabric. Exiting." -ForegroundColor Red
    exit 1
}

# Step 6: Restore README.md and App.tsx
Set-Location -Path "fabric"
$filesToRestore = @("App.tsx", "README.md")
foreach ($file in $filesToRestore) {
    if (Test-Path "..\..\Calculator\fabric\$file") {
        Invoke-WithAIRetry -Command {
            git restore $file
        } -StepDescription "Restore $file" -MaxRetries 2
    }
}

# Step 7: Update Package.appxmanifest publisher name
$appxManifestPath = ".\windows\CalculatorFabric\Package.appxmanifest"
if (Test-Path $appxManifestPath) {
    try {
        (Get-Content $appxManifestPath) -replace 'Publisher=".*?"', 'Publisher="CN=React Native Windows Sample"' | Set-Content $appxManifestPath
        Write-Host "Updated Package.appxmanifest publisher name" -ForegroundColor Green
    }
    catch {
        Write-Host "Warning: Could not update Package.appxmanifest: $_" -ForegroundColor Yellow
    }
}

# Step 8: Update README.md with new version
$readmePath = "README.md"
if (Test-Path $readmePath) {
    try {
        $readmeContent = Get-Content $readmePath -Raw
        $readmeContent = $readmeContent -replace "Currently this samples targets RNW \d+\.\d+", "Currently this samples targets RNW $Version"
        Set-Content -Path $readmePath -Value $readmeContent
        Write-Host "Updated README.md with version $Version" -ForegroundColor Green
    }
    catch {
        Write-Host "Warning: Could not update README.md version: $_" -ForegroundColor Yellow
    }
}

# Step 9: Verify App runs (optional - can be skipped if it takes too long)
$skipBuild = Read-Host "Do you want to skip the build verification step? (y/N)"
if ($skipBuild -ne 'y') {
    Invoke-WithAIRetry -Command {
        npx @react-native-community/cli@latest run-windows
    } -StepDescription "Build and run Windows app" -MaxRetries 2
}

# Step 10: Revert GUID changes in solution/project files
Set-Location -Path "windows"
$filesToRevert = @("*.sln", "CalculatorFabric\*.vcxproj", "CalculatorFabric\*.vcxproj.filters")
foreach ($pattern in $filesToRevert) {
    Get-ChildItem -Path . -Filter $pattern -Recurse | ForEach-Object {
        Invoke-WithAIRetry -Command {
            git checkout -- $_.FullName
        } -StepDescription "Revert GUID changes in $($_.Name)" -MaxRetries 1
    }
}
Set-Location -Path ".."

# Step 11: Handle git branch
$branchName = "upgrade-rnw-sample-$Version"

# Check if we're in a git repo
$isGitRepo = Test-Path ".git"
if (-not $isGitRepo) {
    Set-Location -Path "..\..\..\"  # Go back to repo root from samples/Calculator/fabric
}

# Delete existing branch if it exists
try {
    $branchExists = git branch -r | Select-String "origin/$branchName"
    if ($branchExists) {
        Write-Host "Branch $branchName already exists. Cleaning up..." -ForegroundColor Yellow
        git checkout main 2>$null
        git branch -D $branchName 2>$null
        git push origin --delete $branchName 2>$null
    }
}
catch {
    Write-Host "Note: Could not clean up existing branch" -ForegroundColor Yellow
}

# Step 12: Commit changes and create PR
Invoke-WithAIRetry -Command {
    git checkout -b $branchName
    git add .
    git commit -m "Automated upgrade of RNW Calculator Fabric sample to version $Version"
} -StepDescription "Create git branch and commit" -MaxRetries 2

# Push branch
$pushSuccess = Invoke-WithAIRetry -Command {
    git push -u origin $branchName
} -StepDescription "Push branch to remote" -MaxRetries 2

# Create PR if push was successful
if ($pushSuccess) {
    # Check if gh CLI is authenticated
    $ghAuth = gh auth status 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "`nGitHub CLI not authentifcated. Please run 'gh auth login' to authenticate." -ForegroundColor Yellow
        Write-Host "After authentication, run the following command to create PR:" -ForegroundColor Yellow
        Write-Host "gh pr create --title 'Automated RNW Calculator Fabric Sample Upgrade to $Version' --body 'This PR was automatically created by local automation script to upgrade Calculator Fabric sample to React Native Windows version $Version.'" -ForegroundColor Cyan
    } else {
        Invoke-WithAIRetry -Command {
            gh pr create --title "Automated RNW Calculator Fabric Sample Upgrade to $Version" --body "This PR was automatically created by local automation script to upgrade Calculator Fabric sample to React Native Windows version $Version."
        } -StepDescription "Create GitHub PR" -MaxRetries 1
    }
}

Write-Host "`nScript completed!" -ForegroundColor Green
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "- Target version: $Version" -ForegroundColor White
Write-Host "- Branch name: $branchName" -ForegroundColor White
Write-Host "- Location: $(Get-Location)" -ForegroundColor White