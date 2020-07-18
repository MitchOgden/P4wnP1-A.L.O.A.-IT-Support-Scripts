
layout("US"); //set US layout

typingSpeed(5,0);
press("GUI r")
press("ENTER")
delay(1200)
type("powershell")
delay(1000)
press("CTRL SHIFT ENTER")
delay(1200)
press("LEFT")
delay(750)
press("ENTER")
delay(750)
type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)')
press("ENTER");
delay(500)
type("Set-ExecutionPolicy Unrestricted\n")
delay(500)
type("A\n")
delay(500)

//Uninstall 3D Builder
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String 3dbuilder | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Alarms and Clock
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String windowsalarms | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Calculator
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String windowscalculator | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Calendar and Mail
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String windowscommunicationsapps | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Camera
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String windowscamera | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Get Office
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String officehub | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Get Skype
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String skypeapp | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Get Started
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String getstarted | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Groove Music
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String zunemusic | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Maps
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String windowsmaps | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Microsoft Solitaire Collection
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String solitairecollection | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Money
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String bingfinance | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Movies & TV
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String zunevideo | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall News
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String bingnews | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall OneNote
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String onenote | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall People
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String people | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Phone Companion
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String windowsphone | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Photos
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String photos | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Store
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String windowsstore | ForEach-Object {$_.Line.Split(':')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Sports
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String bingsports | ForEach-Object {$_.Line.Split(\':\')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Voice Recorder
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String soundrecorder | ForEach-Object {$_.Line.Split(\':\')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Weather
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String bingweather | ForEach-Object {$_.Line.Split(\':\')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

//Uninstall Xbox
type("dism /Online /Get-ProvisionedAppxPackages | Select-String PackageName | Select-String xbox | ForEach-Object {$_.Line.Split(\':\')[1].Trim()} | ForEach-Object { dism /Online /Remove-ProvisionedAppxPackage /PackageName:$_}\n")
delay(500)

type("exit\n")
