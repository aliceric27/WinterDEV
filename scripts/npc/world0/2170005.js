/*
	Winter�V�u �U��Npc
*/

var status = -1;
var possibleJobs = new Array();
var maps = [
/*Boss�ǰe*/[100000005, 105070002, 800010100, 105090900, 682000001, 240020101, 240020401, 230040420, 801040003, 220080000, 211042300, 240040700, 800020130, 551030100, 270050000],
/*�m�\�ǰe*/[551030100, 682000403, 251010402, 220060301, 240040600, 250020000, 230040400, 910500000, 910300000, 680010000, 670000100, 980010020, 682000304],
/*�a�϶ǰe*/[100000203, 109020001, 130000100, 101030104, 120000000, 102000000, 101000000, 100000000, 103000000, 680000000, 200000000, 110000000, 221000000, 222000000, 230000000, 211000000, 220000000, 260000000, 250000000, 105040300, 600000000, 682000000, 800000000, 801000000, 240000000, 270000100, 970000000, 130000200]
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
	fsS = "#e#r[�Z�H]#b#n";
    if (cm.getPlayer().getFs() == 1)
	fsS = "#e#r[�t�H]#b#n";
    if (cm.getPlayer().getFs() == 2)
	fsS = "#e#r[���P]#b#n";
    if (cm.getPlayer().getFs() == 3)
	fsS = "#e#r[�Ҥ�]#b#n";
    if (cm.getPlayer().getFs() == 4)
	fsS = "#e#r[�׵���]#b#n";
	fsS += " #e#r["+JobName(cm.getJobId())+"]#b#n";
    var ret  = "#r-- �p�U��D���]�V�u�ʦ�Ver.83�^ >>�@#b���a�i#e#r#h ##b#n�j\r\n";
        ret += "�z�����A���G"+fsS+" #e"+cm.getPlayer().getRebirths()+"#n ��\r\n";
        ret += "#g===================#d#e���q����#n#g====================\r\n";
        ret += "#L1##b�ֳt��¾#l�@#L2##b�@�ɾɹC#l�@#L3##r�@��#b�v���v#l�@#L4##r#eNew#n#b�����#l\r\n";
        ret += "#L5##r#eAP#n#b���m#l�@   #L6##b�I�]���A#l�@#L7##r#eMusic#n#b�I�q#l    #L8##r#eShop#n#b�ө�#l\r\n\r\n";//�˳ƧI��
        ret += "#g===================#d#e�S����#n#g====================\r\n";
        ret += "#L51##b�ޯ��I��#l    #L52##b�j�Ƹ˳�#l    #L53##b�R���w���~#l #L54##b�˳ƧI��#l\r\n";
        ret += "#L55##b�����ޯ�#l\r\n\r\n"
        ret += "#g===================#d#e��L����#n#g====================\r\n";
        ret += "#L101##b���űƦ�#l   #L102##b��ͱƦ�#l   #L103##b���ɱƦ�#l      #L104##b�����Ʀ�#l"
/*
    if (cm.haveItem(5420008) == true && cm.getPlayer().getBossLog('���ŪA�Ȳ���',168,0) == 0 && cm.getPlayer().getItemNpc() == 0) {
	cm.getPlayer().setItemNpc(1);
	cm.getPlayer().SetItemNpc(1);
	cm.getPlayer().setBossLog('���ŪA�Ȳ���');
	cm.sendOk("�A�� #b���ŪA�Ȳ���#k �w�}�q. #b�z�i�H�ϥθU��Npc�F.");
	cm.dispose();
    } else if (cm.haveItem(5420008) == true && cm.getPlayer().getBossLog('���ŪA�Ȳ���',168,0) == 0 && cm.getPlayer().getItemNpc() == 1) {
	cm.getPlayer().setItemNpc(0);
	cm.getPlayer().SetItemNpc(0);
	cm.gainItem(5420008,-1);
	cm.sendOk("�A�� #b#i5420008#���ŪA�Ȳ���#k �w�L���F.");
	cm.dispose();
    } else if (cm.haveItem(5420008) == false && cm.getPlayer().getBossLog('���ŪA�Ȳ���',168,0) == 0 && cm.getPlayer().getItemNpc() == 0) {
	cm.sendOk("�A�èS�� #b���ŪA�Ȳ���#k �Ц��ʪ��ӳ��ʶR #b���� #r3000#b �I��");
	cm.dispose();
    } else if (cm.haveItem(5420008) == false && cm.getPlayer().getBossLog('���ŪA�Ȳ���',168,0) == 1 && cm.getPlayer().getItemNpc() == 1) {
	cm.gainItem(5420008,1);
	cm.sendOk("�A�� #b���ŪA�Ȳ���#k �w��, #b�t�ΥߧY�o�����A.");
	cm.dispose();
    } else if (cm.haveItem(5420008) == false && cm.getPlayer().getBossLog('���ŪA�Ȳ���',168,0) == 0 && cm.getPlayer().getItemNpc() == 1) {
	cm.getPlayer().setItemNpc(0);
	cm.getPlayer().SetItemNpc(0);
	cm.sendOk("�w�g�״_�t�Ω��w, ���s�I���U��Npc�Y�i");
	cm.dispose();
    } else if (cm.haveItem(5420008) == true && cm.getPlayer().getBossLog('���ŪA�Ȳ���',168,0) == 1 && cm.getPlayer().getItemNpc() == 1) {
	cm.sendSimple(ret);
    } else {
	cm.sendOk("#rbosslog#k�ƾڿ��~");
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
	if (selection == 3) {// �v���v
	    cm.openNpc(9900000);
	} else if (selection == 4) {// ���
	    cm.openNpc(2170002);
        	} else if (selection == 5) {// �ݩʭ��m
	    ResetStats();
        	} else if (selection == 6) {// �ˬd�˳�
	    Inventory_text1 = "#b���`", Inventory_text2 = "#b���`", Inventory_text3 = "#b���`", Inventory_text4 = "#b���`", Inventory_text5 = "#b���`";
	    if (cm.getInventory(1).isFull()) Inventory_text1 = "#r�z�� >>#k#n �ЪťX�@��" 
	    if (cm.getInventory(2).isFull()) Inventory_text2 = "#r�z�� >>#k#n �ЪťX�@��"
	    if (cm.getInventory(3).isFull()) Inventory_text3 = "#r�z�� >>#k#n �ЪťX�@��"
	    if (cm.getInventory(4).isFull()) Inventory_text4 = "#r�z�� >>#k#n �ЪťX�@��"
	    if (cm.getInventory(5).isFull()) Inventory_text5 = "#r�z�� >>#k#n �ЪťX�@��" 
	    var Inventory  = "\r\n#d#e�˳���G"+Inventory_text1+"#n";
	          Inventory += "\r\n#d#e������G"+Inventory_text2+"#n";
	          Inventory += "\r\n#d#e�˹���G"+Inventory_text3+"#n";
	          Inventory += "\r\n#d#e��L��G"+Inventory_text4+"#n";
	          Inventory += "\r\n#d#e�S����G"+Inventory_text5+"#n";
	          cm.sendOk("#e#b�A���I�]���A >>"+Inventory);
	          cm.dispose();
                } else if (selection == 7) {// �����I�q
                    cm.openNpc(2000);
                } else if (selection == 8) {// ¾�~�ө�
                    cm.openNpc(9220020);
                } else if (selection == 51) {// �ޯ����
                    TeachSkills_id();
                } else if (selection == 52) {// �j�ƪZ��
                    cm.openNpc(2001);
                } else if (selection == 53) {// �R�����w���~
                    cm.openNpc(2002);
                } else if (selection == 54) {// �˳ƧI��
                    cm.openNpc(2161010);
/*
        } else if (selection == 52) {// ��ܧޯ�
            cm.openNpc(2160001);
*/
	} else if (selection == 101) {// ���űƦ�
	    cm.showlvl();
	} else if (selection == 102) {// ��ͱƦ�
            cm.showreborns();
	} else if (selection == 103) {// ���ɱƦ�
	    cm.showrebornsfs();
	} else if (selection == 104) {// �����Ʀ�
            cm.showmeso();
	}
}

