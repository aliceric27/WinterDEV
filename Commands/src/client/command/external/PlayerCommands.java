package client.command.external;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.mysql.jdbc.Connection;
import constants.ParanoiaConstants;
import constants.ServerConstants;
import net.server.channel.Channel;
import scripting.npc.NPCScriptManager;
import server.MapleInventoryManipulator;
import tools.DatabaseConnection;
import client.command.external.MapleLogger;
import tools.MaplePacketCreator;
import client.command.external.Output;
import tools.Pair;
import client.MapleCharacter;
import client.MapleClient;
import client.inventory.MapleInventoryType;
import client.MapleJob;
//import client.MapleRank;
import client.MapleStat;
import server.MaplePortal;
import server.maps.MapleMap;
//import client.IItem;
import client.inventory.Item;
import java.util.List;
import java.util.LinkedList;
import tools.StringUtil;
import java.util.logging.Logger;
import java.util.logging.Level;

public class PlayerCommands extends EnumeratedCommands {
	private static final char heading = '@';

	@SuppressWarnings("unused")
	public static boolean execute(MapleClient c, String[] sub, char heading) {
		MapleCharacter chr = c.getPlayer();
		Channel cserv = c.getChannelServer();
		MapleCharacter victim; // For commands with targets.
		ResultSet rs; // For commands with MySQL results.
		int cost; // For commands with a fee.
		try {
			Command command = Command.valueOf(sub[0]);
			switch (command) {
				default:
					// chr.yellowMessage("Command: " + heading + sub[0] + ": does not exist.");
					return false;
				case help:
					if (sub.length >= 2 && ServerConstants.PAGINATE_HELP) {
						getHelp(Integer.parseInt(sub[1]), chr);
					} else {
						getHelp(chr);
					}
					break;
                                case fm:
                                        MapleMap target_fm = cserv.getMapFactory().getMap(910000000);
                                        MaplePortal targetPortal_fm = target_fm.getPortal(0);
                                        chr.changeMap(target_fm, targetPortal_fm);
                                        c.getSession().write(MaplePacketCreator.sendHint(" #e歡迎來到 #b自由市場入口#k! ", 250, 5));
                                        c.getSession().write(MaplePacketCreator.sendYellowTip("你已經進入自由市場."));
                                        break;
                                case home:
                                        MapleMap target_home = cserv.getMapFactory().getMap(104040000);
                                        MaplePortal targetPortal_home = target_home.getPortal(0);
                                        chr.changeMap(target_home, targetPortal_home);
                                        c.getSession().write(MaplePacketCreator.sendHint(" #e歡迎來到 #b弓箭手訓練場#k! ", 250, 5));
                                        c.getSession().write(MaplePacketCreator.sendYellowTip("你已經進入弓箭手訓練場."));
                                        break;
				case cl:
					if (sub.length >= 2) {
						String cl = sub[1];
						if (cl.equalsIgnoreCase("all")) {
                                                    clearSlot(c, 1);
                                                    clearSlot(c, 2);
                                                    clearSlot(c, 3);
                                                    clearSlot(c, 4);
                                                    clearSlot(c, 5);
                                                    chr.message("已為您刪除所有欄位");
						} else if (cl.equalsIgnoreCase("eq")) {
                                                    clearSlot(c, 1);
                                                    chr.message("已為您刪除裝備欄位");
						} else if (cl.equalsIgnoreCase("use")) {
                                                    clearSlot(c, 2);
                                                    chr.message("已為您刪除消耗欄位");
						} else if (cl.equalsIgnoreCase("etc")) {
                                                    clearSlot(c, 3);
                                                    chr.message("已為您刪除裝飾欄位");
						} else if (cl.equalsIgnoreCase("etup")) {
                                                    clearSlot(c, 4);
                                                    chr.message("已為您刪除其他欄位");
						} else if (cl.equalsIgnoreCase("cash")) {
                                                    clearSlot(c, 5);
                                                    chr.message("已為您刪除點數欄位");
						} else {
                                                    chr.message("清除裝備說明: ");
                                                    chr.message(" 使用方式：@cl [all全部] [eq裝備] [use消耗] [etc裝飾] [etup其他] [cash點數]");
                                                    chr.message(" 舉例：@cl all 將刪除全部欄位");
						}
                                        } else {
                                            chr.message("清除裝備說明: ");
                                            chr.message(" 使用方式：@cl [all全部] [eq裝備] [use消耗] [etc裝飾] [etup其他] [cash點數]");
                                            chr.message(" 舉例：@cl all 將刪除全部欄位");
                                        }
                                        break;

				case dd:
					NPCScriptManager.getInstance().dispose(c);
					c.announce(MaplePacketCreator.enableActions());
					chr.message("已恢復異常.");
					break;
				case emo:
					chr.setHp(0);
					chr.updateSingleStat(MapleStat.HP, 0);
					break;
				case quit:
					chr.saveToDB();
					c.getSession().close(false);
					break;
				case rates:
					chr.dropMessage(ServerConstants.SERVER_NAME + " 倍率");
					chr.dropMessage("經驗值: " + chr.getClient().getWorldServer().getExpRate() + "倍");
					chr.dropMessage("金錢: x" + chr.getClient().getWorldServer().getMesoRate() + "倍");
					chr.dropMessage("掉寶: x" + chr.getClient().getWorldServer().getDropRate() + "倍");
				case save:
					chr.saveToDB();
					chr.dropMessage("存檔成功.");
					break;
				/*case ap:
					if (sub.length >= 3) {
						String stat = sub[1];
						int amount = Integer.parseInt(sub[2]);
						int currentValue = 0;
						MapleStat currentStat = MapleStat.AVAILABLEAP;
						if (stat.equalsIgnoreCase("s") || stat.equalsIgnoreCase("str") || stat.equalsIgnoreCase("strength")) {
							currentValue = chr.getStr();
							currentStat = MapleStat.STR;
						} else if (stat.equalsIgnoreCase("d") || stat.equalsIgnoreCase("dex") || stat.equalsIgnoreCase("dexterity")) {
							currentValue = chr.getDex();
							currentStat = MapleStat.DEX;
						} else if (stat.equalsIgnoreCase("i") || stat.equalsIgnoreCase("int") || stat.equalsIgnoreCase("intellect")) {
							currentValue = chr.getInt();
							currentStat = MapleStat.INT;
						} else if (stat.equalsIgnoreCase("l") || stat.equalsIgnoreCase("luk") || stat.equalsIgnoreCase("luck")) {
							currentValue = chr.getLuk();
							currentStat = MapleStat.LUK;
						} else {
							chr.message("快速點能力值: ");
                                                        chr.message(" 使用方式：@AP『S / D / I / L』數值 || @AP『str / dex / int / luk』數值");
							chr.message(" 舉例：@AP s 5 [或者] @AP str 5 ∞ 獲得力量[5]");
						}
						if (currentStat != MapleStat.AVAILABLEAP) {
							if ((amount > 0 && amount <= chr.getRemainingAp()) || (amount < 0 && amount + chr.getRemainingAp() <= Short.MAX_VALUE)) {
								if ((amount + currentValue <= Short.MAX_VALUE) && (amount + currentValue >= 4)) {
									chr.setStat(currentStat, currentValue + amount);
				                    chr.setRemainingAp(chr.getRemainingAp() - amount);
				                    chr.updateSingleStat(currentStat, currentValue);
				                    chr.updateSingleStat(MapleStat.AVAILABLEAP, chr.getRemainingAp());
				                    chr.message(((amount > 0) ? "Raised " : "Lowered ") + currentStat.toString() + " by " + Math.abs(amount) + ".");
								} else if (amount + currentValue > Short.MAX_VALUE) {
									chr.message("That would put " + currentStat.toString() + " over the maximum of " + Short.MAX_VALUE + "!");
								} else if (amount + currentValue < 4) {
									chr.message("That would put " + currentStat.toString() + " under the minimum of 4!");
								}
							} else if (amount > chr.getRemainingAp()) {
								chr.message("您沒有足夠的AP!");
							} else if (amount + chr.getRemainingAp() > Short.MAX_VALUE) {
								chr.message("確認您的能力值不可超過 " + Short.MAX_VALUE + "!");
							}
							// Let's just make sure everything is up-to-date.
		                    chr.updateSingleStat(currentStat, currentValue);
		                    chr.updateSingleStat(MapleStat.AVAILABLEAP, chr.getRemainingAp());
						} else {
                                                        chr.message("快速點能力值: ");
                                                        chr.message(" 使用方式：@AP『S / D / I / L』數值 || @AP『str / dex / int / luk』數值");
                                                        chr.message(" 舉例：@AP s 5 [或者] @AP str 5 ∞ 獲得力量[5]");
						}
					} else {
                                                chr.message("快速點能力值: ");
                                                chr.message(" 使用方式：@AP『S / D / I / L』數值 || @AP『str / dex / int / luk』數值");
                                                chr.message(" 舉例：@AP s 5 [或者] @AP str 5 ∞ 獲得力量[5]");
					}
					break;*/
				case mailall:
                                        c.getPlayer().setSeenAllMail();
                                        ResultSet rs_1 = getAllMail(c.getPlayer().getName());
                                        try {
                                            chr.dropMessage("您的信箱:");
                                            while (rs_1.next()) {
                                                chr.dropMessage(rs_1.getString("MailSender") + ": " + rs_1.getString("Message"));
                                            }
                                        } catch (Exception ex) {
                                        }
					break;
				case newmail:
                                        if (c.getPlayer().newMail() > 0) {
                                            ResultSet rs_2 = getNewMail(c.getPlayer().getName());
                                            try {
                                                chr.dropMessage("您的新信:");
                                                while (rs_2.next()) {
                                                    chr.dropMessage(rs_2.getString("MailSender") + ": " + rs_2.getString("Message"));
                                                }
                                            } catch (Exception ex) {
                                            }
                                            c.getPlayer().setSeenAllMail();
                                        } else {
                                            chr.dropMessage("妳尚未有新信. 使用 @mailall 來查詢您的信件.");
                                        }
					break;
				case mail:
                                        if (sub.length <= 2) {
                                            chr.dropMessage("請使用 @mail <收件者> <訊息>.");
                                        } else {
                                            MapleCharacter victim_0 = c.getChannelServer().getPlayerStorage().getCharacterByName(sub[1]);
                                            String Reciever = sub[1];
                                            String message = StringUtil.joinStringFrom(sub, 2);
                                            try {
                                                c.getPlayer().sendMail(Reciever, message);
                                            } catch (SQLException ex) {
                                                Logger.getLogger(PlayerCommands.class.getName()).log(Level.SEVERE, null, ex);
                                            }
                                            chr.dropMessage("妳已經寄信給 " + Reciever + " 這個訊息: " + message);
                                            victim_0.dropMessage(":" + c.getPlayer().getName() + " 剛剛寄給你了一封信! 使用 @newmail 來看內容.");
                                        }
					break;
				case exp:
					chr.getEXP();
					break;


			}
			if (ServerConstants.USE_PARANOIA && ParanoiaConstants.PARANOIA_COMMAND_LOGGER && ParanoiaConstants.LOG_PLAYER_COMMANDS) {
				MapleLogger.printFormatted(MapleLogger.PARANOIA_COMMAND, "[" + c.getPlayer().getName() + "] 使用 " + heading + sub[0] + ((sub.length > 1) ? " with parameters: " + joinStringFrom(sub, 1) : "."));
			}
			return true;
		} catch (IllegalArgumentException e) {
			return false;
		}
	}

