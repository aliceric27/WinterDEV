/*
	Winter�V�u �j�ƪZ��
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
		    var String = "#b�j�Ƹ˳ƨt�Τw�g�}��, #r4#b ���ݩʥu��j�ƨ䤤 #r1#b ���ݩ�,#r �зV�����I��.";
		     	String +="\r\n\r\n#b�H����o�Y�ݩ� #r30 #b�� #r120#b, �ոչB��a!  #d�ݭn#i4030002##r  50 #d��#n\r\n#e#d#L0#�j�ƤO�q#l#L1#�j�Ʊӱ�#l#L2#�j�ƴ��z#l#L3#�j�Ʃ��B#l#n";
			String +="\r\n\r\n#b�H����o�Y���� #r40 #b�� #r160#b, �ոչB��a!  #d�ݭn#i4030002##r 100 #d��#n\r\n#e#d#L4#�j��#r���z#d����#l               #L5#�j��#r�]�k#d����#l#n";
		    cm.sendSimple(String);
		} else if (status == 1) {
		    if ((selection >= 0 && selection <= 3 && cm.haveItem(4030002, 50)) || (selection >= 4 && selection <= 5 && cm.haveItem(4030002, 100))) {
		    	if (selection == 0) {
			    String = "#b�п�A�Q�n�u�j��#r�O�q#b�v���˳�.\r\n";
		    	} else if (selection == 1) {
			    String = "#b�п�A�Q�n�u�j��#r�ӱ�#b�v���˳�.\r\n";
		    	} else if (selection == 2) {
			    String = "#b�п�A�Q�n�u�j��#r���z#b�v���˳�.\r\n";
		    	} else if (selection == 3) {
			    String = "#b�п�A�Q�n�u�j��#r���B#b�v���˳�.\r\n";
		    	} else if (selection == 4) {
			    String = "#b�п�A�Q�n�u�j��#r���z����#b�v���˳�.\r\n";
		    	} else if (selection == 5) {
			    String = "#b�п�A�Q�n�u�j��#r�]�k����#b�v���˳�.\r\n";
		    	}
		    	    amount_ = selection;
		    	    cm.sendSimple(String+cm.EquipList(cm.getPlayer().getClient()));
		    } else {
		    	if (selection >= 0 && selection <= 3){
			    cm.sendOk("�A��#i4030002#���� �ݭn #r50#k ��");
			    cm.dispose();
		    	} else if (selection >= 4 && selection <= 5){
			    cm.sendOk("�A��#i4030002#���� �ݭn #r100#k ��");
			    cm.dispose();
			}
		    }
		} else if (status == 2) {
		    var chance_vip1 = Math.floor(Math.random() * 15 + 15);//�j��
		    var chance_vip2 = Math.floor(Math.random() * 15 + 15);//�j��

		    var chance1 = Math.floor(Math.random() * 30 + 30);
		    var chance1_1 = Math.floor(Math.random() * 60 + 60);//�j��
		    var chance2 = Math.floor(Math.random() * 40 + 40);
		    var chance2_1 = Math.floor(Math.random() * 80 + 80);//�j��
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