@echo off
@title WinterDEV �A�Ⱥ�
color f
set /p title=�w��A�ϥ� WinterDEV �A�Ⱥ�, �Ы��UEnter�i��ƻsJAR�ʧ@!~
echo.
xcopy /y /h dist\*.jar* "%ProgramFiles%\Java\jre7\lib\ext"
xcopy /y /h dist\*.jar* "%ProgramFiles%\Java\jdk1.7.0_65\jre\lib\ext"
xcopy /y /h dist\libs\*.jar* "%ProgramFiles%\Java\jre7\lib\security"
xcopy /y /h dist\libs\*.jar* "%ProgramFiles%\Java\jdk1.7.0_65\jre\lib\security"
echo.
set /p title=�ƻs����, �Ы��UEnter�i��}�Ҧ��A��!~
cls
color b
set CLASSPATH=.;dist\*
java -Xmx500m -Dwzpath=wz\ net.server.Server
pause