function warp(selection){
    if (status == 0)
        cm.sendSimple("#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#Boss �ǰe#l\r\n#L1#�m�\�a��#l\r\n#L2#�@�ɦa��#l");
    else if (status == 1) {
        chosenSection = selection;
        var selStr = "Select your destination.#b";
        for (var i = 0; i < maps[selection].length; i++)
            selStr += "\r\n#L" + i + "##m" + maps[selection][i] + "#";
        cm.sendSimple(selStr);
    } else if (status == 2) {
        chosenMap = selection;
        cm.sendYesNo("�A�Q�h #m" + maps[chosenSection][selection] + "#?");
    } else if (status == 3) {
        cm.warp(maps[chosenSection][chosenMap]);
        cm.dispose();
    }
}

function jobAdv(selection){
    if (status == 0) {
        newJob = cm.getJobId() + 1;
        if (cm.getJobId() % 10 == 2) {
            cm.sendOk("�A�w�g#r����#k�Ҧ���¾�u�@�F.");//�����
            cm.dispose();
        } else if (cm.getJobId() % 10 >= 0 && cm.getJobId() % 100 != 0) {
            var secondJob = cm.getJobId() % 10 == 0;
            if ((secondJob && cm.getLevel() < 70) || (!secondJob && cm.getLevel() < 120)) {
		if (secondJob && cm.getLevel() < 70)
                    cm.sendOk("�A�����ũ|���F��#r70��#k, �ЧA���ɵ��ŧa.");
		if (!secondJob && cm.getLevel() < 120)
                    cm.sendOk("�A�����ũ|���F��#r120��#k, �ЧA���ɵ��ŧa.");
                    cm.dispose();
            } else
                cm.sendYesNo("�z�����Ťw��F " + cm.getLevel() + ". �A�Q���� #b"+JobName(j)+"#k ?");
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
                cm.sendOk("�A�����ũ|���F��#r��¾�ݨD#k, �ЧA���ɵ��ŧa.");
                cm.dispose();
            } else {
                var text = "�A�����ܤU�C�ﶵ#b";
                for (var j = 0; j < possibleJobs.length; j++)
                    text += "\r\n#L"+j+"#"+JobName(j)+"#l";
                cm.sendSimple(text);
            }
        }
    } else if (status == 1 && cm.getJobId() % 100 != 0) { //�T�� - �|�઺�a��
        cm.changeJobById(cm.getJobId() + 1);
	TeachSkills();// �ޯ��I��
        cm.dispose();
    } else if (status == 1) {
        cm.changeJobById(possibleJobs[selection]);
	TeachSkills();// �ޯ��I��
        if (cm.getJobId() % 10 == 0)
        cm.dispose();
    } else if (status == 2) {
        job = selection;
        cm.sendYesNo("Are you sure you want to job advance?");
    } else if (status == 3) {
        cm.changeJobById(possibleJobs[job]);
	TeachSkills();// �ޯ��I��
        cm.dispose();
    }
}


