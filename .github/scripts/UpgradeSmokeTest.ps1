#
# UpgradeSmokeTest.ps1 is a PowerShell script designed to upgrade the
# react, react-native, and react-native-windows dependencies of a
# project to match the specified react-native-windows version

param(
    [string]$RnwVersion = "latest",
    [bool]$Force = $False
)

Function Compare-SemVer([string]$Left, [string]$Right) {
    if ($Left -eq $Right) {
        return 0
    }

    $LeftSplit = [System.Text.RegularExpressions.Regex]::Split($Left, "\.|-")
    $RightSplit = [System.Text.RegularExpressions.Regex]::Split($Right, "\.|-")

    [int]$Result = [int]($LeftSplit[0]) - [int]($RightSplit[0])  # Major compare
    if ($Result -eq 0) {
        $Result = [int]($LeftSplit[1]) - [int]($RightSplit[1])  # Minor compare
        if ($Result -eq 0) {
            $Result = [int]($LeftSplit[2]) - [int]($RightSplit[2])  # Patch compare
            if ($Result -eq 0) {
                # Could possibly include string label here
                if ($LeftSplit.Length -gt 3 -and $RightSplit.Length -gt 3) {
                    $Result = [string].Compare($LeftSplit[3], $RightSplit[3])  # Label compare
                    if ($Result -eq 0) {
                        $Result = [int]($LeftSplit[4]) - [int]($RightSplit[4])
                    }
                } elseif ($LeftSplit.Length -gt 3) {
                    $Result = -1
                } elseif ($RightSplit.Length -gt 3) {
                    $Result = 1
                }
            }
        }
    }

    return $Result
}

Write-Host "UpgradeSmokeTest -RnwVersion $RnwVersion"

[string]$LocalRnwVersion = $null

Write-Host "Determining local react-native-windows version from yarn why"

$yarnWhy = & yarn why react-native-windows
foreach($line in $yarnWhy) {
    if ($line.StartsWith("=> Found")) {
        $LocalRnwVersion = $line.Substring($line.IndexOf("@")+1).Trim("""")
        break;
    } elseif ($line.Contains("react-native-windows@npm:")) {
        $LocalRnwVersion = $line.Substring($line.IndexOf(":")+1).Split(' ')[0]
        break;
    }
}

if ($LocalRnwVersion -eq $null) {
    Write-Host "Exiting, unable to determine local react-native-windows version."
    exit 1
}

Write-Host "Local react-native-windows is $LocalRnwVersion."

[string]$TargetRnwVersion = npm info react-native-windows@$RnwVersion version

Write-Host "Target react-native-windows@$RnwVersion is $TargetRnwVersion."

$Compare = Compare-SemVer -Left $LocalRnwVersion -Right $TargetRnwVersion

if ($Compare -eq 0) {
    Write-Host "Local react-native-windows version == target react-native-windows version."
} elseif ($Compare -lt 0) {
    Write-Host "Local react-native-windows version < target react-native-windows version."
} elseif ($Compare -gt 0) {
    Write-Host "Local react-native-windows version > target react-native-windows version."
}

if ($Compare -ge 0 -and -not $Force) {
    Write-Host "Exiting, react-native-windows local version >= target react-native-windows version."
    exit 1
}

if ($Force) {
    Write-Host "Starting upgrade (forced)..."
} else {
    Write-Host "Starting upgrade..."
}

[string]$ReactVersion = npm info react-native-windows@$TargetRnwVersion devDependencies.react
Write-Host "RNW $TargetRnwVersion depends on react@$ReactVersion"

[string]$ReactNativeVersion = npm info react-native-windows@$TargetRnwVersion devDependencies.react-native
Write-Host "RNW $TargetRnwVersion depends on react-native@$ReactNativeVersion"

$yarnUpgradeCmd = "upgrade"
if (Test-Path ".yarn") {
    $yarnUpgradeCmd = "up"
}

Write-Host "Upgrading to react@$ReactVersion..."
yarn $yarnUpgradeCmd react@$ReactVersion

if ($LastExitCode -ne 0) {
    Write-Error "Failed to upgrade to react @$ReactVersion"
    exit $LastExitCode
}

Write-Host "Upgrading to react-native@$ReactNativeVersion..."
yarn $yarnUpgradeCmd react-native@$ReactNativeVersion

if ($LastExitCode -ne 0) {
    Write-Error "Failed to upgrade to react-native@$ReactNativeVersion"
    exit $LastExitCode
}

Write-Host "Upgrading to react-native-windows@$TargetRnwVersion..."
yarn $yarnUpgradeCmd react-native-windows@$TargetRnwVersion

if ($LastExitCode -ne 0) {
    Write-Error "Failed to upgrade to react-native-windows@$TargetRnwVersion"
    exit $LastExitCode
}

exit 0
