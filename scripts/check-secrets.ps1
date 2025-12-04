# Simple local secret scanner for common keywords.
# Exits with code 1 if potential secrets are found.

$Patterns = @(
    'apiKey','API_KEY','secret','SECRET','token','TOKEN','password','passwd',
    'private_key','PRIVATE_KEY','-----BEGIN PRIVATE KEY','client_secret','ACCESS_TOKEN'
)

$excludeDirs = @('.git','node_modules','.angular','dist','docs')

$files = Get-ChildItem -Recurse -File -ErrorAction SilentlyContinue | Where-Object {
    $full = $_.FullName.ToLower()
    foreach ($d in $excludeDirs) {
        if ($full -like "*\\$d\\*") { return $false }
    }
    return $true
}

$found = @()
foreach ($p in $Patterns) {
    $matches = Select-String -Path ($files.FullName) -Pattern $p -SimpleMatch -ErrorAction SilentlyContinue
    if ($matches) { $found += $matches }
}

if ($found.Count -gt 0) {
    Write-Host "Potential secrets found:" -ForegroundColor Yellow
    $found | Select-Object FileName, LineNumber, Line | Format-Table -AutoSize
    Write-Error "Secret scan failed: remove or rotate any sensitive values before committing."
    exit 1
} else {
    Write-Host "No common secret patterns found." -ForegroundColor Green
    exit 0
}
