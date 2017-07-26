@echo off
@title WinterDEV 服務端設定
color f
set CLASSPATH=.;dist\*
java -Xmx100m net.server.CreateINI
pause