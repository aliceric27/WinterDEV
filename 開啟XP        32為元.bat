@echo off
@title WinterDEV 服務端
color f
set /p title=歡迎你使用 WinterDEV 服務端, 請按下Enter進行複製JAR動作!~
echo.
xcopy /y /h dist\*.jar* "%ProgramFiles%\Java\jre7\lib\ext"
xcopy /y /h dist\*.jar* "%ProgramFiles%\Java\jdk1.7.0_65\jre\lib\ext"
xcopy /y /h dist\libs\*.jar* "%ProgramFiles%\Java\jre7\lib\security"
xcopy /y /h dist\libs\*.jar* "%ProgramFiles%\Java\jdk1.7.0_65\jre\lib\security"
echo.
set /p title=複製完畢, 請按下Enter進行開啟伺服器!~
cls
color b
set CLASSPATH=.;dist\*
java -Xmx500m -Dwzpath=wz\ net.server.Server
pause