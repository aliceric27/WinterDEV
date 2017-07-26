package net.server;

import java.io.Console;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author kevintjuh93
 */
public class CreateINI {

    public static void main(String args[]) {
        StringBuilder sb = new StringBuilder();
        String nextline = "\r\n";//Because I can, and it's free.
        String host;
        byte worlds;
        Console con = System.console();

        System.out.println("歡迎使用WinterDEV\r\n\r\n");

	sb.append("# WinterDEV 的設定，請勿擅自修改，要修改請重新使用[設定.bat]\r\n");
	sb.append("# 修改日期 " + getDateStamp() + "\r\n\r\n");
	sb.append("# 世界標誌: [0 = 無] [1 = Event] [2 = New] [3 = Hot]\r\n\r\n");

        System.out.println("世界標誌: [0 = 無] [1 = Event] [2 = New] [3 = Hot]\r\n\r\n");
        
	host = con.readLine("請輸入您的IP: ");
	sb.append("host=").append(host).append("\r\n\r\n");
                
        worlds = Byte.parseByte(con.readLine("請輸入您要幾個世界? "));
        sb.append("worlds=").append(worlds).append("\r\n\r\n");

        System.out.println("\r\n");


        for (byte b = 0; b < worlds; b++) {
            sb.append("# 伺服器設定").append(b).append("\r\n");

            System.out.println("伺服器設定 " + b);
            if (b > 1) {
                System.out.println("Make sure you create a npc folder for this world!");
            }
            sb.append("flag").append(b).append("=").append(
                    Integer.parseInt(con.readLine("\t世界標誌　 (值  0~3): "))).append("\r\n");

            sb.append("servermessage").append(b).append("=").append(
                    con.readLine("\t伺服器訊息 (值 Text): ")).append("\r\n");

            sb.append("eventmessage").append(b).append("=").append(
                    con.readLine("\t頻道訊息　 (值 Text): ")).append("\r\n");

            sb.append("whyamirecommended").append(b).append("=").append(
                    con.readLine("\t推薦訊息　 (值 Text): ")).append("\r\n");

            sb.append("channels").append(b).append("=").append(
                    Byte.parseByte(con.readLine("\t頻道數量　 (值 1~20): "))).append("\r\n");

            sb.append("exprate").append(b).append("=").append(
                    Integer.parseInt(con.readLine("\t經驗值倍率 (值 1~∞): "))).append("\r\n");

            sb.append("droprate").append(b).append("=").append(
                    Byte.parseByte(con.readLine("\t掉寶倍率　 (值 1~127): "))).append("\r\n");

            sb.append("mesorate").append(b).append("=").append(
                    Integer.parseInt(con.readLine("\t金錢倍率　 (值 1~∞): "))).append("\r\n");

            sb.append("bossdroprate").append(b).append("=").append(
                    Byte.parseByte(con.readLine("\t王掉寶倍率 (值 1~127): "))).append("\r\n");

            System.out.println(nextline);
            sb.append("\r\n");
        }

        sb.append("\r\n").append("gmserver=").append(Boolean.parseBoolean(con.readLine("\tGM Server (true/false): ")));
        FileOutputStream out = null;
        try {
            out = new FileOutputStream("WinterDEV.ini", false);
            out.write(sb.toString().getBytes());
        } catch (Exception ex) {
        } finally {
            try {
                if (out != null) {
                    out.close();
                }
            } catch (IOException ex) {
            }
        }

        System.out.println("設定完成.");
    }
    private static String getDateStamp() {
        Date now = new Date();
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
	return sdf.format(now);
    }
}
