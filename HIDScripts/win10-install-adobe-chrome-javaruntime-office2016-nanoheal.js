
layout("US"); //set US layout

typingSpeed(5,0);
//Open Powershell as Admin
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
// Hide Powershell window
type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)')
press("ENTER");
delay(500)
//Set Execution Policy to Unrestricted to Allow for Chocolatey to Install
type("Set-ExecutionPolicy Unrestricted\n")
delay(500)
type("A\n")
delay(500)
type("Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString(\'https://chocolatey.org/install.ps1\'))\n")
delay(10000)
type("exit\n")
delay(500)
//Open Powershell as Admin
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
// Hide Powershell window
type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)')
press("ENTER");
delay(500)
// Use Chocolatey to Install Current Version of Adobe Reader
type("choco install adobereader\n")
delay(1000)
type("A\n")
delay(5000)
// Use Chocolatey to Install Current Version of Google Chrome
type("choco install googlechrome\n")
delay(1000)
type("A\n")
delay(5000)
// Use Chocolatey to Install Current Version of Java Runtime
type("choco install javaruntime\n")
delay(1000)
type("A\n")
delay(5000)
type("exit\n")
delay(1000)
// Set Google Chrome as Default Browser
press("GUI s")
delay(1000)
type("default web\n")
delay(1000)
press("ENTER")
delay(1000)
press("ENTER")
delay(1000)
press("TAB")
delay(1000)
press("ENTER")
delay(1000)
press("ALT F4")
delay(1000)
//Open Powershell as Admin
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
// Hide Powershell window
type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)')
press("ENTER");
delay(500)
//Create System Variable for Emulated USB Drive on P4wnP1 A.L.O.A. and change directory to the newly mapped drive
type("$usbpath = Get-WMIObject Win32_Volume | ? { $_.Label -eq \'P4wnP1 ALOA\' } | select name \n")
delay(500)
type("cd $usbpath.name\n")
delay(500)
//Execute silent install of Office 2016 | Look at guide on Patreon to see how you setup an Office 2016 image to install silently
type("office2016\\setup.exe /adminfile silentinstall.MSP \n")
delay(500)
press("LEFT")
delay(500)
press("ENTER")
type("exit\n")
//Open Powershell as Admin
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
// Hide Powershell window
type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)')
press("ENTER");
delay(500)
// Download application .exe from web url and install silently | Look at guide on Patreon to see how you perform silent installs of .msi and .exe files
type("start \'https://avira.nanoheal.com/Dashboard/eula.php?id=[I don't think so friend]\'")
delay(2000)
press("ALT F4")
delay(500)
type(".\Downloads\NanohealClient-Setup-64bit-V2880-AVIRA-[I don't think so friend].exe /verysilent")
delay(500)
press("LEFT")
delay(500)
press("ENTER")
delay(500)
type("Set-ExecutionPolicy restricted\n")
type("exit\n")
