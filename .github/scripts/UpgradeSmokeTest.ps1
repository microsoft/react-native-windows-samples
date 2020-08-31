#
# UpgradeSmokeTest.ps1 is a PowerShell script designed to upgrade the
# react, react-native, and react-native-windows dependencies of a
# project to match the specified react-native-windows version

param(
    [string]$RnwVersion = "latest"
)

Write-Host "UpgradeSmokeTest -RnwVersion $RnwVersion"

[string]$ReactVersion = npm info react-native-windows@$RnwVersion devDependencies.react
Write-Host "RNW $RnwVersion depends on react@$ReactVersion"

[string]$ReactNativeVersion = npm info react-native-windows@$RnwVersion devDependencies.react-native
Write-Host "RNW $RnwVersion depends on react-native@$ReactNativeVersion"

Write-Host "Upgrading to react@$ReactVersion..."
yarn upgrade react@$ReactVersion

if ($LastExitCode -ne 0) {
    Write-Error "Failed to upgrade to react @$ReactVersion"
    exit $LastExitCode
}

Write-Host "Upgrading to react-native@$ReactNativeVersion..."
yarn upgrade react-native@$ReactNativeVersion

if ($LastExitCode -ne 0) {
    Write-Error "Failed to upgrade to react-native@$ReactNativeVersion"
    exit $LastExitCode
}

Write-Host "Upgrading to react-native-windows@$RnwVersion..."
yarn upgrade react-native-windows@$RnwVersion

if ($LastExitCode -ne 0) {
    Write-Error "Failed to upgrade to react-native-windows@$RnwVersion"
    exit $LastExitCode
}

exit 0
