/*
	Winter冬季 萬能Npc
*/

var status = -1;
var possibleJobs = new Array();
var maps = [
/*Boss傳送*/[100000005, 105070002, 800010100, 105090900, 682000001, 240020101, 240020401, 230040420, 801040003, 220080000, 211042300, 240040700, 800020130, 551030100, 270050000],
/*練功傳送*/[551030100, 682000403, 251010402, 220060301, 240040600, 250020000, 230040400, 910500000, 910300000, 680010000, 670000100, 980010020, 682000304],
/*地圖傳送*/[100000203, 109020001, 130000100, 101030104, 120000000, 102000000, 101000000, 100000000, 103000000, 680000000, 200000000, 110000000, 221000000, 222000000, 230000000, 211000000, 220000000, 260000000, 250000000, 105040300, 600000000, 682000000, 800000000, 801000000, 240000000, 270000100, 970000000, 130000200]
];
var jobA = false;
var warper = false;
var job;
var newJob;
var chosenMap = -1;
var chosenSection = -1;

function start() {
var fsS = "";
    if (cm.getPlayer().getFs() == 0)
	fsS = "#e#r[凡人]#b#n";
    if (cm.getPlayer().getFs() == 1)
	fsS = "#e#r[聖人]#b#n";
    if (cm.getPlayer().getFs() == 2)
	fsS = "#e#r[神仙]#b#n";
    if (cm.getPlayer().getFs() == 3)
	fsS = "#e#r[帝王]#b#n";
    if (cm.getPlayer().getFs() == 4)
	fsS = "#e#r[終結者]#b#n";
	fsS += " #e#r["+JobName(cm.getJobId())+"]#b#n";
    var ret  = "#r-- 小助手主頁（冬季戀曲Ver.83） >>　#b玩家【#e#r#h ##b#n】\r\n";
        ret += "您的狀態為："+fsS+" #e"+cm.getPlayer().getRebirths()+"#n 轉\r\n";
        ret += "#g===================#d#e普通項目#n#g====================\r\n";
        ret += "#L1##b快速轉職#l　#L2##b世界導遊#l　#L3##r共用#b髮型師#l　#L4##r#eNew#n#b飛轉升#l\r\n";
        ret += "#L5##r#eAP#n#b重置#l　   #L6##b背包狀態#l　#L7##r#eMusic#n#b點歌#l    #L8##r#eShop#n#b商店#l\r\n\r\n";//裝備兌換
        ret += "#g===================#d#e特殊項目#n#g====================\r\n";
        ret += "#L51##b技能點滿#l    #L52##b強化裝備#l    #L53##b刪指定物品#l #L54##b裝備兌換#l\r\n";
        ret += "#L55##b偷取技能#l\r\n\r\n"
        ret += "#g===================#d#e其他項目#n#g====================\r\n";
        ret += "#L101##b等級排行#l   #L102##b轉生排行#l   #L103##b飛升排行#l      #L104##b金錢排行#l"
/*
    if (cm.haveItem(5420008) == true && cm.getPlayer().getBossLog('高級服務票券',168,0) == 0 && cm.getPlayer().getItemNpc() == 0) {
	cm.getPlayer().setItemNpc(1);
	cm.getPlayer().SetItemNpc(1);
	cm.getPlayer().setBossLog('高級服務票券');
	cm.sendOk("你的 #b高級服務票券#k 已開通. #b您可以使用萬能Npc了.");
	cm.dispose();
    } else if (cm.haveItem(5420008) == true && cm.getPlayer().getBossLog('高級服務票券',168,0) == 0 && cm.getPlayer().getItemNpc() == 1) {
	cm.getPlayer().setItemNpc(0);
	cm.getPlayer().SetItemNpc(0);
	cm.gainItem(5420008,-1);
	cm.sendOk("你的 #b#i5420008#高級服務票券#k 已過期了.");
	cm.dispose();
    } else if (cm.haveItem(5420008) == false && cm.getPlayer().getBossLog('高級服務票券',168,0) == 0 && cm.getPlayer().getItemNpc() == 0) {
	cm.sendOk("你並沒有 #b高級服務票券#k 請至購物商場購買 #b價格 #r3000#b 點數");
	cm.dispose();
    } else if (cm.haveItem(5420008) == false && cm.getPlayer().getBossLog('高級服務票券',168,0) == 1 && cm.getPlayer().getItemNpc() == 1) {
	cm.gainItem(5420008,1);
	cm.sendOk("你的 #b高級服務票券#k 已遺失, #b系統立即發環給你.");
	cm.dispose();
    } else if (cm.haveItem(5420008) == false && cm.getPlayer().getBossLog('高級服務票券',168,0) == 0 && cm.getPlayer().getItemNpc() == 1) {
	cm.getPlayer().setItemNpc(0);
	cm.getPlayer().SetItemNpc(0);
	cm.sendOk("已經修復系統延緩, 重新點擊萬能Npc即可");
	cm.dispose();
    } else if (cm.haveItem(5420008) == true && cm.getPlayer().getBossLog('高級服務票券',168,0) == 1 && cm.getPlayer().getItemNpc() == 1) {
	cm.sendSimple(ret);
    } else {
	cm.sendOk("#rbosslog#k數據錯誤");
	cm.dispose();
    }
*/
cm.sendSimple(ret);
}


