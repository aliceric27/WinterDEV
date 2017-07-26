/*
	Winter冬季 轉升飛升
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
var job_1 = cm.getJobId() >= 0 && cm.getJobId() <= 522;
var job_2 = cm.getJobId() >= 1000 && cm.getJobId() <= 1512;
var job_3 = cm.getJobId() >= 2000 && cm.getJobId() <= 2112;
var Trebirths = [cm.getPlayer().getRebirths() == 10,cm.getPlayer().getRebirths() == 20,cm.getPlayer().getRebirths() == 30,cm.getPlayer().getRebirths() == 45];

var Rebirths = cm.getPlayer().getRebirths();
var Rlv = Rebirths + 201;
var Rlv1 = Rlv - 200;
var RetText = "";
var fsText = ["#e#r凡人#b#n","#e#r聖人#b#n","#e#r神仙#b#n","#e#r帝王#b#n","#e#r終結者#b#n"];
    for(var i = 0; i < 3; i++) {
	if (Rlv1+i <= 50)
	RetText += "["+(Rlv+i)+" = "+(Rlv1+i)+"轉] "
    }
    var ret  = "#b本轉升功能設置為#e(#k冒險家#b轉#k冒險家#b)#n #k技能不會重置#b.";
        ret += "\r\n#b　　　　　　　　#e(#k冒險家#b轉#r貴族家#b)#n #r所有技能將重置#b.";
        ret += "\r\n#e開放#r狂郎勇士#b可以使用#d『偷取技能』#b這項功能.#n";
        ret += "\r\n\r\n1.轉升等級需求："+RetText+"#r#b";
        ret += "\r\n2.轉升需要物品：#t4031456# #r75#b 顆　　　　　圖示：#i4031456#";
    if (!Trebirths[cm.getPlayer().getFs()])
        ret += "#b\r\n\r\n\#L1#進行#r轉生#b [等級需求：#r"+Rlv+"#b]#l";
    if (Trebirths[cm.getPlayer().getFs()])
	ret += "#b\r\n\r\n#L2#進行#r飛升#b [將飛升為 "+fsText[cm.getPlayer().getFs()+1]+" ]#l";
        ret += "#b\r\n\r\n#L3#查詢#r飛升#b條件以及好處 [本服特色-詳細說明]#l";

		if (status == 0) {
		    cm.sendSimple(ret);
		} else if (status == 1) {
		    if (selection == 1) {
			if (cm.getLevel() >= Rlv) {
			    cm.sendNext("偉大的#b[#h #] #k,您目前轉生: #r"+cm.getPlayer().getRebirths()+"#k次 .\r\n你已經通過一個漫長而充滿挑戰的道路,終於成為了風起雲湧的人物.按照您目前的轉生等級,如果您能給我#b75個#k#i4031456#,我可以用我的乾坤大挪移心法,助你進行投胎轉世!您將成為1級的 #b新手#k, #r技能保留#k。\r\n#k#e你是否想#r轉生#k呢?.現在轉生還有可能得到神秘禮品.\r\n#b[如果你已經#r飛升#b，將得到更多的屬性點,請查飛升說明]");
			} else {
			    cm.sendOk("對不起，您必須達到"+Rlv+"級, 才能轉生.");
			    cm.dispose();
			}
		    } else if (selection == 2) {
			if (cm.getPlayer().getRebirths() == 10 && cm.getPlayer().getFs() == 0) {
			    cm.getPlayer().setFs(1);
			    cm.getPlayer().dropMessage(6,"[楓之谷公告]玩家: 【" + cm.getPlayer() + "】 飛升成功，正式升為[聖人]，超越了凡人!");
			    cm.sendOk("[恭喜]您成功的由凡人變成了#r[聖人]#k\r\n注意：你現在必須轉一次生，才能恢復正常的屬性點！\r\n從現在開始，轉生將得到更多的點，經驗也比凡人要高，快去體驗一下吧！");
			} else if (cm.getPlayer().getRebirths() == 20 && cm.getPlayer().getFs() == 1) {
			    cm.getPlayer().setFs(2);
			    cm.getPlayer().dropMessage(6,"[楓之谷公告]玩家: 【" + cm.getPlayer() + "】 飛升成功，正式升為[神仙]，超越了聖人!");
			    cm.sendOk("[恭喜]您成功的由聖人變成了#r[神仙]#k\r\n注意：你現在必須轉一次生，才能恢復正常的屬性點！\r\n從現在開始，轉生將得到更多的點，經驗也比聖人要高，快去體驗一下吧！");
			} else if (cm.getPlayer().getRebirths() == 30 && cm.getPlayer().getFs() == 2) {
			    cm.getPlayer().setFs(3);
			    cm.getPlayer().dropMessage(6,"[楓之谷公告]玩家: 【" + cm.getPlayer() + "】 飛升成功，正式升為[帝王]，超越了神仙!");
			    cm.sendOk("[恭喜]您成功的由聖人變成了#r[帝王]#k\r\n注意：你現在必須轉一次生，才能恢復正常的屬性點！\r\n從現在開始，轉生將得到更多的點，經驗也比神仙要高，快去體驗一下吧！");
			} else if (cm.getPlayer().getRebirths() == 45 && cm.getPlayer().getFs() == 3) {
			    cm.getPlayer().setFs(4);
			    cm.getPlayer().dropMessage(6,"[楓之谷公告]玩家: 【" + cm.getPlayer() + "】 飛升成功，正式升為[終結者]，超越了帝王!");
			    cm.sendOk("[恭喜]您成功的由帝王變成了#r[終結者]#k\r\n注意：你現在必須轉一次生，才能恢復正常的屬性點！\r\n從現在開始，轉生將得到更多的點，經驗也比帝王要高，快去體驗一下吧！");
			}
			cm.dispose();
		    } else if (selection == 3) {
			var retfs  = "#r問：飛升是什麼意思，為何要開通飛升？#k\r\n";
			    retfs += "答：飛升目前大致分為：聖人 - 神仙 - 帝王 - 終結者\r\n";
			    retfs += "#d分別有這三種的裝備為[聖]，[仙]，[帝],由怪暴出不同屬性，隨機的飛升裝備，飛升的裝備各種屬性都比普通的好，你可能在打怪的過程中已經暴出，但是不能穿，雙擊會提示您沒有飛升，不能穿戴，屬性大致為：\r\n";
			    retfs += "     #b[聖]  比普通的要高10-15隨機提升\r\n";
			    retfs += "     [仙]  比普通的要高20-30隨機提升\r\n";
			    retfs += "     [帝]  比普通的要高30-45隨機提升\r\n";
			    retfs += "     [終]  比普通的要高45-60隨機提升\r\n\r\n";
			    retfs += "飛升前：[經驗倍數沒有]\r\n";
			    retfs += "　　#r後：[聖]1.3倍[仙]1.6倍[帝]2倍[終結]3倍\r\n";
			    retfs += "#b飛升前：[轉生後的屬性點為:轉生次數*50點]\r\n";
			    retfs += "#r　　後：\r\n";
			    retfs += "[聖]  [轉生後的屬性點為:100+轉生次數* 70點]\r\n";
			    retfs += "[仙]  [轉生後的屬性點為:200+轉生次數* 90點]\r\n";
			    retfs += "[帝]  [轉生後的屬性點為:300+轉生次數*120點]\r\n";
			    retfs += "[終]  [轉生後的屬性點為:400+轉生次數*200點]";
			cm.sendNext(retfs);
			cm.dispose();
		    }
		} else if (status == 2) {
		    if (cm.getPlayer().getRebirths() >= 50) {
			cm.sendOk("#b你目前已經滿轉了");    
			cm.dispose();
			return;
		    }
		    if (cm.haveItem(4031456,75)) {
			var Text1 = "↙#d#e技能保留#n#b", Text2 = "↙#d#e技能保留#n#b", Text3 = "↙#d#e技能保留#n#b";
			if(!job_1) Text1 = "↙#r#e技能重置#n#b";
			if(!job_2) Text2 = "↙#r#e技能重置#n#b";
			if(!job_3) Text3 = "↙#r#e技能重置#n#b";
			    cm.sendSimple("請選擇你要轉的職業#b\r\n#L1#新手#l "+Text1+"\r\n\r\n#L2#貴族#l "+Text2+"\r\n\r\n#L3#傳說#l "+Text3);
		    } else {
			cm.sendOk("#b對不起，你沒有足夠的道具，你需要75個#i4031456#來完成轉生");    
			cm.dispose();
			//return;
		    }
		} else if (status == 3) {
		    cm.gainItem(4031456,-75);
			if (selection == 1) {
			    if(!job_1)
				cm.maxMastery();
				cm.changeJobById(0);
			}
			if (selection == 2) {
			    if(!job_2)
				cm.maxMastery();
				cm.changeJobById(1000);
			}
			if (selection == 3) {
			    if(!job_3)
				cm.maxMastery();
				cm.changeJobById(2000);
			}
			cm.getPlayer().doReborn(); 
			cm.getPlayer().setRebirths(cm.getPlayer().getRebirths()+1);
			cm.getPlayer().resetStats1();
			if(cm.getPlayer().getFs()==1) {
				cm.sendOk("#b您做得非常好#k, 為你成功#e投胎轉世#n高興吧！★\r\n#r[由於你是聖人，屬性點比凡人多100點，在次恭喜您]"); 
				cm.getPlayer().dropMessage(6,"[轉生系統]: 恭喜【聖人：" + cm.getPlayer() + "】 轉生成功 目前轉升數為： "+cm.getPlayer().getRebirths()+" 轉！");
			} else if(cm.getPlayer().getFs()==2) {
				cm.sendOk("#b您做得非常好#k, 為你成功#e投胎轉世#n高興吧！★\r\n#r[由於你是神仙，屬性點比凡人多200點，在次恭喜您]"); 
				cm.getPlayer().dropMessage(6,"[轉生系統]: 恭喜【神仙：" + cm.getPlayer() + "】 轉生成功 目前轉升數為： "+cm.getPlayer().getRebirths()+" 轉！");
			} else if(cm.getPlayer().getFs()==3) {
				cm.sendOk("#b您做得非常好#k, 為你成功#e投胎轉世#n高興吧！★\r\n#r[由於你是帝王，屬性點比凡人多300點，在次恭喜您]"); 
				cm.getPlayer().dropMessage(6,"[轉生系統]: 恭喜【帝王：" + cm.getPlayer() + "】 轉生成功 目前轉升數為： "+cm.getPlayer().getRebirths()+" 轉！");
			} else if(cm.getPlayer().getFs()==4) {
				cm.sendOk("#b您做得非常好#k, 為你成功#e投胎轉世#n高興吧！★\r\n#r[由於你是終結者，屬性點比凡人多400點，在次恭喜您]"); 
				cm.getPlayer().dropMessage(6,"[轉生系統]: 恭喜【終結者：" + cm.getPlayer() + "】 轉生成功 目前轉升數為： "+cm.getPlayer().getRebirths()+" 轉！");
			} else {
				cm.sendOk("#b您做得非常好#k, 為你成功#e投胎轉世#n高興吧！★"); 
				cm.getPlayer().dropMessage(6,"[轉生系統]: 恭喜【凡人：" + cm.getPlayer() + "】 轉生成功 目前轉升數為： "+cm.getPlayer().getRebirths()+" 轉！");
			}
			cm.dispose();

	}            
    }
}
 
    
