/*
	Winter�V�u ��ɭ���
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
var fsText = ["#e#r�Z�H#b#n","#e#r�t�H#b#n","#e#r���P#b#n","#e#r�Ҥ�#b#n","#e#r�׵���#b#n"];
    for(var i = 0; i < 3; i++) {
	if (Rlv1+i <= 50)
	RetText += "["+(Rlv+i)+" = "+(Rlv1+i)+"��] "
    }
    var ret  = "#b����ɥ\��]�m��#e(#k�_�I�a#b��#k�_�I�a#b)#n #k�ޯण�|���m#b.";
        ret += "\r\n#b�@�@�@�@�@�@�@�@#e(#k�_�I�a#b��#r�Q�ڮa#b)#n #r�Ҧ��ޯ�N���m#b.";
        ret += "\r\n#e�}��#r�g���i�h#b�i�H�ϥ�#d�y�����ޯ�z#b�o���\��.#n";
        ret += "\r\n\r\n1.��ɵ��ŻݨD�G"+RetText+"#r#b";
        ret += "\r\n2.��ɻݭn���~�G#t4031456# #r75#b ���@�@�@�@�@�ϥܡG#i4031456#";
    if (!Trebirths[cm.getPlayer().getFs()])
        ret += "#b\r\n\r\n\#L1#�i��#r���#b [���ŻݨD�G#r"+Rlv+"#b]#l";
    if (Trebirths[cm.getPlayer().getFs()])
	ret += "#b\r\n\r\n#L2#�i��#r����#b [�N���ɬ� "+fsText[cm.getPlayer().getFs()+1]+" ]#l";
        ret += "#b\r\n\r\n#L3#�d��#r����#b����H�Φn�B [���A�S��-�Բӻ���]#l";

		if (status == 0) {
		    cm.sendSimple(ret);
		} else if (status == 1) {
		    if (selection == 1) {
			if (cm.getLevel() >= Rlv) {
			    cm.sendNext("���j��#b[#h #] #k,�z�ثe���: #r"+cm.getPlayer().getRebirths()+"#k�� .\r\n�A�w�g�q�L�@�Ӻ����ӥR���D�Ԫ��D��,�ש󦨬��F���_���骺�H��.���ӱz�ثe����͵���,�p�G�z�൹��#b75��#k#i4031456#,�ڥi�H�Χڪ����[�j�����ߪk,�U�A�i���L��@!�z�N����1�Ū� #b�s��#k, #r�ޯ�O�d#k�C\r\n#k#e�A�O�_�Q#r���#k�O?.�{�b����٦��i��o�쯫��§�~.\r\n#b[�p�G�A�w�g#r����#b�A�N�o���h���ݩ��I,�Ьd���ɻ���]");
			} else {
			    cm.sendOk("�藍�_�A�z�����F��"+Rlv+"��, �~�����.");
			    cm.dispose();
			}
		    } else if (selection == 2) {
			if (cm.getPlayer().getRebirths() == 10 && cm.getPlayer().getFs() == 0) {
			    cm.getPlayer().setFs(1);
			    cm.getPlayer().dropMessage(6,"[���������i]���a: �i" + cm.getPlayer() + "�j ���ɦ��\�A�����ɬ�[�t�H]�A�W�V�F�Z�H!");
			    cm.sendOk("[����]�z���\���ѤZ�H�ܦ��F#r[�t�H]#k\r\n�`�N�G�A�{�b������@���͡A�~���_���`���ݩ��I�I\r\n�q�{�b�}�l�A��ͱN�o���h���I�A�g��]��Z�H�n���A�֥h����@�U�a�I");
			} else if (cm.getPlayer().getRebirths() == 20 && cm.getPlayer().getFs() == 1) {
			    cm.getPlayer().setFs(2);
			    cm.getPlayer().dropMessage(6,"[���������i]���a: �i" + cm.getPlayer() + "�j ���ɦ��\�A�����ɬ�[���P]�A�W�V�F�t�H!");
			    cm.sendOk("[����]�z���\���Ѹt�H�ܦ��F#r[���P]#k\r\n�`�N�G�A�{�b������@���͡A�~���_���`���ݩ��I�I\r\n�q�{�b�}�l�A��ͱN�o���h���I�A�g��]��t�H�n���A�֥h����@�U�a�I");
			} else if (cm.getPlayer().getRebirths() == 30 && cm.getPlayer().getFs() == 2) {
			    cm.getPlayer().setFs(3);
			    cm.getPlayer().dropMessage(6,"[���������i]���a: �i" + cm.getPlayer() + "�j ���ɦ��\�A�����ɬ�[�Ҥ�]�A�W�V�F���P!");
			    cm.sendOk("[����]�z���\���Ѹt�H�ܦ��F#r[�Ҥ�]#k\r\n�`�N�G�A�{�b������@���͡A�~���_���`���ݩ��I�I\r\n�q�{�b�}�l�A��ͱN�o���h���I�A�g��]�񯫥P�n���A�֥h����@�U�a�I");
			} else if (cm.getPlayer().getRebirths() == 45 && cm.getPlayer().getFs() == 3) {
			    cm.getPlayer().setFs(4);
			    cm.getPlayer().dropMessage(6,"[���������i]���a: �i" + cm.getPlayer() + "�j ���ɦ��\�A�����ɬ�[�׵���]�A�W�V�F�Ҥ�!");
			    cm.sendOk("[����]�z���\���ѫҤ��ܦ��F#r[�׵���]#k\r\n�`�N�G�A�{�b������@���͡A�~���_���`���ݩ��I�I\r\n�q�{�b�}�l�A��ͱN�o���h���I�A�g��]��Ҥ��n���A�֥h����@�U�a�I");
			}
			cm.dispose();
		    } else if (selection == 3) {
			var retfs  = "#r�ݡG���ɬO����N��A����n�}�q���ɡH#k\r\n";
			    retfs += "���G���ɥثe�j�P�����G�t�H - ���P - �Ҥ� - �׵���\r\n";
			    retfs += "#d���O���o�T�ت��˳Ƭ�[�t]�A[�P]�A[��],�ѩǼɥX���P�ݩʡA�H�������ɸ˳ơA���ɪ��˳ƦU���ݩʳ��񴶳q���n�A�A�i��b���Ǫ��L�{���w�g�ɥX�A���O�����A�����|���ܱz�S�����ɡA��������A�ݩʤj�P���G\r\n";
			    retfs += "     #b[�t]  �񴶳q���n��10-15�H������\r\n";
			    retfs += "     [�P]  �񴶳q���n��20-30�H������\r\n";
			    retfs += "     [��]  �񴶳q���n��30-45�H������\r\n";
			    retfs += "     [��]  �񴶳q���n��45-60�H������\r\n\r\n";
			    retfs += "���ɫe�G[�g�筿�ƨS��]\r\n";
			    retfs += "�@�@#r��G[�t]1.3��[�P]1.6��[��]2��[�׵�]3��\r\n";
			    retfs += "#b���ɫe�G[��᪺ͫ�ݩ��I��:��ͦ���*50�I]\r\n";
			    retfs += "#r�@�@��G\r\n";
			    retfs += "[�t]  [��᪺ͫ�ݩ��I��:100+��ͦ���* 70�I]\r\n";
			    retfs += "[�P]  [��᪺ͫ�ݩ��I��:200+��ͦ���* 90�I]\r\n";
			    retfs += "[��]  [��᪺ͫ�ݩ��I��:300+��ͦ���*120�I]\r\n";
			    retfs += "[��]  [��᪺ͫ�ݩ��I��:400+��ͦ���*200�I]";
			cm.sendNext(retfs);
			cm.dispose();
		    }
		} else if (status == 2) {
		    if (cm.getPlayer().getRebirths() >= 50) {
			cm.sendOk("#b�A�ثe�w�g����F");    
			cm.dispose();
			return;
		    }
		    if (cm.haveItem(4031456,75)) {
			var Text1 = "��#d#e�ޯ�O�d#n#b", Text2 = "��#d#e�ޯ�O�d#n#b", Text3 = "��#d#e�ޯ�O�d#n#b";
			if(!job_1) Text1 = "��#r#e�ޯ୫�m#n#b";
			if(!job_2) Text2 = "��#r#e�ޯ୫�m#n#b";
			if(!job_3) Text3 = "��#r#e�ޯ୫�m#n#b";
			    cm.sendSimple("�п�ܧA�n�઺¾�~#b\r\n#L1#�s��#l "+Text1+"\r\n\r\n#L2#�Q��#l "+Text2+"\r\n\r\n#L3#�ǻ�#l "+Text3);
		    } else {
			cm.sendOk("#b�藍�_�A�A�S���������D��A�A�ݭn75��#i4031456#�ӧ������");    
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
				cm.sendOk("#b�z���o�D�`�n#k, ���A���\#e��L��@#n�����a�I��\r\n#r[�ѩ�A�O�t�H�A�ݩ��I��Z�H�h100�I�A�b�����߱z]"); 
				cm.getPlayer().dropMessage(6,"[��ͨt��]: ���ߡi�t�H�G" + cm.getPlayer() + "�j ��ͦ��\ �ثe��ɼƬ��G "+cm.getPlayer().getRebirths()+" ��I");
			} else if(cm.getPlayer().getFs()==2) {
				cm.sendOk("#b�z���o�D�`�n#k, ���A���\#e��L��@#n�����a�I��\r\n#r[�ѩ�A�O���P�A�ݩ��I��Z�H�h200�I�A�b�����߱z]"); 
				cm.getPlayer().dropMessage(6,"[��ͨt��]: ���ߡi���P�G" + cm.getPlayer() + "�j ��ͦ��\ �ثe��ɼƬ��G "+cm.getPlayer().getRebirths()+" ��I");
			} else if(cm.getPlayer().getFs()==3) {
				cm.sendOk("#b�z���o�D�`�n#k, ���A���\#e��L��@#n�����a�I��\r\n#r[�ѩ�A�O�Ҥ��A�ݩ��I��Z�H�h300�I�A�b�����߱z]"); 
				cm.getPlayer().dropMessage(6,"[��ͨt��]: ���ߡi�Ҥ��G" + cm.getPlayer() + "�j ��ͦ��\ �ثe��ɼƬ��G "+cm.getPlayer().getRebirths()+" ��I");
			} else if(cm.getPlayer().getFs()==4) {
				cm.sendOk("#b�z���o�D�`�n#k, ���A���\#e��L��@#n�����a�I��\r\n#r[�ѩ�A�O�׵��̡A�ݩ��I��Z�H�h400�I�A�b�����߱z]"); 
				cm.getPlayer().dropMessage(6,"[��ͨt��]: ���ߡi�׵��̡G" + cm.getPlayer() + "�j ��ͦ��\ �ثe��ɼƬ��G "+cm.getPlayer().getRebirths()+" ��I");
			} else {
				cm.sendOk("#b�z���o�D�`�n#k, ���A���\#e��L��@#n�����a�I��"); 
				cm.getPlayer().dropMessage(6,"[��ͨt��]: ���ߡi�Z�H�G" + cm.getPlayer() + "�j ��ͦ��\ �ثe��ɼƬ��G "+cm.getPlayer().getRebirths()+" ��I");
			}
			cm.dispose();

	}            
    }
}
 
    