function action(mode, type, selection) {
    status++;
    if(mode != 1){
        cm.dispose();
        return;
    }
    if (!jobA && !warper)
        if (selection == 1)
            jobA = true;
        else if (selection == 2)
            warper = true;
    if (jobA)
        jobAdv(selection);
    else if (warper)
        warp(selection)

    else if (selection)
	if (selection == 3) {// 髮型師
	    cm.openNpc(9900000);
	} else if (selection == 4) {// 轉升
	    cm.openNpc(2170002);
        	} else if (selection == 5) {// 屬性重置
	    ResetStats();
        	} else if (selection == 6) {// 檢查裝備
	    Inventory_text1 = "#b正常", Inventory_text2 = "#b正常", Inventory_text3 = "#b正常", Inventory_text4 = "#b正常", Inventory_text5 = "#b正常";
	    if (cm.getInventory(1).isFull()) Inventory_text1 = "#r爆滿 >>#k#n 請空出一格" 
	    if (cm.getInventory(2).isFull()) Inventory_text2 = "#r爆滿 >>#k#n 請空出一格"
	    if (cm.getInventory(3).isFull()) Inventory_text3 = "#r爆滿 >>#k#n 請空出一格"
	    if (cm.getInventory(4).isFull()) Inventory_text4 = "#r爆滿 >>#k#n 請空出一格"
	    if (cm.getInventory(5).isFull()) Inventory_text5 = "#r爆滿 >>#k#n 請空出一格" 
	    var Inventory  = "\r\n#d#e裝備欄："+Inventory_text1+"#n";
	          Inventory += "\r\n#d#e消耗欄："+Inventory_text2+"#n";
	          Inventory += "\r\n#d#e裝飾欄："+Inventory_text3+"#n";
	          Inventory += "\r\n#d#e其他欄："+Inventory_text4+"#n";
	          Inventory += "\r\n#d#e特殊欄："+Inventory_text5+"#n";
	          cm.sendOk("#e#b你的背包狀態 >>"+Inventory);
	          cm.dispose();
                } else if (selection == 7) {// 音樂點歌
                    cm.openNpc(2000);
                } else if (selection == 8) {// 職業商店
                    cm.openNpc(9220020);
                } else if (selection == 51) {// 技能全滿
                    TeachSkills_id();
                } else if (selection == 52) {// 強化武器
                    cm.openNpc(2001);
                } else if (selection == 53) {// 刪除指定物品
                    cm.openNpc(2002);
                } else if (selection == 54) {// 裝備兌換
                    cm.openNpc(2161010);
/*
        } else if (selection == 52) {// 選擇技能
            cm.openNpc(2160001);
*/
	} else if (selection == 101) {// 等級排行
	    cm.showlvl();
	} else if (selection == 102) {// 轉生排行
            cm.showreborns();
	} else if (selection == 103) {// 飛升排行
	    cm.showrebornsfs();
	} else if (selection == 104) {// 金錢排行
            cm.showmeso();
	}
}

function warp(selection){
    if (status == 0)
        cm.sendSimple("#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#Boss 傳送#l\r\n#L1#練功地圖#l\r\n#L2#世界地圖#l");
    else if (status == 1) {
        chosenSection = selection;
        var selStr = "Select your destination.#b";
        for (var i = 0; i < maps[selection].length; i++)
            selStr += "\r\n#L" + i + "##m" + maps[selection][i] + "#";
        cm.sendSimple(selStr);
    } else if (status == 2) {
        chosenMap = selection;
        cm.sendYesNo("你想去 #m" + maps[chosenSection][selection] + "#?");
    } else if (status == 3) {
        cm.warp(maps[chosenSection][chosenMap]);
        cm.dispose();
    }
}