/*¾�~����*/
function JobName(j) {
    var jobName = "Null";
    if (possibleJobs[j] == 100 || newJob == 100 || j == 100)
	jobName = "�C�h";
    if (possibleJobs[j] == 200 || newJob == 200 || j == 200)
	jobName = "�k�v";
    if (possibleJobs[j] == 300 || newJob == 300 || j == 300)
	jobName = "�}�b��";
    if (possibleJobs[j] == 400 || newJob == 400 || j == 400)
	jobName = "�s��";
    if (possibleJobs[j] == 500 || newJob == 500 || j == 500)
	jobName = "���s";
    if (possibleJobs[j] == 110 || newJob == 110 || j == 110)
	jobName = "�g�Ԥh";
    if (possibleJobs[j] == 120 || newJob == 120 || j == 120)
	jobName = "�����M�h";
    if (possibleJobs[j] == 130 || newJob == 130 || j == 130)
	jobName = "�j�M�L";
    if (possibleJobs[j] == 210 || newJob == 210 || j == 210)
	jobName = "���r";
    if (possibleJobs[j] == 220 || newJob == 220 || j == 220)
	jobName = "�B�p";
    if (possibleJobs[j] == 230 || newJob == 230 || j == 230)
	jobName = "���Q";
    if (possibleJobs[j] == 310 || newJob == 310 || j == 310)
	jobName = "�y�H";
    if (possibleJobs[j] == 320 || newJob == 320 || j == 320)
	jobName = "���}��";
    if (possibleJobs[j] == 410 || newJob == 410 || j == 410)
	jobName = "���";
    if (possibleJobs[j] == 420 || newJob == 420 || j == 420)
	jobName = "�L�s";
    if (possibleJobs[j] == 510 || newJob == 510 || j == 510)
	jobName = "����";
    if (possibleJobs[j] == 520 || newJob == 520 || j == 520)
	jobName = "�j��";
    if (possibleJobs[j] == 111 || newJob == 111 || j == 111)
	jobName = "�Q�r�x";
    if (possibleJobs[j] == 121 || newJob == 121 || j == 121)
	jobName = "�M�h";
    if (possibleJobs[j] == 131 || newJob == 131 || j == 131)
	jobName = "�s�M�h";
    if (possibleJobs[j] == 211 || newJob == 211 || j == 211)
	jobName = "���r�]�ɤh";
    if (possibleJobs[j] == 221 || newJob == 221 || j == 221)
	jobName = "�B�p�]�ɤh";
    if (possibleJobs[j] == 231 || newJob == 231 || j == 231)
	jobName = "���v";
    if (possibleJobs[j] == 311 || newJob == 311 || j == 311)
	jobName = "�C�L";
    if (possibleJobs[j] == 321 || newJob == 321 || j == 321)
	jobName = "������";
    if (possibleJobs[j] == 411 || newJob == 411 || j == 411)
	jobName = "�t����";
    if (possibleJobs[j] == 421 || newJob == 421 || j == 421)
	jobName = "����";
    if (possibleJobs[j] == 511 || newJob == 511 || j == 511)
	jobName = "�氫�a";
    if (possibleJobs[j] == 521 || newJob == 521 || j == 521)
	jobName = "���j��";
    if (possibleJobs[j] == 112 || newJob == 112 || j == 112)
	jobName = "�^��";
    if (possibleJobs[j] == 122 || newJob == 122 || j == 122)
	jobName = "�t�M�h";
    if (possibleJobs[j] == 132 || newJob == 132 || j == 132)
	jobName = "���M�h";
    if (possibleJobs[j] == 212 || newJob == 212 || j == 212)
	jobName = "���r�j�]�ɤh";
    if (possibleJobs[j] == 222 || newJob == 222 || j == 222)
	jobName = "�B�p�j�]�ɤh";
    if (possibleJobs[j] == 232 || newJob == 232 || j == 232)
	jobName = "�D��";
    if (possibleJobs[j] == 312 || newJob == 312 || j == 312)
	jobName = "�b��";
    if (possibleJobs[j] == 322 || newJob == 322 || j == 322)
	jobName = "���g��";
    if (possibleJobs[j] == 412 || newJob == 412 || j == 412)
	jobName = "�]�Ϫ�";
    if (possibleJobs[j] == 422 || newJob == 422 || j == 422)
	jobName = "��v����";
    if (possibleJobs[j] == 512 || newJob == 512 || j == 512)
	jobName = "���Q";
    if (possibleJobs[j] == 522 || newJob == 522 || j == 522)
	jobName = "�j��";
    if (possibleJobs[j] == 1100 || newJob == 1100 || j == 110)
	jobName = "�t���M�h1��";
    if (possibleJobs[j] == 1200 || newJob == 1200 || j == 1200)
	jobName = "�P�K�Ův1��";
    if (possibleJobs[j] == 1300 || newJob == 1300 || j == 1300)
	jobName = "�}���Ϫ�1��";
    if (possibleJobs[j] == 1400 || newJob == 1400 || j == 1400)
	jobName = "�t�]���1��";
    if (possibleJobs[j] == 1500 || newJob == 1500 || j == 1500)
	jobName = "�{�p���N1��";
    if (possibleJobs[j] == 1110 || newJob == 1110 || j == 1110)
	jobName = "�t���M�h2��";
    if (possibleJobs[j] == 1210 || newJob == 1210 || j == 1210)
	jobName = "�P�K�Ův2��";
    if (possibleJobs[j] == 1310 || newJob == 1310 || j == 1310)
	jobName = "�}���Ϫ�2��";
    if (possibleJobs[j] == 1410 || newJob == 1410 || j == 1410)
	jobName = "�t�]���2��";
    if (possibleJobs[j] == 1510 || newJob == 1510 || j == 1510)
	jobName = "�{�p���N2��";
    if (possibleJobs[j] == 1111 || newJob == 1111 || j == 1111)
	jobName = "�t���M�h3��";
    if (possibleJobs[j] == 1211 || newJob == 1211 || j == 1211)
	jobName = "�P�K�Ův3��";
    if (possibleJobs[j] == 1311 || newJob == 1311 || j == 1311)
	jobName = "�}���Ϫ�3��";
    if (possibleJobs[j] == 1411 || newJob == 1411 || j == 1411)
	jobName = "�t�]���3��";
    if (possibleJobs[j] == 1511 || newJob == 1511 || j == 1511)
	jobName = "�{�p���N3��";
    if (possibleJobs[j] == 2100 || newJob == 2100 || j == 2100)
	jobName = "�g�T�i�h1��";
    if (possibleJobs[j] == 2110 || newJob == 2110 || j == 2110)
	jobName = "�g�T�i�h2��";
    if (possibleJobs[j] == 2111 || newJob == 2111 || j == 2111)
	jobName = "�g�T�i�h3��";
    if (possibleJobs[j] == 2112 || newJob == 2112 || j == 2112)
	jobName = "�g�T�i�h4��";
    return jobName;
}

