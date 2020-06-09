param (
	[Parameter(Mandatory=$true)]
	[string[]] $Components
)

$Components | ForEach-Object {
	$componentList += '--add', $_
}

$VsInstallerPath = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vs_installer.exe";
$VsInstallPath = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\2019\Enterprise";

$p = Start-Process `
	-FilePath "$VsInstallerPath" `
	-ArgumentList (
		'modify',
		'--installPath', "`"$VsInstallPath`"" ,

		'--norestart',
		'--quiet' + `
		$componentList
	) `
	-Wait -PassThru -RedirectStandardError $env:TEMP\vsErr.txt -RedirectStandardOutput $env:TEMP\vsLog.txt

$p.WaitForExit()
Write-Output Finished with exitcode:
Write-Output $p.ExitCode

Write-Output Errors:
Get-Content $env:TEMP\vsErr.txt
Write-Output Log:
Get-Content $env:TEMP\vsLog.txt
return $p.ExitCode