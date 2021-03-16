#
# GetFolderSize.ps1 is a PowerShell script designed to calculate
# the total size of a folder in MB

param(
    [string]$location = '.'
)

$location = Resolve-Path $location

$size = "{0:N2} MB" -f ((Get-ChildItem $location -Recurse | Measure-Object -Property Length -Sum -ErrorAction Stop).Sum / 1MB)

Write-Host "$location is $size"

exit 0
