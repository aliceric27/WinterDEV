/*
	Winter冬季 刪除指定物品
*/

var name;
var status = 0;
var thing = 0;
var slot;
var p = null;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 2 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getPlayer().gmLevel() == 3) {
                cm.sendGetText("#e嘿#b『#h #』#k我可以幫你檢查玩家背包. \r\n\r\n#r請輸入玩家ID"); 
            } else {
                cm.sendNext("#e 嘿#b『#h #』#k我可以幫你#r單一刪除#k裝備.");
                //cm.dispose();
            }
        } else if (status == 1) {
	if (cm.getPlayer().gmLevel() == 5)
	    name = cm.getText(); 
	else
	    name = cm.getName();

            p = cm.getCharByName(name);
            if (p != null) {
                cm.sendSimple("#e請選擇#b\r\n#L0#裝備#l\r\n#L1#消耗#l\r\n#L2#裝飾#l\r\n#L3#其他#l\r\n#L4#點數#l");
            } else {
                cm.sendOk("#e#r該玩家沒上或是不同頻道.");
		cm.dispose();
            }
        } else if (status == 2) {
            string = "#e選一個想要刪除 #r全部#k 的物品.\r\n#n";
            thing = selection;
            if (selection == 0) {                
                cm.sendSimple(string+cm.EquipList(p.getClient()));
            } else if (selection == 1) {
                cm.sendSimple(string+cm.UseList(p.getClient()));
            } else if (selection == 2) {
                cm.sendSimple(string+cm.SetupList(p.getClient()));
            } else if (selection == 3) {
                cm.sendSimple(string+cm.ETCList(p.getClient()));
            } else if (selection == 4) {
                cm.sendSimple(string+cm.CashList(p.getClient()));
            }
        } else if (status == 3) {
            slot = selection;
            send = "#e該玩家有#r ";
            send2 = "#k 的物品 #i";
            if (thing == 0) {
                send += p.getItemQuantity(p.getEquipId(selection), true); 
                send2 += p.getEquipId(selection);
            } else if (thing  == 1) {
                send += p.getItemQuantity(p.getUseId(selection), true);
                send2 += p.getUseId(selection);
            } else if (thing == 2) {
                send += p.getItemQuantity(p.getSetupId(selection), true);
                send2 += p.getSetupId(selection);
            } else if (thing == 3) {
                send += p.getItemQuantity(p.getETCId(selection), true);
                send2 += p.getETCId(selection);
            } else if (thing == 4) {
                send += p.getItemQuantity(p.getCashId(selection), true);
                send2 += p.getCashId(selection);
            }
            var send3 = send + send2 + "# 確定要刪除 #r全部#k 的該物品?";
            cm.sendYesNo(send3);
        } else if (status == 4) {
            if (thing == 0) { 
                p.deleteAll(p.getEquipId(slot));
            } else if (thing == 1) {
                p.deleteAll(p.getUseId(slot));
            } else if (thing == 2) {
                p.deleteAll(p.getSetupId(slot));
            } else if (thing == 3) {
                p.deleteAll(p.getETCId(slot));
            } else if (thing == 4) {
                p.deleteAll(p.getCashId(slot));
            }
            cm.sendOk("#e成功刪除 #b" + name + "#k 的物品");
            cm.dispose();
        }
    }
}  