/*�ݩʭ��m���*/
function ResetStats() {
    p = cm.c.getPlayer();
    newAp = p.getRemainingAp();  //�`��O�I	
    newStr =  p.getStr();
    newDex =  p.getDex();	
    newInt =  p.getInt();
    newLuk =  p.getLuk();
    var ApText  = "#e#b�z�ϥ��ݩʭ��m�t��, #k�Цh�h�եΫ��O, �z�{�b���ݩ��I���p�p�U�G\r\n";
	ApText += "  #b�쥻�G#k\r\n";
	ApText += "    �O�q: #r" + newStr + " #k�I    �ӱ�: #r" + newDex + " #k�I    ���O: #r" + newInt + " #k�I    �B��: #r" + newLuk + " #k�I\r\n";
	ApText += "    �����t��AP: #r" + newAp + " #k�I\r\n\r\n";
	cm.getPlayer().resetStats();
	newAp = p.getRemainingAp();  //�`��O�I
	ApText += "  #r���m��G#k\r\n";
	ApText += "    �O�q: #r4 #k�I    �ӱ�: #r4 #k�I    ���O: #r4 #k�I    �B��: #r4 #k�I\r\n";
	ApText += "    �����t��AP: #r" + newAp + " #k�I";
	cm.sendOk(ApText);
	cm.dispose();
}

/*�ޯ��I��*/
function TeachSkills() {
    skills = cm.getSkillsByJob(cm.getJobId());
    var message = "";
    for(var i = 0; i < skills.length; i++) {
	cm.teachSkills(new Array(skills[i]), -1, -1);
	//cm.teachSkills(�ޯ�ID, �ޯ൥��, �ޯ�̤j����); -1 ���̤j����
    }
    cm.getPlayer().saveToDB();
    cm.getPlayer().dropMessage(5, "[�t�Τ��i] �A���ޯ�A��¾��, ���z�I���F.");
    cm.dispose();
}

/*�ޯ��I��*/
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
    cm.sendOk("�ޯ�w�I��");
    cm.dispose();
}