function jobAdv(selection){
    if (status == 0) {
        newJob = cm.getJobId() + 1;
        if (cm.getJobId() % 10 == 2) {
            cm.sendOk("你已經#r完成#k所有轉職工作了.");//滿轉後
            cm.dispose();
        } else if (cm.getJobId() % 10 >= 0 && cm.getJobId() % 100 != 0) {
            var secondJob = cm.getJobId() % 10 == 0;
            if ((secondJob && cm.getLevel() < 70) || (!secondJob && cm.getLevel() < 120)) {
		if (secondJob && cm.getLevel() < 70)
                    cm.sendOk("你的等級尚未達到#r70級#k, 請你提升等級吧.");
		if (!secondJob && cm.getLevel() < 120)
                    cm.sendOk("你的等級尚未達到#r120級#k, 請你提升等級吧.");
                    cm.dispose();
            } else
                cm.sendYesNo("您的等級已到達 " + cm.getLevel() + ". 你想成為 #b"+JobName(j)+"#k ?");
        } else {
            if (cm.getJobId() % 1000 == 0) {
                if (cm.getLevel() >= 10) 
                    for (var i = 1; i < 6; i++) 
                        possibleJobs.push(cm.getJobId() + 100 * i);
                else if (cm.getLevel() >= 8)
                    possibleJobs.push(cm.getJobId() + 200);
            } else if (cm.getLevel() >= 30) {
                switch (cm.getJobId()) {
                    case 100:
                    case 200:
                        possibleJobs.push(cm.getJobId() + 30);
                    case 300:
                    case 400:
                    case 500:
                        possibleJobs.push(cm.getJobId() + 20);
                    case 1100:
                    case 1200:
                    case 1300:
                    case 1400:
                    case 1500:
					case 2100:
                        possibleJobs.push(cm.getJobId() + 10);
                        break;
                }
            }
            if (possibleJobs.length == 0) {
                cm.sendOk("你的等級尚未達到#r轉職需求#k, 請你提升等級吧.");
                cm.dispose();
            } else {
                var text = "你能夠選擇下列選項#b";
                for (var j = 0; j < possibleJobs.length; j++)
                    text += "\r\n#L"+j+"#"+JobName(j)+"#l";
                cm.sendSimple(text);
            }
        }
    } else if (status == 1 && cm.getJobId() % 100 != 0) { //三轉 - 四轉的地方
        cm.changeJobById(cm.getJobId() + 1);
	TeachSkills();// 技能點滿
        cm.dispose();
    } else if (status == 1) {
        cm.changeJobById(possibleJobs[selection]);
	TeachSkills();// 技能點滿
        if (cm.getJobId() % 10 == 0)
        cm.dispose();
    } else if (status == 2) {
        job = selection;
        cm.sendYesNo("Are you sure you want to job advance?");
    } else if (status == 3) {
        cm.changeJobById(possibleJobs[job]);
	TeachSkills();// 技能點滿
        cm.dispose();
    }
}


