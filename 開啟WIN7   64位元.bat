@echo off
@title WinterDEV �A�Ⱥ�
color f
set /p title=�w��A�ϥ� WinterDEV �A�Ⱥ�, �Ы��UEnter�i��ƻsJAR�ʧ@!~
echo.
copy /y E:\Downloads\GMS\v83MS\v83Server\WinterDEV\dist\*.jar* "%ProgramFiles%\Java\jre7\lib\ext"
copy /y E:\Downloads\GMS\v83MS\v83Server\WinterDEV\dist\*.jar* "%ProgramFiles%\Java\jdk1.7.0_80\jre\lib\ext"
copy /y E:\Downloads\GMS\v83MS\v83Server\WinterDEV\dist\*.jar* "%ProgramFiles%\Java\jre7\lib\security"
copy /y E:\Downloads\GMS\v83MS\v83Server\WinterDEV\dist\*.jar* "%ProgramFiles%\Java\jdk1.7.0_80\jre\lib\security"
echo.
set /p title=�ƻs����, �Ы��UEnter�i��}�Ҧ��A��!~
cls
color b
set CLASSPATH=.;dist\*
java -Xmx600m -Dwzpath=wz\ net.server.Server
pause