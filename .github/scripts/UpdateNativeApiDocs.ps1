# UpdateNativeApiDocs.ps1 is a PowerShell script designed to download the
# API docs from the specified RNW CI build in ADO and integrate them into
# our docs folder, properly tagged with New/Old architecture tags

param(
    [Parameter(Mandatory=$true)]
    [int]$BuildId,
    [boolean]$Clean = $True
)

Function Download-BuildArtifact([int]$BuildId, [string] $ArtifactName, [string]$DestPath = $env:TEMP)
{
    Write-Host "Downloading `"$ArtifactName`" from build $BuildId"
    [string]$ArtifactUrl = "https://dev.azure.com/ms/8d8e50dd-c5b4-4b44-8668-86558c5aa5b7/_apis/build/builds/$BuildId/artifacts?artifactName=$ArtifactName&api-version=7.1&%24format=zip"
    [string]$ArtifactZipFile = Join-Path $DestPath "$ArtifactName.zip"

    Write-Debug "Downloading `"$ArtifactUrl`""
    Invoke-WebRequest $ArtifactUrl -OutFile $ArtifactZipFile

    Write-Debug "Extracting `"$ArtifactZipFile`""
    Expand-Archive -LiteralPath $ArtifactZipFile -DestinationPath $DestPath -Force

    [string]$ExtractedPath = Join-Path $DestPath $ArtifactName

    Write-Debug "Artifact extracted to `"$ExtractedPath`""
    return $ExtractedPath
}

