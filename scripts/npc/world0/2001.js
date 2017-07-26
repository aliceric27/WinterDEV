/*
	Winter冬季 強化武器
*/

importPackage(Packages.client);

var status = 0;
var selected = 1;
var amount_ = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    selected = selection;
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
		    var String = "#b強化裝備系統已經開放, #r4#b 種屬性只能強化其中 #r1#b 種屬性,#r 請慎重的點選.";
		     	String +="\r\n\r\n#b隨機獲得某屬性 #r30 #b到 #r120#b, 試試運氣吧!  #d需要#i4030002##r  50 #d個#n\r\n#e#d#L0#強化力量#l#L1#強化敏捷#l#L2#強化智慧#l#L3#強化幸運#l#n";
			String +="\r\n\r\n#b隨機獲得某攻擊 #r40 #b到 #r160#b, 試試運氣吧!  #d需要#i4030002##r 100 #d個#n\r\n#e#d#L4#強化#r物理#d攻擊#l               #L5#強化#r魔法#d攻擊#l#n";
		    cm.sendSimple(String);
		} else if (status == 1) {
		    if ((selection >= 0 && selection <= 3 && cm.haveItem(4030002, 50)) || (selection >= 4 && selection <= 5 && cm.haveItem(4030002, 100))) {
		    	if (selection == 0) {
			    String = "#b請選你想要「強化#r力量#b」的裝備.\r\n";
		    	} else if (selection == 1) {
			    String = "#b請選你想要「強化#r敏捷#b」的裝備.\r\n";
		    	} else if (selection == 2) {
			    String = "#b請選你想要「強化#r智慧#b」的裝備.\r\n";
		    	} else if (selection == 3) {
			    String = "#b請選你想要「強化#r幸運#b」的裝備.\r\n";
		    	} else if (selection == 4) {
			    String = "#b請選你想要「強化#r物理攻擊#b」的裝備.\r\n";
		    	} else if (selection == 5) {
			    String = "#b請選你想要「強化#r魔法攻擊#b」的裝備.\r\n";
		    	}
		    	    amount_ = selection;
		    	    cm.sendSimple(String+cm.EquipList(cm.getPlayer().getClient()));
		    } else {
		    	if (selection >= 0 && selection <= 3){
			    cm.sendOk("你的#i4030002#不足 需要 #r50#k 個");
			    cm.dispose();
		    	} else if (selection >= 4 && selection <= 5){
			    cm.sendOk("你的#i4030002#不足 需要 #r100#k 個");
			    cm.dispose();
			}
		    }
		} else if (status == 2) {
		    var chance_vip1 = Math.floor(Math.random() * 15 + 15);//大獎
		    var chance_vip2 = Math.floor(Math.random() * 15 + 15);//大獎

		    var chance1 = Math.floor(Math.random() * 30 + 30);
		    var chance1_1 = Math.floor(Math.random() * 60 + 60);//大獎
		    var chance2 = Math.floor(Math.random() * 40 + 40);
		    var chance2_1 = Math.floor(Math.random() * 80 + 80);//大獎
		    if (amount_ >= 0 && amount_ <= 3){
			if (chance_vip1 == chance_vip2){
		    	    cm.upgradeItem(selected, amount_, chance1_1, 4030002, -50);
			    cm.dispose();
			} else {
		    	    cm.upgradeItem(selected, amount_, chance1, 4030002, -50);
			    cm.dispose();
			}
		    } else if (amount_ >= 4 && amount_ <= 5){
			if (chance_vip1 == chance_vip2){
		    	    cm.upgradeItem(selected, amount_, chance2_1, 4030002, -100);
			    cm.dispose();
			} else {
		    	    cm.upgradeItem(selected, amount_, chance2, 4030002, -100);
			    cm.dispose();
			}
		    }
         }
    }
}