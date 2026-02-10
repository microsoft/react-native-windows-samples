
# Efficient script to copy fallback files into version-0.82 with badges removed
# Iterates each fallback directory ONCE, extracting original_id from frontmatter

Set-Location "G:\react-native-windows-samples\website"

# Step 1: Build set of original_ids already covered in version-0.82
$covered = @{}
Get-ChildItem "versioned_docs\version-0.82" -Filter "*.md" -Recurse | ForEach-Object {
    $lines = Get-Content $_.FullName -TotalCount 10
    foreach ($line in $lines) {
        if ($line -match '^original_id:\s*(.+)$') {
            $covered[$Matches[1].Trim()] = $true
            break
        }
    }
}
Write-Output "Already covered in 0.82: $($covered.Count)"

# Step 2: Get all doc IDs from sidebar to know which ones we need
$sidebar = Get-Content "versioned_sidebars\version-0.82-sidebars.json" -Raw | ConvertFrom-Json
$neededIds = @{}

function Extract-Ids($obj) {
    if ($obj -is [string]) {
        $script:neededIds[$obj] = $true
    } elseif ($obj -is [array]) {
        foreach ($item in $obj) { Extract-Ids $item }
    } elseif ($obj.PSObject -and $obj.PSObject.Properties) {
        foreach ($prop in $obj.PSObject.Properties) {
            Extract-Ids $prop.Value
        }
    }
}
Extract-Ids $sidebar
Write-Output "Total sidebar IDs: $($neededIds.Count)"

# Step 3: Determine which IDs still need to be copied
$toCopy = @{}
foreach ($id in $neededIds.Keys) {
    if (-not $covered.ContainsKey($id)) {
        $toCopy[$id] = $true
    }
}
Write-Output "IDs still needed: $($toCopy.Count)"

# Step 4: Iterate fallback directories in order (newest first)
$fallbackDirs = @(
    "version-0.81", "version-0.80", "version-0.79", "version-0.78",
    "version-0.77", "version-0.76", "version-0.75", "version-0.74",
    "version-0.73", "version-0.72", "version-0.71", "version-0.70",
    "version-0.69", "version-0.68", "version-0.67", "version-0.66",
    "version-0.65", "version-0.64", "version-0.63", "version-0.62",
    "version-0.61", "version-0.60"
)

$copied = 0
$noBadge = 0
$notFound = @{}

# Copy $toCopy so we can iterate
foreach ($id in @($toCopy.Keys)) { $notFound[$id] = $true }

foreach ($dir in $fallbackDirs) {
    $dirPath = "versioned_docs\$dir"
    if (-not (Test-Path $dirPath)) { continue }
    
    # Get all .md files in this fallback dir (including native-api subfolder)
    $files = Get-ChildItem $dirPath -Filter "*.md" -Recurse
    
    foreach ($file in $files) {
        # Quick frontmatter parse for original_id
        $lines = Get-Content $file.FullName -TotalCount 10
        $originalId = $null
        foreach ($line in $lines) {
            if ($line -match '^original_id:\s*(.+)$') {
                $originalId = $Matches[1].Trim()
                break
            }
        }
        
        if (-not $originalId) { continue }
        if (-not $toCopy.ContainsKey($originalId)) { continue }
        
        # This file matches an ID we need! Read full content
        $content = Get-Content $file.FullName -Raw
        
        # Determine target path (preserve subfolder structure)
        $relativePath = $file.FullName.Substring((Resolve-Path $dirPath).Path.Length + 1)
        $targetPath = "versioned_docs\version-0.82\$relativePath"
        
        # Remove badge line (various patterns)
        $newContent = $content -replace '(?m)^\!\[Architecture\]\(https://img\.shields\.io/badge/architecture-[^\)]+\)\r?\n\r?\n', ''
        
        # Update versioned ID
        $newContent = $newContent -replace 'id:\s*version-[\d\.]+-', 'id: version-0.82-'
        
        # Ensure target directory exists
        $targetDir = Split-Path $targetPath -Parent
        if (-not (Test-Path $targetDir)) {
            New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
        }
        
        Set-Content -Path $targetPath -Value $newContent -NoNewline
        $copied++
        
        # Remove from needed set
        $toCopy.Remove($originalId)
        $notFound.Remove($originalId)
    }
    
    Write-Output "After $dir : copied=$copied, remaining=$($toCopy.Count)"
    
    # Early exit if all covered
    if ($toCopy.Count -eq 0) { break }
}

# Step 5: Try docs/ folder for any remaining
if ($toCopy.Count -gt 0) {
    Write-Output "Checking docs/ for $($toCopy.Count) remaining IDs..."
    $docsFiles = Get-ChildItem "..\docs" -Filter "*.md" -Recurse
    foreach ($file in $docsFiles) {
        $lines = Get-Content $file.FullName -TotalCount 10
        $docId = $null
        foreach ($line in $lines) {
            if ($line -match '^id:\s*(.+)$') {
                $docId = $Matches[1].Trim()
                break
            }
        }
        
        if (-not $docId) { continue }
        if (-not $toCopy.ContainsKey($docId)) { continue }
        
        $content = Get-Content $file.FullName -Raw
        $relativePath = $file.FullName.Substring((Resolve-Path "..\docs").Path.Length + 1)
        $targetPath = "versioned_docs\version-0.82\$relativePath"
        
        # Remove badge
        $newContent = $content -replace '(?m)^\!\[Architecture\]\(https://img\.shields\.io/badge/architecture-[^\)]+\)\r?\n\r?\n', ''
        
        # Replace id with versioned id and add original_id
        $newContent = $newContent -replace '(?m)^(id:\s*)(.+)$', "id: version-0.82-$docId`noriginal_id: $docId"
        
        $targetDir = Split-Path $targetPath -Parent
        if (-not (Test-Path $targetDir)) {
            New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
        }
        
        Set-Content -Path $targetPath -Value $newContent -NoNewline
        $copied++
        $toCopy.Remove($docId)
        $notFound.Remove($docId)
    }
}

Write-Output ""
Write-Output "=== SUMMARY ==="
Write-Output "Total copied: $copied"
Write-Output "Still missing: $($toCopy.Count)"
if ($toCopy.Count -gt 0) {
    Write-Output "Missing IDs:"
    $toCopy.Keys | Sort-Object | ForEach-Object { Write-Output "  $_" }
}
