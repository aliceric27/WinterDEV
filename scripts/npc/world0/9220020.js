/*
	Winter冬季 職業商店
*/

var status = 0;

function start() {
    cm.sendSimple("Hey there, I'm #rCharles#k. What would you like to do today?\r\n#L0#劍士商店#l\r\n#L1#法師商店#l\r\n#L2#盜賊商店#l\r\n#L3#弓手商店#l\r\n#L4#海盜商店#l\r\n#L5#其他#l\r\n");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (status == 1) {
        if (selection == 0) {
            cm.openShop(100100);
        } else if (selection == 1) {
            cm.openShop(101101);
        } else if (selection == 2) {
            cm.openShop(102102);
        } else if (selection == 3) {
            cm.openShop(103103);
        } else if (selection == 4) {
            cm.openShop(104104);
        } else if (selection == 5) {
            cm.sendSimple("#r#e其他商店#n#k\r\n#L0#武器商店#l\r\n#L1#楓葉商店#l\r\n#L2#永恆商店#l\r\n#L3#廣播販賣#l\r\n#L4#椅子商店#l\r\n#L5#共用商店#l\r\n");
        }
    } else if (status == 2) {
        if (selection == 0) {
            cm.openShop(105105);
        } else if (selection == 1) {
            cm.openShop(106106);
        } else if (selection == 2) {
            cm.openShop(107107);
        } else if (selection == 3) {
            cm.openShop(9999993);
        } else if (selection == 4) {
            cm.openShop(9999994);
        } else if (selection == 5) {
            cm.openShop(9999999);
        } else {
            cm.dispose();
        }
    }
}