/*
	Winter�V�u ¾�~�ө�
*/

var status = 0;

function start() {
    cm.sendSimple("Hey there, I'm #rCharles#k. What would you like to do today?\r\n#L0#�C�h�ө�#l\r\n#L1#�k�v�ө�#l\r\n#L2#�s��ө�#l\r\n#L3#�}��ө�#l\r\n#L4#���s�ө�#l\r\n#L5#��L#l\r\n");
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
            cm.sendSimple("#r#e��L�ө�#n#k\r\n#L0#�Z���ө�#l\r\n#L1#�����ө�#l\r\n#L2#�ë�ө�#l\r\n#L3#�s���c��#l\r\n#L4#�Ȥl�ө�#l\r\n#L5#�@�ΰө�#l\r\n");
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