/*職業中文*/
function JobName(j) {
    var jobName = "Null";
    if (possibleJobs[j] == 100 || newJob == 100 || j == 100)
	jobName = "劍士";
    if (possibleJobs[j] == 200 || newJob == 200 || j == 200)
	jobName = "法師";
    if (possibleJobs[j] == 300 || newJob == 300 || j == 300)
	jobName = "弓箭手";
    if (possibleJobs[j] == 400 || newJob == 400 || j == 400)
	jobName = "盜賊";
    if (possibleJobs[j] == 500 || newJob == 500 || j == 500)
	jobName = "海盜";
    if (possibleJobs[j] == 110 || newJob == 110 || j == 110)
	jobName = "狂戰士";
    if (possibleJobs[j] == 120 || newJob == 120 || j == 120)
	jobName = "見習騎士";
    if (possibleJobs[j] == 130 || newJob == 130 || j == 130)
	jobName = "槍騎兵";
    if (possibleJobs[j] == 210 || newJob == 210 || j == 210)
	jobName = "火毒";
    if (possibleJobs[j] == 220 || newJob == 220 || j == 220)
	jobName = "冰雷";
    if (possibleJobs[j] == 230 || newJob == 230 || j == 230)
	jobName = "僧侶";
    if (possibleJobs[j] == 310 || newJob == 310 || j == 310)
	jobName = "獵人";
    if (possibleJobs[j] == 320 || newJob == 320 || j == 320)
	jobName = "弩弓手";
    if (possibleJobs[j] == 410 || newJob == 410 || j == 410)
	jobName = "刺客";
    if (possibleJobs[j] == 420 || newJob == 420 || j == 420)
	jobName = "俠盜";
    if (possibleJobs[j] == 510 || newJob == 510 || j == 510)
	jobName = "打手";
    if (possibleJobs[j] == 520 || newJob == 520 || j == 520)
	jobName = "槍手";
    if (possibleJobs[j] == 111 || newJob == 111 || j == 111)
	jobName = "十字軍";
    if (possibleJobs[j] == 121 || newJob == 121 || j == 121)
	jobName = "騎士";
    if (possibleJobs[j] == 131 || newJob == 131 || j == 131)
	jobName = "龍騎士";
    if (possibleJobs[j] == 211 || newJob == 211 || j == 211)
	jobName = "火毒魔導士";
    if (possibleJobs[j] == 221 || newJob == 221 || j == 221)
	jobName = "冰雷魔導士";
    if (possibleJobs[j] == 231 || newJob == 231 || j == 231)
	jobName = "祭師";
    if (possibleJobs[j] == 311 || newJob == 311 || j == 311)
	jobName = "遊俠";
    if (possibleJobs[j] == 321 || newJob == 321 || j == 321)
	jobName = "狙擊手";
    if (possibleJobs[j] == 411 || newJob == 411 || j == 411)
	jobName = "暗殺者";
    if (possibleJobs[j] == 421 || newJob == 421 || j == 421)
	jobName = "神偷";
    if (possibleJobs[j] == 511 || newJob == 511 || j == 511)
	jobName = "格鬥家";
    if (possibleJobs[j] == 521 || newJob == 521 || j == 521)
	jobName = "神槍手";
    if (possibleJobs[j] == 112 || newJob == 112 || j == 112)
	jobName = "英雄";
    if (possibleJobs[j] == 122 || newJob == 122 || j == 122)
	jobName = "聖騎士";
    if (possibleJobs[j] == 132 || newJob == 132 || j == 132)
	jobName = "黑騎士";
    if (possibleJobs[j] == 212 || newJob == 212 || j == 212)
	jobName = "火毒大魔導士";
    if (possibleJobs[j] == 222 || newJob == 222 || j == 222)
	jobName = "冰雷大魔導士";
    if (possibleJobs[j] == 232 || newJob == 232 || j == 232)
	jobName = "主教";
    if (possibleJobs[j] == 312 || newJob == 312 || j == 312)
	jobName = "箭神";
    if (possibleJobs[j] == 322 || newJob == 322 || j == 322)
	jobName = "神射手";
    if (possibleJobs[j] == 412 || newJob == 412 || j == 412)
	jobName = "夜使者";
    if (possibleJobs[j] == 422 || newJob == 422 || j == 422)
	jobName = "闇影神偷";
    if (possibleJobs[j] == 512 || newJob == 512 || j == 512)
	jobName = "拳霸";
    if (possibleJobs[j] == 522 || newJob == 522 || j == 522)
	jobName = "槍神";
    if (possibleJobs[j] == 1100 || newJob == 1100 || j == 110)
	jobName = "聖魂騎士1階";
    if (possibleJobs[j] == 1200 || newJob == 1200 || j == 1200)
	jobName = "烈焰巫師1階";
    if (possibleJobs[j] == 1300 || newJob == 1300 || j == 1300)
	jobName = "破風使者1階";
    if (possibleJobs[j] == 1400 || newJob == 1400 || j == 1400)
	jobName = "暗夜行者1階";
    if (possibleJobs[j] == 1500 || newJob == 1500 || j == 1500)
	jobName = "閃雷悍將1階";
    if (possibleJobs[j] == 1110 || newJob == 1110 || j == 1110)
	jobName = "聖魂騎士2階";
    if (possibleJobs[j] == 1210 || newJob == 1210 || j == 1210)
	jobName = "烈焰巫師2階";
    if (possibleJobs[j] == 1310 || newJob == 1310 || j == 1310)
	jobName = "破風使者2階";
    if (possibleJobs[j] == 1410 || newJob == 1410 || j == 1410)
	jobName = "暗夜行者2階";
    if (possibleJobs[j] == 1510 || newJob == 1510 || j == 1510)
	jobName = "閃雷悍將2階";
    if (possibleJobs[j] == 1111 || newJob == 1111 || j == 1111)
	jobName = "聖魂騎士3階";
    if (possibleJobs[j] == 1211 || newJob == 1211 || j == 1211)
	jobName = "烈焰巫師3階";
    if (possibleJobs[j] == 1311 || newJob == 1311 || j == 1311)
	jobName = "破風使者3階";
    if (possibleJobs[j] == 1411 || newJob == 1411 || j == 1411)
	jobName = "暗夜行者3階";
    if (possibleJobs[j] == 1511 || newJob == 1511 || j == 1511)
	jobName = "閃雷悍將3階";
    if (possibleJobs[j] == 2100 || newJob == 2100 || j == 2100)
	jobName = "狂狼勇士1階";
    if (possibleJobs[j] == 2110 || newJob == 2110 || j == 2110)
	jobName = "狂狼勇士2階";
    if (possibleJobs[j] == 2111 || newJob == 2111 || j == 2111)
	jobName = "狂狼勇士3階";
    if (possibleJobs[j] == 2112 || newJob == 2112 || j == 2112)
	jobName = "狂狼勇士4階";
    return jobName;
}

