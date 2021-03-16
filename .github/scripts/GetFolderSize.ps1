#
# GetFolderSize.ps1 is a PowerShell script designed to upgrade the
# react, react-native, and react-native-windows dependencies of a
# project to match the specified react-native-windows version

param(
    [string]$location = '.'
)

$location = Resolve-Path $location

$size = "{0:N2} MB" -f ((Get-ChildItem $location -Recurse | Measure-Object -Property Length -Sum -ErrorAction Stop).Sum / 1MB)

Write-Host "$location is $size"

exit 0