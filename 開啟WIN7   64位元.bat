@echo off
@title WinterDEV 服務端
color f
set /p title=歡迎你使用 WinterDEV 服務端, 請按下Enter進行複製JAR動作!~
echo.
copy /y dist\*.jar* "%ProgramFiles%\Java\jre7\lib\ext"
copy /y dist\*.jar* "%ProgramFiles%\Java\jdk1.7.0_80\jre\lib\ext"
copy /y dist\*.jar* "%ProgramFiles%\Java\jre7\lib\security"
copy /y dist\*.jar* "%ProgramFiles%\Java\jdk1.7.0_80\jre\lib\security"
echo.
set /p title=複製完畢, 請按下Enter進行開啟伺服器!~
cls
color b
set CLASSPATH=.;dist\*
java -Xmx600m -Dwzpath=wz\ net.server.Server
pause
