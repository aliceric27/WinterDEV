@echo off
@title WinterDEV 
color f
set CLASSPATH=.;dist\*
java -Xmx100m net.server.CreateINI
pause