Function Create-WinRtApiDocWithBadge([string]$SourceDocPath, [string]$DestDocPath, [string]$BadgeMd)
{
    Write-Host "Creating `"$DestDocPath`""

    # Load content
    $Content = (Get-Content $SourceDocPath -Raw)

    # Add Badge
    $Content = $Content -replace "---\r\n\r\n", "---`r`n`r`n$($BadgeMd)`r`n`r`n"

    # Clean up spacing
    $Content = $Content -replace "(\r\n){3,}", "`r`n`r`n"

    # Fix links
    $Content = $Content -replace "https://docs.microsoft.com/uwp/api/Windows.UI.Xaml", "https://learn.microsoft.com/uwp/api/Windows.UI.Xaml" # Workaround for https://github.com/asklar/winmd2md/issues/8
    $Content = $Content -replace "https://docs.microsoft.com/uwp/api/Microsoft.UI", "https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI" # Workaround for https://github.com/asklar/winmd2md/issues/7
    $Content = $Content -replace "https://docs.microsoft.com/uwp/api/Microsoft.ReactNative\.(\w+\.)*(\w+)", '$2' # Workaround for https://github.com/asklar/winmd2md/issues/9
    
    $Content = $Content.Trim()

    # Write final file
    $Content | Out-File -Encoding utf8 $DestDocPath
}

Function Get-DocKind([string]$DocPath) {
    [string]$Kind = "unknown"
    $KindMatches = ((Get-Content $DocPath -Raw) | Select-String -Pattern 'Kind: `(\w+)`').Matches
    if (($KindMatches.Length -gt 0) -and ($KindMatches[0].Groups.Length -gt 1)) {
        $Kind = $KindMatches[0].Groups[1]
    }
    return $Kind
}

Function Merge-WinRtApiDocs([string]$OldArchDocsPath, [string]$NewArchDocsPath, [string]$RepoRoot, [boolean]$Clean)
{
    Write-Host "Merging WinRT API docs"

    [string]$NewAndOldArchBadgeMd = "![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)"
    [string]$NewArchOnlyBadgeMd   = "![Architecture](https://img.shields.io/badge/architecture-new_only-blue)"
    [string]$OldArchOnlyBadgeMd   = "![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)"

    $OldArchFiles = Get-ChildItem -Path $OldArchDocsPath -File -Filter *.md
    $NewArchFiles = Get-ChildItem -Path $NewArchDocsPath -File -Filter *.md

    $AllFilesSet = New-Object System.Collections.Generic.HashSet[string];
    $($OldArchFiles; $NewArchFiles) | ForEach-Object { $AllFilesSet.Add($_.Name) | Out-Null }

    $AllTypesByKind = @{}

    [string]$OutputDocsPath = Join-Path $RepoRoot "docs/native-api"

    if ($Clean) {
        Write-Debug "Cleaning `"$OutputDocsPath`""
        Remove-Item -Path $OutputDocsPath -Recurse -Force
    }
    New-Item $OutputDocsPath -ItemType "Directory" | Out-Null

    # Find and process docs that are Old Arch Only
    Compare-Object $OldArchFiles $NewArchFiles -Property Name | Where-Object { $_.SideIndicator -eq "<=" } |
        ForEach-Object {
            Write-Debug "Old Arch Only: $($_.Name)"
            Create-WinRtApiDocWithBadge -SourceDocPath (Join-Path $OldArchDocsPath $_.Name) -DestDocPath (Join-Path $OutputDocsPath $_.Name) -BadgeMd $OldArchOnlyBadgeMd
            if ($AllFilesSet.Remove($_.Name)) {
                $Kind = Get-DocKind -DocPath (Join-Path $OutputDocsPath $_.Name)
                if ($AllTypesByKind[$Kind] -eq $Null) { $AllTypesByKind[$Kind] = @() }
                $AllTypesByKind[$Kind] += $_.Name.Replace("-api-windows.md", "")
            }
        }
    
    # Find and process docs that are New Arch Only
    Compare-Object $NewArchFiles $OldArchFiles -Property Name | Where-Object { $_.SideIndicator -eq "<=" } |
        ForEach-Object {
            Write-Debug "New Arch Only: $($_.Name)"
            Create-WinRtApiDocWithBadge -SourceDocPath (Join-Path $NewArchDocsPath $_.Name) -DestDocPath (Join-Path $OutputDocsPath $_.Name) -BadgeMd $NewArchOnlyBadgeMd
            if ($AllFilesSet.Remove($_.Name)) {
                $Kind = Get-DocKind -DocPath (Join-Path $OutputDocsPath $_.Name)
                if ($AllTypesByKind[$Kind] -eq $Null) { $AllTypesByKind[$Kind] = @() }
                $AllTypesByKind[$Kind] += $_.Name.Replace("-api-windows.md", "")
            }
        }

    # Process remaining docs are both Old and New Arch
    $AllFilesSet |
        ForEach-Object {
            Write-Debug "Old&New Arch: $_"
            $OldContent = (Get-Content (Join-Path $OldArchDocsPath $_) -Raw)
            $NewContent = (Get-Content (Join-Path $NewArchDocsPath $_) -Raw)
            if ($OldContent -eq $NewContent)
            {
                Write-Debug "Same Content: $_"
                Create-WinRtApiDocWithBadge -SourceDocPath (Join-Path $OldArchDocsPath $_) -DestDocPath (Join-Path $OutputDocsPath $_) -BadgeMd $NewAndOldArchBadgeMd
            }
            else
            {
                Write-Debug "Diff Content: $_"
                $MergedFilePath = (Join-Path $DownloadPath $_)

                $NewContent = $NewContent -replace "---\r\n\r\n", "---`r`n`r`n# New Architecture`r`n`r`n"
                $NewContent = $NewContent -replace "\r\n#", "`r`n##"

                $OldContent = $OldContent -replace "---(.*\r\n){1,}---\r\n\r\n", "`r`n`r`n# Old Architecture`r`n`r`n"
                $OldContent = $OldContent -replace "\r\n#", "`r`n##"

                ($NewContent + $OldContent) | Out-File -Encoding utf8 -NoNewline $MergedFilePath
                Create-WinRtApiDocWithBadge -SourceDocPath $MergedFilePath -DestDocPath (Join-Path $OutputDocsPath $_) -BadgeMd $NewAndOldArchBadgeMd
            }
            $Kind = Get-DocKind -DocPath (Join-Path $OutputDocsPath $_)
            if ($AllTypesByKind[$Kind] -eq $Null) { $AllTypesByKind[$Kind] = @() }
            $AllTypesByKind[$Kind] += $_.Replace("-api-windows.md", "")
        }
    
    # Clean up links to enum type values (workaround for https://github.com/asklar/winmd2md/issues/10)
    (Get-ChildItem -Path $OutputDocsPath -File -Filter *-api-windows.md) | ForEach-Object {
        $FilePath = $_.FullName
        if (Test-Path $FilePath) {
            $FileContent = Get-Content $FilePath -Raw
            if ($AllTypesByKind.ContainsKey('enum')) {
                $AllTypesByKind['enum'] | ForEach-Object {
                    $FileContent = $FileContent -replace "\($_#\w+\)", "($_)"
                }
            }
            $FileContent | Out-File -Encoding utf8 $FilePath
        }
    }
    
    # Recreate index (workaround for https://github.com/asklar/winmd2md/issues/10)
    [string]$IndexContent = ""
    $IndexContent += "---`r`n"
    $IndexContent += "id: Native-API-Reference`r`n"
    $IndexContent += "title: Microsoft.ReactNative APIs`r`n"
    $IndexContent += "---`r`n"
    $IndexContent += "`r`n"
    $IndexContent += $NewAndOldArchBadgeMd + "`r`n"
    $IndexContent += "`r`n"

    $AllTypesByKind.Keys | Where-Object { $_ -ne 'unknown' } | Sort-Object | ForEach-Object {
        $KindLabel = "$($_.Substring(0,1).ToUpper())$($_.Substring(1))"
        if ($_.EndsWith("s")) { $KindLabel += "es" } else { $KindLabel += "s" }
        $IndexContent += "## $KindLabel`r`n"
        $AllTypesByKind[$_] | Sort-Object | ForEach-Object {
            $IndexContent += "- [$_]($_)`r`n"
        }
        $IndexContent += "`r`n"
    }

    $IndexContent = $IndexContent.Trim()

    $IndexPath = (Join-Path $OutputDocsPath "index-api-windows.md")

    Write-Host "Creating `"$IndexPath`""
    $IndexContent | Out-File -Encoding utf8 $IndexPath

    # Update sidebar
    $SidebarsFile = Join-Path $RepoRoot "website/sidebars.json"
    $SidebarsJson = Get-Content -Path $SidebarsFile -Raw | ConvertFrom-Json
    $NativeApiEntries = @()

    $NativeApiEntries += "native-api/Native-API-Reference"

    $AllTypesByKind.Keys | Where-Object { $_ -ne 'unknown' } | Sort-Object | ForEach-Object {
        $KindLabel = "$($_.Substring(0,1).ToUpper())$($_.Substring(1))"
        if ($_.EndsWith("s")) { $KindLabel += "es" } else { $KindLabel += "s" }
        $KindObject = @{}
        $KindObject['type'] = 'subcategory'
        $KindObject['label'] = $KindLabel
        $KindObject['ids'] = @()
        $AllTypesByKind[$_] | Sort-Object | ForEach-Object {
            $KindObject['ids'] += "native-api/$_"
        }
        $NativeApiEntries += $KindObject
    }

    $SidebarsJson.apis."Native API" = $NativeApiEntries

    Write-Host "Updating `"$SidebarsFile`""
    $SidebarsJson | ConvertTo-Json -Depth 4 | Set-Content -Path $SidebarsFile
}