        private static void clearSlot(MapleClient c, int type) {
                MapleInventoryType invent;
                if (type == 1) {
                        invent = MapleInventoryType.EQUIP;
                } else if (type == 2) {
                        invent = MapleInventoryType.USE;
                } else if (type == 3) {
                        invent = MapleInventoryType.ETC;
                } else if (type == 4) {
                        invent = MapleInventoryType.SETUP;
                } else {
                        invent = MapleInventoryType.CASH;
                }
                List<Integer> itemMap = new LinkedList<Integer>();
                for (Item item : c.getPlayer().getInventory(invent).list()) {
                        itemMap.add(item.getItemId());
                }
                for (int itemid : itemMap) {
                        MapleInventoryManipulator.removeAllById(c, itemid, false);
                }
    }

	private static ResultSet getGMList() {
		try {
			Connection con = (Connection) DatabaseConnection.getConnection();
			PreparedStatement ps = (PreparedStatement) con.prepareStatement("SELECT name, gm FROM characters WHERE gm > 2 ORDER BY gm DESC, name DESC");
			return ps.executeQuery();
		} catch (SQLException ex) {
			MapleLogger.print(MapleLogger.EXCEPTION_CAUGHT, ex);
			return null;
		}
	}

	private static ResultSet getRankings(boolean noGMs) {
		try {
			Connection con = (Connection) DatabaseConnection.getConnection();
			PreparedStatement ps;
			if (ServerConstants.ENABLE_HARDCORE_MODE) {
				if (!noGMs) {
					ps = (PreparedStatement) con.prepareStatement("SELECT rebirths, level, name, job, hardcore, dead FROM characters WHERE gm < 2 ORDER BY rebirths DESC, level DESC, name DESC LIMIT 10");
				} else {
					ps = (PreparedStatement) con.prepareStatement("SELECT rebirths, level, name, job, hardcore, dead FROM characters ORDER BY rebirths DESC, level DESC, name DESC LIMIT 10");
				}
			} else {
				if (!noGMs) {
					ps = (PreparedStatement) con.prepareStatement("SELECT rebirths, level, name, job FROM characters WHERE gm < 2 ORDER BY rebirths DESC, level DESC, name DESC LIMIT 10");
				} else {
					ps = (PreparedStatement) con.prepareStatement("SELECT rebirths, level, name, job FROM characters ORDER BY rebirths DESC, level DESC, name DESC LIMIT 10");
				}
			}
			return ps.executeQuery();
		} catch (SQLException ex) {
			MapleLogger.print(MapleLogger.EXCEPTION_CAUGHT, ex);
			return null;
		}
	}