/*屬性重置對話*/
function ResetStats() {
    p = cm.c.getPlayer();
    newAp = p.getRemainingAp();  //總能力點	
    newStr =  p.getStr();
    newDex =  p.getDex();	
    newInt =  p.getInt();
    newLuk =  p.getLuk();
    var ApText  = "#e#b您使用屬性重置系統, #k請多多擅用指令, 您現在的屬性點情況如下：\r\n";
	ApText += "  #b原本：#k\r\n";
	ApText += "    力量: #r" + newStr + " #k點    敏捷: #r" + newDex + " #k點    智力: #r" + newInt + " #k點    運氣: #r" + newLuk + " #k點\r\n";
	ApText += "    未分配的AP: #r" + newAp + " #k點\r\n\r\n";
	cm.getPlayer().resetStats();
	newAp = p.getRemainingAp();  //總能力點
	ApText += "  #r重置後：#k\r\n";
	ApText += "    力量: #r4 #k點    敏捷: #r4 #k點    智力: #r4 #k點    運氣: #r4 #k點\r\n";
	ApText += "    未分配的AP: #r" + newAp + " #k點";
	cm.sendOk(ApText);
	cm.dispose();
}

/*技能點滿*/
function TeachSkills() {
    skills = cm.getSkillsByJob(cm.getJobId());
    var message = "";
    for(var i = 0; i < skills.length; i++) {
	cm.teachSkills(new Array(skills[i]), -1, -1);
	//cm.teachSkills(技能ID, 技能等級, 技能最大等級); -1 為最大等級
    }
    cm.getPlayer().saveToDB();
    cm.getPlayer().dropMessage(5, "[系統公告] 你的技能再轉職中, 幫您點滿了.");
    cm.dispose();
}

/*技能點滿*/
function TeachSkills_id() {
    if (cm.getJobId() % 100 == 0 && cm.getJobId() != 1000 && cm.getJobId() != 2000 && cm.getJobId() != 0) {
	var skills_id = [cm.getJobId()];
    } else if (cm.getJobId() % 10 == 0 && cm.getJobId() % 100 != 0) {
	var skills_id = [cm.getJobId()-10,cm.getJobId()];
    } else if (cm.getJobId() % 10 == 1 && cm.getJobId() % 100 != 0) {
	var skills_id = [cm.getJobId()-11,cm.getJobId()-1,cm.getJobId()];
    } else if (cm.getJobId() % 10 == 2 && cm.getJobId() % 100 != 0) {
	var skills_id = [cm.getJobId()-12,cm.getJobId()-2,cm.getJobId()-1,cm.getJobId()];
    }
    var message = "";
    for(var j = 0; j < skills_id.length; j++) {
    skills = cm.getSkillsByJob(skills_id[j]);
	for(var i = 0; i < skills.length; i++) {
	    cm.teachSkills(new Array(skills[i]), -1, -1);
	}
    }
    cm.getPlayer().saveToDB();
    cm.sendOk("技能已點滿");
    cm.dispose();
}
