#
# CheckUnbrokenExclusions.ps1 is a PowerShell script designed to check that
# website/.unbroken_exclusions is properly configured to handle the
# versioning system that docusaurus uses.

param()

Write-Host "CheckUnbrokenExclusions"

[string] $WebsiteRoot = Resolve-Path "$PSScriptRoot/../../website"

$StartingLocation = Get-Location
Set-Location -Path $WebsiteRoot

Write-Host "Running fix-unbroken"
$YarnOutput = yarn run fix-unbroken

Write-Host "Checking no files have changed"
$GitOutput = git status --porcelain=v1

$ErrorCode = 0

if ($GitOutput)
{
    Write-Error "The website/.unbroken_exclusions file is out of sync. Please run 'yarn run fix-unbroken' in the website directory and commit the changes."
    $ErrorCode = 1
}

Set-Location -Path $StartingLocation
exit $ErrorCode