	protected static void getHelp(MapleCharacter chr) {
		PlayerCommands.getHelp(-1, chr);
	}

	protected static void getHelp(int page, MapleCharacter chr) {
        int pageNumber = (int) (Command.values().length / ServerConstants.ENTRIES_PER_PAGE);
        if (Command.values().length % ServerConstants.ENTRIES_PER_PAGE > 0) {
        	pageNumber++;
        }
		if (page <= 0 || pageNumber == 1) {
			chr.dropMessage(ServerConstants.SERVER_NAME + " 的 玩家指令說明");
			for (Command cmd : Command.values()) {
				chr.dropMessage(heading + cmd.name() + " - " + cmd.getDescription());
			}
		} else {
			if (page > pageNumber) {
				page = pageNumber;
			}
			int lastPageEntry = Math.min(0, (page - 1) * ServerConstants.ENTRIES_PER_PAGE);
			chr.dropMessage(ServerConstants.SERVER_NAME + " 的 玩家指令說明 (頁 " + page + " / " + pageNumber + ")");
			for (int i = lastPageEntry; i < lastPageEntry + ServerConstants.ENTRIES_PER_PAGE; i++) {
				chr.dropMessage(heading + Command.values()[i].name() + " - " + Command.values()[i].getDescription());
			}
		}
	}