[string] $RepoRoot = Resolve-Path "$PSScriptRoot/../.."

$StartingLocation = Get-Location
Set-Location -Path $RepoRoot

try
{
    Write-Host "UpdateNativeApiDocs -BuildId $BuildId"

    $DownloadPath = Join-Path $env:TEMP "UpdateNativeApiDocs-$BuildId"
    Write-Debug "Downloading artifacts to `"$DownloadPath`""
    if (Test-Path $DownloadPath)
    {
        Write-Debug "Deleting existing `"$DownloadPath`""
        Remove-Item -Path $DownloadPath -Recurse -Force
    }

    Write-Debug "Creating new `"$DownloadPath`""
    New-Item $DownloadPath -ItemType "Directory" | Out-Null

    Write-Debug "Downloading WinRT API docs from $BuildId"
    [string]$OldArchDocsPath = Download-BuildArtifact -BuildId $BuildId -ArtifactName "WinRT Api docs - Universal Build X64Debug-1" -DestPath $DownloadPath
    [string]$NewArchDocsPath = Download-BuildArtifact -BuildId $BuildId -ArtifactName "WinRT Api docs - Universal Build X64DebugFabric-1" -DestPath $DownloadPath

    Merge-WinRtApiDocs -OldArchDocsPath $OldArchDocsPath -NewArchDocsPath $NewArchDocsPath -RepoRoot $RepoRoot -Clean $Clean
}
finally
{
    Set-Location -Path $StartingLocation
}

exit 0