	private static enum Command {
                help(" 玩家指令."),
                fm(" 傳送自由市場."),
                home(" 傳送弓箭手訓練場."),
                clall(" 全部清空."),
                cl(" 清空道具說明."),
                dd(" 解除異常."),
                emo(" 自殺."),
                quit(" 遊戲安全退出."),
                rates(" 顯示倍率"),
                save(" 遊戲存檔."),
                ap(" 快速點能力."),
                mailall(" 查看您的郵件歷史/舊郵件"),
                newmail(" 檢查你的新郵件，你沒有帶前仔細閱讀."),
                mail(" 發送給用戶的信（離線消息的完美）."),
                exp(" 查看升等的%數.");
		//version("Displays server version information.");

	    private final String description;

	    private Command(String description){
	        this.description = description;
	    }

	    public String getDescription() {
	    	return this.description;
	    }
	}

/*新增*/
    public static ResultSet getAllMail(String Reciever) {
        try {
            Connection con = (Connection) DatabaseConnection.getConnection();
            PreparedStatement ps = (PreparedStatement) con.prepareStatement("SELECT MailSender, Message FROM mail WHERE MailReciever = ? and Deleted = 0");
            ps.setString(1, Reciever);
            return ps.executeQuery();

        } catch (Exception ex) {
        }

        return null;
    }

    public static ResultSet getNewMail(String Reciever) {
        try {
            Connection con = (Connection) DatabaseConnection.getConnection();
            PreparedStatement ps = (PreparedStatement) con.prepareStatement("SELECT MailSender, Message FROM mail WHERE MailReciever = ? and Deleted = 0 and `Read` = 0");
            ps.setString(1, Reciever);
            return ps.executeQuery();

        } catch (Exception ex) {
        }

        return null;
    }
}