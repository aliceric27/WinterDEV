/*
	Winter�V�u �˳ƧI��
	�V�u�ʦ��A�s�@�C
	�s�@��:baby_0402_85@yahoo.com.tw 
*/

var th = 0;
var Mesos1 = "#fUI/UIWindow.img/QuestIcon/7/0#";
var P = 10000;/*�ܼ�*/
var New = true;

var ids0_0 = [
/*���t*/1302147, 1312062, 1322090, 1402090, 1412062, 1422063, 1432081, 1442111, 1372078, 1382099, 1452106, 1462091, 1332120, 1472117, 1482079, 1492079,
           ];
var ids0_1 = [
/*��{*/1302153, 1312066, 1322097, 1332131, 1372085, 1382105, 1402096, 1412066, 1422067, 1432087, 1442117, 1452112, 1462100, 1472123, 1482085, 1492086,
           ];
var ids0_2 = [
/*�k��*/1302152, 1312065, 1322096, 1402095, 1412065, 1422066, 1432086, 1442116, 1372084, 1382104, 1452111, 1462099, 1332130, 1472122, 1482084, 1492085,
           ];
var ids1 = [
/*�Ԥh*/1002776, 1052155, 1082234, 1072355,
/*�k�v*/1002777, 1052156, 1082235, 1072356,
/*�}��*/1002778, 1052157, 1082236, 1072357,
/*�s��*/1002779, 1052158, 1082237, 1072358,
/*���s*/1002780, 1052159, 1082238, 1072359,
           ];
var ids2 = [
/*�Ԥh*/1003177, 1052319, 1082300, 1072490,
/*�k�v*/1003178, 1052320, 1082301, 1072491,
/*�}��*/1003179, 1052321, 1082302, 1072492,
/*�s��*/1003180, 1052322, 1082303, 1072493,
/*���s*/1003181, 1052323, 1082304, 1072494,
           ];

/*�Фžզ۳]�w*/
var Meso = [
/*�����Y��*/10, 20, 30, 50, 70,
/*��������*/20, 40, 70,
/*�����ܭ�*/20, 40, 60, 70, 90,
/*�����޵P*/10, 20, 20, 20, 100, 100, 100,
/*�����Z��*/100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
/*�ë�Z��*/300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300,
/*�Z����J*/0,
/*�����M��*/0, 0, 1000, 1000, 1000, 1000, 1000,
/*��{�ܭ�*/300, 300, 300, 300, 300,
/*�k�өܭ�*/500, 500, 500, 500, 500
];

var Item = [
//100, 200, 300, 500, 700,
/*�����Y��*/50, 100, 120, 150, 200,
/*��������*/50, 75, 100,
/*�����ܭ�*/70, 100, 130, 160, 200,
/*�����޵P*/150, 500, 500, 500, 500, 500, 500,
/*�����Z��*/0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
/*�ë�Z��*/0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
/*�Z����J*/1,
/*�����M��*/1, 1, 1, 1, 1, 1, 1,
/*��{�ܭ�*/500, 500, 500, 500, 500,
/*�k�өܭ�*/1000, 1000, 1000, 1000, 1000
];

/*�Фžզ۳]�w*/

function ItemID() {

    
}

function start() {
    th = -1;
    action(1, 0, 0);
}

function action(m, type, s) {
    if (m == -1) {
	cm.sendOk("�U���b�Ӽ�~~");
        cm.dispose();
    } else {
        if (m == 0 && th == 0) {
            cm.dispose();
            return;
        }
        if (m == 1)
            th++;
        else
            th--;
    if (th == 0) {
	if (New) {
	cm.sendOk("�Ĥ@��");
}else{
	cm.sendOk("�ĤG��");
}
    } else if (th == 1) {
	var New = false;
cm.openNpc(2161010);

    } else if (th == 2) {
	for (var i = 0; i < 99; i++) {
	    if (s == i) {
		if(cm.getMeso() >= Meso[i] * P) {
		    X = i
		    Z();
		} else { 
		    cm.sendOk("#e�s �@ �O �� �� �n #r"+Meso[i]+" �U ��#k �z �� �� �B #r�� ��");
		    cm.dispose();
		}
	    }
	}

    } else if (th == 3) {
		C();

    } else if (th == 4) {
		V();


    }

    }
}

function T() {
    var ret  = "#b#e   �i#h #�j���r~#n                #g�ЬݬݤU�C���\r\n\#r";
	ret += "     ��   ��   �Z   /   ��   ��   ��" + "          �U�� #e�i�� �M�j#n �s �@ �� ��";
	ret += "\r\n\#L0##d#e�Y��#i1002758#" + "#L1#����#i1032040#" + "#l    #L7#�ë�#i1002776##i1052155##i1082234##i1072355#";
	ret += "\r\n\#L2##d#e�ܭ�#i1102166#" + "#L3#�޵P#i1092030#" + "#l   #L8#��{#i1003177##i1052319##i1082300##i1072490#";
	ret += "\r\n\#L4##d#e�Z��#i1302142#" + "#L5#�ë�#i1302081#" + "#l #L9#�k��#i1003172##i1052314##i1082295##i1072485#";
	ret += "\r\n\#L6##d#e#i1482079##i1482084##i1482085##n#r#l�����#d#e" + "   #L10#��{#i1102280##l  #L11#�k��#i1102275#";
    return ret;
}

function A() {
    if (B == 0) {
	var ret  = "#fUI/UIWindow.img/QuestIcon/3/0#             #e#b�z�ثe�� #i4001126# ��#k�i#c4001126#�j#b��#n#d";
	    ret += "\r\n\#L0#L v  0 #i1002508##e#r�i�O��"+Meso[0]+"�U�j#n#d" + "#L1#L v  8 #i1002509##e#r�i�O��"+Meso[1]+"�U�j#n#d";
	    ret += "\r\n\#L2#L v 30#i1002510##e#r�i�O��"+Meso[2]+"�U�j#n#d" + "#L3#L v 70#i1002511##e#r�i�O��"+Meso[3]+"�U�j#n#d";
	    ret += "\r\n\#L4#L v 90#i1002758##e#r�i�O��"+Meso[4]+"�U�j#n#d";
	    ret += "\r\n\#l                                                    #k���G#d�I�������~�|��ܡi���ơj";
	return ret;
    } else if (B == 1) {
	var ret  = "#fUI/UIWindow.img/QuestIcon/3/0#             #e#b�z�ثe�� #i4001126# ��#k�i#c4001126#�j#b��#n#d";
	    ret += "\r\n\#L5#L v 20#i1032040##e#r�i�O��"+Meso[5]+"�U�j#n#d" + "#L6#L v 40#i1032041##e#r�i�O��"+Meso[6]+"�U�j#n#d";
	    ret += "\r\n\#L7#L v 70#i1032042##e#r�i�O��"+Meso[7]+"�U�j#n#d";
	    ret += "\r\n\r\n\#l                           #k���G#d�I�������~�|��ܡi���ơj";
	return ret;
    } else if (B == 2) {
	var ret  = "#fUI/UIWindow.img/QuestIcon/3/0#             #e#b�z�ثe�� #i4001126# ��#k�i#c4001126#�j#b��#n#d";
	    ret += "\r\n\#L8#L v 20#i1102166##e#r�i�O��"+Meso[8]+"�U�j#n#d" + "#L9#L v 40#i1102167##e#r�i�O��"+Meso[9]+"�U�j#n#d";
	    ret += "\r\n\#L10#L v 70#i1102168##e#r�i�O��"+Meso[10]+"�U�j#n#d" + "#L11#L v 70#i1102071##e#r�i�O��"+Meso[11]+"�U�j#n#d";
	    ret += "\r\n\#L12#L v 30#i1102198##e#r�i�O��"+Meso[12]+"�U�j#n#d";
	    ret += "\r\n\r\n\#l                                                    #k���G#d�I�������~�|��ܡi���ơj";
	return ret;
    } else if (B == 3) {
	var ret  = "#b#fUI/UIWindow.img/QuestIcon/3/0#             #e#b�z�ثe�� #i4001126# ��#k�i#c4001126#�j#b��#n#d";
	    ret += "\r\n\#L13#L v 20#i1092030##e#r�i�O��"+Meso[13]+"�U�j#n#d" + "#L14#L v 64#i1092045##e#r�i�O��"+Meso[14]+"�U�j#n#d";
	    ret += "\r\n\#L15#L v 64 #i1092046##e#r �i�O��"+Meso[15]+"�U�j#n#d" + "#L16#L v 64#i1092047##e#r �i�O��"+Meso[16]+"�U�j#n#d";
	    ret += "\r\n\#L17#L v 120#i1092057##l      #L18#L v 120 #i1092058##l      #L19#L v 120 #i1092059##e#r#l";
	    ret += "\r\n\r\n\  �i�O��"+Meso[17]+"�U�j        �i�O��"+Meso[18]+"�U�j       �i�O��"+Meso[19]+"�U�j";
	    ret += "\r\n\r\n\#l                           #k���G#d�I�������~�|��ܡi���ơj";
	return ret;
    } else if (B == 4) {
	var ret  = "#b#fUI/UIWindow.img/QuestIcon/3/0#             #e#b������M �ϥܡG#i1082252# ��#k�i#c1082252#�j#b��#n#d";
	    ret += "\r\n\r\n\           L v 77 #k���������Z��#e#r�i�ݭn #d#t1082252##r �ҩ��j#n#d";
	    ret += "\r\n\#L20##i1302142##L21##i1312056##L22##i1322084##L23##i1402085##L24##i1412055##l  #L25##i1422057#";
	    ret += "\r\n\#L26##i1432075##L27##i1442104##L28##i1372071##L29##i1382093##L30##i1452100##L31##i1462085#";
	    ret += "\r\n\#L32##i1332114##l #L33##i1472111##L34##i1482073##l   #L35##i1492073##l  #k���G#d�O�Ρi#r"+Meso[35]+"�U#d�j";
	return ret;
    } else if (B == 5) {
	var ret  = "#b#fUI/UIWindow.img/QuestIcon/3/0#      #eL v 120#r�ë�#b�I����#d�i�O��"+Meso[51]+"�U�j#n#d";
	    ret += "\r\n\#L36##i1302081##L37##i1312037##l  #L38##i1322060##L39##i1402046##L40##i1412033##L41##i1422037#";
	    ret += "\r\n\#L42##i1432047##L43##i1442063##L44##i1372044##L45##i1382057##l #L46##i1452057##L47##i1462050#";
	    ret += "\r\n\#L48##i1332074##l  #L49##i1472068##l    #L50##i1482023##l  #L51##i1492023#";
	return ret;
    } else if (B == 6) {
	var ret  = "#b#fUI/UIWindow.img/QuestIcon/3/0#  #e#b���_�c �ϥܡG#L52##i4280000##n#d#l#e#r�Х��ݥH�U�����~#k";
	    ret += "\r\n\#i1302147##i1312062##i1322090##i1402090##i1412062##i1422063##i1432081##i1442111##i1372078#";
	    ret += "\r\n\#i1382099##i1452106##i1462091##i1332120##i1472117##i1482079##i1492079#";
	    ret += "\r\n\#l#g�w�w�w�w#bL v127 ���t#g�w�w�w�w#d�����v��o#r 5-10#d���ݩ�#g�w�w�w�w�w";
	    ret += "\r\n\#i1302153##i1312066##i1322097##i1332131##i1372085##i1382105##i1402096##i1412066##i1422067#";
	    ret += "\r\n\#i1432087##i1442117##i1452112##i1462100##i1472123##i1482085##i1492086#";
	    ret += "\r\n\#l#g�w�w�w�w#bL v130 ��{#g�w�w�w�w#d�����v��o#r 7-15#d���ݩ�#g�w�w�w�w�w";
	    ret += "\r\n\#i1302152##i1312065##i1322096##i1402095##i1412065##i1422066##i1432086##i1442116#";
	    ret += "\r\n\#i1372084##i1382104##i1452111##i1462099##i1332130##i1472122##i1482084##i1492085#";
	    ret += "\r\n\#l#g�w�w�w�w#bL v140 �k��#g�w�w�w�w#d�����v��o#r10-20#d���ݩ�#g�w�w�w�w�w";
	return ret;
    } else if (B == 7) {
	var ret  = "#b#fUI/UIWindow.img/QuestIcon/3/0# #e#b���_�c �ϥܡG#L53##i4280000##n#d#l#e#r�Х��ݥH�U�����~#k";
	    ret += "\r\n\#e�C�h�M�ˡG #i1002776# #i1052155##i1082234##i1072355#�@#rL v 120#k";
	    ret += "\r\n\�k�v�M�ˡG#i1002777##i1052156##i1082235##i1072356#�@#rL v 120#k";
	    ret += "\r\n\�}��M�ˡG#i1002778# #i1052157##i1082236##i1072357#�@#rL v 120#k";
	    ret += "\r\n\�s��M�ˡG #i1002779#  #i1052158##i1082237# #i1072358#�@#rL v 120#k";
	    ret += "\r\n\���s�M�ˡG#i1002780# #i1052159##i1082238# #i1072359#�@#rL v 120";
	    ret += "\r\n\#k���G#d�H�����o#r���O#d�m���o�n�@�M�A#r�O�@��";
	return ret;
    } else if (B == 8) {
	var ret  = "#b#fUI/UIWindow.img/QuestIcon/3/0# #e#b���_�c �ϥܡG#L54##i4280000##n#d#l#e#r�Х��ݥH�U�����~#k";
	    ret += "\r\n\#e�C�h�M�ˡG#i1003177##i1052319##i1082300##i1072490#�@#rL v 130#k";
	    ret += "\r\n\�k�v�M�ˡG#i1003178##i1052320##i1082301##i1072491#�@#rL v 130#k";
	    ret += "\r\n\�}��M�ˡG#i1003179##i1052321##i1082302##i1072492#�@#rL v 130#k";
	    ret += "\r\n\�s��M�ˡG#i1003180##i1052322##i1082303##i1072493#�@#rL v 130#k";
	    ret += "\r\n\���s�M�ˡG#i1003181##i1052323##i1082304##i1072494#�@#rL v 130";
	    ret += "\r\n\#k���G#d�H�����o#r���O#d�m���o�n�@�M�A#r�O�@�� ";
	return ret;
    } else if (B == 9) {
	var ret  = "#b#fUI/UIWindow.img/QuestIcon/3/0##k #e#b�M�˱Ĩ��X����#k   �����v��o#r30-60#k���ݩ�";
	    ret += "\r\n\#e�C�h�M�ˡG#i1003172##i1052314# #i1082295##i1072485#�@#rL v 140#k";
	    ret += "\r\n\�k�v�M�ˡG#i1003173##i1052315##i1082296##i1072486#�@#rL v 140#k";
	    ret += "\r\n\�}��M�ˡG#i1003174# #i1052316# #i1082297# #i1072487#�@#rL v 140#k";
	    ret += "\r\n\�s��M�ˡG#i1003175#  #i1052317# #i1082298# #i1072488#�@#rL v 140#k";
	    ret += "\r\n\���s�M�ˡG#i1003176# #i1052318# #i1082299#  #i1072489#�@#rL v 140#k";
	    ret += "\r\n\#d#L55#[�C�h]#L56#[�k�v]#L57#[�}��]#L58#[�s��]#L59#[���s]";
	return ret;
    } else if (B == 10) {
	var ret  = "#fUI/UIWindow.img/QuestIcon/3/0#             #e#b�z�ثe�� #i1102198# ��#k�i#c1102198#�j#b��#n#d";
	    ret += "\r\n\#L60##i1102280##e#d�i�C�h�j#n#d" + "#L61##i1102281##e#d�i�k�v�j#n#d" + "#L62##i1102282##e#d�i�}��j#n#d";
	    ret += "\r\n\#L63##i1102283##e#d�i�s��j#n#d" + "#L64##i1102284##e#d�i���s�j#n#d";
	    ret += "#l\r\n\\r\n\     #d#e�i�O��#r"+Meso[60]+"#d�U�j#n              #k���G#d�I�������~�|��ܡi���ơj";
	return ret;
    } else if (B == 11) {
	var ret  = "#fUI/UIWindow.img/QuestIcon/3/0#             #e#b�z�ثe�� #i1102198# ��#k�i#c1102198#�j#b��#n#d";
	    ret += "\r\n\#L65##i1102275##e#d�i�C�h�j#n#d" + "#L66##i1102276##e#d�i�k�v�j#n#d" + "#L67##i1102277##e#d�i�}��j#n#d";
	    ret += "\r\n\#L68##i1102278##e#d�i�s��j#n#d" + "#L69##i1102279##e#d�i���s�j#n#d";
	    ret += "#l\r\n\\r\n\     #d#e�i�O��#r"+Meso[65]+"#d�U�j#n              #k���G#d�I�������~�|��ܡi���ơj";
	return ret;



    }

}

function Z() {
    if (X == 0) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 0 #i1002508##k�i�����Y���j #b�H�U������~#r\r\n\\r\n\ #i4001126# "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 1) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 8 #i1002509##k�i�����Y���j #b�H�U������~\r\n\#e#kL v 0#r#n\r\n\#i1002508#  �����Y��\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 2) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 30 #i1002510##k�i�����Y���j #b�H�U������~\r\n\#e#kL v 8#r#n\r\n\#i1002509#  �����Y��\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 3) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 70 #i1002511##k�i�����Y���j #b�H�U������~\r\n\#e#kL v 30#r#n\r\n\#i1002510#  �����Y��\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 4) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 90 #i1002758##k�i�����Y���j #b�H�U������~\r\n\#e#kL v 70#r#n\r\n\#i1002511#  �����Y��\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 5) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 20 #i1032040##k�i���������j #b�H�U������~\r\n\\r\n\#r#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 6) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 40 #i1032041##k�i���������j #b�H�U������~\r\n\#e#kL v 20#r#n\r\n\#i1032040#   ��������\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 7) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 70 #i1032042##k�i���������j #b�H�U������~\r\n\#e#kL v 40#r#n\r\n\#i1032041#   ��������\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 8) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 20 #i1102166##k�i�����ܭ��j #b�H�U������~#r\r\n\\r\n\ #i4001126# "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 9) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 40 #i1102167##k�i�����ܭ��j #b�H�U������~\r\n\#e#kL v 20#r#n\r\n\#i1102166#  �����ܭ�\r\n\#i4001126#  "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 10) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 70 #i1102168##k�i�����ܭ��j #b�H�U������~\r\n\#e#kL v 40#r#n\r\n\#i1102167#  �����ܭ�\r\n\#i4001126#  "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 11) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 70 #i1102071##k�i#t1102071#�j #b�H�U������~\r\n\#e#kL v 70#r#n\r\n\#i1102168#  �����ܭ�\r\n\#i4001126#  "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 12) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 30 #i1102198##k�i���������ܭ��j #b�H�U������~\r\n\#e#kL v 70#r#n\r\n\#i1102071#  #t1102071#\r\n\#i4001126#  "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 13) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 20 #i1092030##k�i�������ޡj #b�H�U������~#r\r\n\\r\n\#i4001126#  "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 14) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 64 #i1092045##k�i�����k�ޡj #b�H�U������~\r\n\#e#kL v 20#r#n\r\n\#i1092030#  ��������\r\n\#i4001126#  "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 15) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 64 #i1092046##k�i�����Ԭޡj #b�H�U������~\r\n\#e#kL v 20#r#n\r\n\#i1092030#  ��������\r\n\#i4001126#  "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 16) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 64 #i1092047##k�i�����@�áj #b�H�U������~\r\n\#e#kL v 20#r#n\r\n\#i1092030#  ��������\r\n\#i4001126#  "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 17) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 120 #i1092057##k�i�ë��]���ޡj #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1092045#  �����k��\r\n\#i4001126#  "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 18) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 120 #i1092058##k�i�ë�H�B�ޡj #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1092046#  �����Ԭ�\r\n\#i4001126#  "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 19) {
	cm.sendYesNo("#b�z�T�{�n�ɯŬ� #dL v 120 #i1092059##k�i�ë���ܬޡj #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1092047#  �����@��\r\n\#i4001126#  "+Item[X]+" ����\r\n\#i4031138# "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 20) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1302142##k�i���������C�j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1302064#  �������@���C\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 21) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1312056##k�i����������j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1312032#  �����Q�D����\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 22) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1322084##k�i����������j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1322054#  �������H����\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 23) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1402085##k�i������������C�j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1402039#  �������̤��C\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 24) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1412055##k�i�������������j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1412027#  �����c�]����\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 25) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1422057##k�i��������������j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1422029#  �����z������\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 26) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1432075##k�i�����������j�j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1432040#  �����Ȥ뤧�j\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 27) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1442104##k�i�����������١j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1442051#  �����g������\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 28) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1372071##k�i���������u���j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1372034#  �����F��u��\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 29) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1382093##k�i�������������j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1382039#  �������z����\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 30) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1452100##k�i�����������}�j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1452045#  �����g�餧�}\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 31) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1462085##k�i�����������j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1462040#  �����l�P����\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 32) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1332114##k�i���������u�M�j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1332056#  ������ù�u�b\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 33) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1472111##k�i�����������M�j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1472055#  �������~���M\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 34) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1482073##k�i������������j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1482022#  ������������\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 35) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 77 #i1492073##k�i�����������j�j #b�H�U������~\r\n\#e#kL v 64#r#n\r\n\#i1492022#  �����������j\r\n\#i1082252#    ������M#k#e�i�˳��ҩ��A�������˳ơj#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 36) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1302081##k�i�ë�}�ҼC�j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1302142#  ���������C\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 37) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1312037##k�i�ë��_פ��j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1312056#  ����������\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 38) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1322060##k�i�ë���}�ѡj #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1322084#  ����������\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 39) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1402046##k�i�ë�ȭ߼C�j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1402085#  ������������C\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 40) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1412033##k�i�ë�Hﱩ�j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1412055#  �������������\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 41) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1422037##k�i�ë�¾_�ѡj #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1422057#  ��������������\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 42) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1432047##k�i�ë���t�j�j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1432075#  �����������j\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 43) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1442063##k�i�ë����u�j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1442104#  ������������\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 44) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1372044##k�i�ë�ѨϮ𮧡j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1372071#  ���������u��\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 45) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1382057##k�i�ë�B�����j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1382093#  ������������\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 46) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1452057##k�i�ë���q�}�j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1452100#  �����������}\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 47) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1462050##k�i�ë�߹p���j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1462085#  ����������\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 48) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1332074##k�i�ë��_���b�j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1332114#  ���������u�M\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 49) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1472068##k�i�ë��s���M�j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1472111#  �����������M\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 50) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1482023##k�i�ë�ճ��ޡj #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1482073#  ������������\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 51) {
	cm.sendYesNo("#b�z�T�{�n�s�@ #dL v 120 #i1492023##k�i�ë��Ĥ��j�j #b�H�U������~\r\n\#e#kL v 77#r#n\r\n\#i1492073#  �����������j\r\n\#i1082252#    ������M#k#e�i���˳ƧI���A�|#r��������M#k�j#n#r\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 52) {
	cm.sendYesNo("#b�����~�]�m��#e#r�H�����o#d#n       �I�����ơG#i4280000##k�i���_�c�j\r\n\r\n\#r#i4280000#   "+Item[X]+" ���_�c�@�@�@�@#e#k�����G#d�γ\�|���i#r�U��#d�j");
    } else if (X == 53) {
	cm.sendYesNo("#b�����~�]�m��#e#r�H�����o#d#n       �I�����ơG#i4280000##k�i���_�c�j\r\n\r\n\#r#i4280000#   "+Item[X]+" ���_�c�@�@�@�@#e#k�����G#d�γ\�|���i#r�U��#d�j");
    } else if (X == 54) {
	cm.sendYesNo("#b�����~�]�m��#e#r�H�����o#d#n       �I�����ơG#i4280000##k�i���_�c�j\r\n\r\n\#r#i4280000#   "+Item[X]+" ���_�c�@�@�@�@#e#k�����G#d�γ\�|���i#r�U��#d�j");
    } else if (X == 55) {
	cm.sendYesNo("#b�z�T�{�n�X�� #dL v 140 #k�i��l�߫��M�ˡj #b�H�U������~\r\n\#e#k �Y��     ��A     ��M     �c�l#r#n\r\n\#i1002776#    #i1052155#    #i1082234#    #i1072355##e#k  L v 120 �ë�M��#r#n\r\n\#i1003177#    #i1052319#    #i1082300#    #i1072490##e#k L v 130 ��{�M��#r#n\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 56) {
	cm.sendYesNo("#b�z�T�{�n�X�� #dL v 140 #k�i�s���ڮM�ˡj #b�H�U������~\r\n\#e#k �Y��     ��A     ��M     �c�l#r#n\r\n\#i1002777#    #i1052156#    #i1082235#    #i1072356##e#k  L v 120 �ë�M��#r#n\r\n\#i1003178#     #i1052320#    #i1082301#    #i1072491##e#k  L v 130 ��{�M��#r#n\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 57) {
	cm.sendYesNo("#b�z�T�{�n�X�� #dL v 140 #k�i�����x�ʵ��M�ˡj #b�H�U������~\r\n\#e#k �Y��     ��A     ��M     �c�l#r#n\r\n\#i1002778#    #i1052157#    #i1082236#    #i1072357##e#k  L v 120 �ë�M��#r#n\r\n\#i1003179#    #i1052321#    #i1082302#    #i1072492##e#k  L v 130 ��{�M��#r#n\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 58) {
	cm.sendYesNo("#b�z�T�{�n�X�� #dL v 140 #k�i�p�����y�H�M�ˡj #b�H�U������~\r\n\#e#k �Y��     ��A     ��M     �c�l#r#n\r\n\#i1002779#    #i1052158#    #i1082237#    #i1072358##e#k  L v 120 �ë�M��#r#n\r\n\#i1003180#  #i1052322#   #i1082303#    #i1072493##e#k  L v 130 ��{�M��#r#n\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 59) {
	cm.sendYesNo("#b�z�T�{�n�X�� #dL v 140 #k�i�L�ȹϴ���M�ˡj #b�H�U������~\r\n\#e#k �Y��     ��A     ��M     �c�l#r#n\r\n\#i1002780#    #i1052159#    #i1082238#    #i1072359##e#k  L v 120 �ë�M��#r#n\r\n\#i1003181#    #i1052323#    #i1082304#    #i1072494##e#k L v 130 ��{�M��#r#n\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");

    } else if (X == 60) {
	cm.sendYesNo("#b�z�T�{�n��y�� #dL v 130 #i1102280##k�i#t1102280#�j #b�H�U������~\r\n\#e#kL v 30#r#n\r\n\#i1102198#  #t1102198#\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 61) {
	cm.sendYesNo("#b�z�T�{�n��y�� #dL v 130 #i1102281##k�i#t1102281#�j #b�H�U������~\r\n\#e#kL v 30#r#n\r\n\#i1102198#  #t1102198#\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 62) {
	cm.sendYesNo("#b�z�T�{�n��y�� #dL v 130 #i1102282##k�i#t1102282#�j #b�H�U������~\r\n\#e#kL v 30#r#n\r\n\#i1102198#  #t1102198#\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 63) {
	cm.sendYesNo("#b�z�T�{�n��y�� #dL v 130 #i1102283##k�i#t1102283#�j #b�H�U������~\r\n\#e#kL v 30#r#n\r\n\#i1102198#  #t1102198#\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 64) {
	cm.sendYesNo("#b�z�T�{�n��y�� #dL v 130 #i1102284##k�i#t1102284#�j #b�H�U������~\r\n\#e#kL v 30#r#n\r\n\#i1102198#  #t1102198#\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");

    } else if (X == 65) {
	cm.sendYesNo("#b�z�T�{�n��y�� #dL v 140 #i1102275##k�i#t1102275#�j #b�H�U������~\r\n\#e#kL v 30#r#n\r\n\#i1102198#  #t1102198#\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 66) {
	cm.sendYesNo("#b�z�T�{�n��y�� #dL v 140 #i1102276##k�i#t1102276#�j #b�H�U������~\r\n\#e#kL v 30#r#n\r\n\#i1102198#  #t1102198#\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 67) {
	cm.sendYesNo("#b�z�T�{�n��y�� #dL v 140 #i1102277##k�i#t1102277#�j #b�H�U������~\r\n\#e#kL v 30#r#n\r\n\#i1102198#  #t1102198#\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 68) {
	cm.sendYesNo("#b�z�T�{�n��y�� #dL v 140 #i1102278##k�i#t1102278#�j #b�H�U������~\r\n\#e#kL v 30#r#n\r\n\#i1102198#  #t1102198#\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");
    } else if (X == 69) {
	cm.sendYesNo("#b�z�T�{�n��y�� #dL v 140 #i1102279##k�i#t1102279#�j #b�H�U������~\r\n\#e#kL v 30#r#n\r\n\#i1102198#  #t1102198#\r\n\#i4001126#   "+Item[X]+" ����\r\n\#i4031138#  "+Meso[X]+"�U Meso\r\n\r\n\#e#g�w�w�w�w�w�w�w�w�w#k���G#d�������~�b�I���i#r�O#d�j#g�w�w�w�w�w�w�w�w�w");

    }
  lol = X;
}

function C() {
    if (lol == 0) {
	if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 1) {
	if(!cm.haveItem(1002508, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �S �� #dL v 0#k #i1002508##k�i�����Y���j#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1002508, 1) == true) {
	    cm.sendOk("#e�� �}�i E �j#dL v 0#k #i1002508#�i�����Y���j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 0#k #i1002508##k�i�����Y���j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1002508# ��#e#k�i#c1002508#�j#d �w  #r�i1�j#d#n�� �Y ��#k#e�iL v  0�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 2) {
	if(!cm.haveItem(1002509, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �S �� #dL v 8#k #i1002509##k�i�����Y���j#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1002509, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 8#k #i1002509#�i�����Y���j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 8#k #i1002509##k�i�����Y���j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1002509# ��#e#k�i#c1002509#�j#d �w  #r�i1�j#d#n�� �Y ��#k#e�iL v  8�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 3) {
	if(!cm.haveItem(1002510, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �S �� #dL v 30#k #i1002510##k�i�����Y���j#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1002510, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 30#k #i1002510#�i�����Y���j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 30#k #i1002510##k�i�����Y���j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1002510# ��#e#k�i#c1002510#�j#d �w  #r�i1�j#d#n�� �Y ��#k#e�iL v 30�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 4) {
	if(!cm.haveItem(1002511, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �S �� #dL v 70#k #i1002511##k�i�����Y���j#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1002511, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 70#k #i1002511#�i�����Y���j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 70#k #i1002511##k�i�����Y���j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1002511# ��#e#k�i#c1002511#�j#d �w  #r�i1�j#d#n�� �Y ��#k#e�iL v 70�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 5) {
	if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 6) {
	if(!cm.haveItem(1032040, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �S �� #dL v 20#k #i1032040##k�i���������j#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1032040, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 20#k #i1032040#�i���������j�O �_ �a �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 20#k #i1032040##k�i���������j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1032040# ��#e#k�i#c1032040#�j#d �w  #r�i1�j#d#n�� �Y ��#k#e�iL v 20�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 7) {
	if(!cm.haveItem(1032041, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �S �� #dL v 40#k #i1032041##k�i���������j#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1032041, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 40#k #i1032041#�i���������j�O �_ �a �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 40#k #i1032041##k�i���������j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1032041# ��#e#k�i#c1032041#�j#d �w  #r�i1�j#d#n�� �Y ��#k#e�iL v 40�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 8) {
	if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 9) {
	if(!cm.haveItem(1102166, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 20#k #i1102166##k�i�����ܭ��j#g�P#k �� �� �� �n #r"+Item[lol]+"  ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102166, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 20#k#i1102166#�i�����ܭ��j�O �_ �� �b �I ��\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 20#k#i1102166##k�i�����ܭ��j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102166# ��#e#k�i#c1102166#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v 20�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 10) {
	if(!cm.haveItem(1102167, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 40#k #i1102167##k�i�����ܭ��j#g�P#k �� �� �� �n #r"+Item[lol]+"  ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102167, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 40#k#i1102167#�i�����ܭ��j�O �_ �� �b �I ��\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 40#k#i1102167##k�i�����ܭ��j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102167# ��#e#k�i#c1102167#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v 40�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 11) {
	if(!cm.haveItem(1102168, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 70#k #i1102168##k�i�����ܭ��j#g�P#k �� �� �� �n #r"+Item[lol]+"  ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102168, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 70#k#i1102168#�i�����ܭ��j�O �_ �� �b �I ��\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 70#k#i1102168##k�i�����ܭ��j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102168# ��#e#k�i#c1102168#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v 70�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 12) {
	if(!cm.haveItem(1102071, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 70#k #i1102071##k�i#t1102071#�j#g�P#k�� �� �� �n #r"+Item[lol]+"��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102071, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 70#k#i1102071#�i#t1102071#�j�O �_ �� �b �I ��\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 70#k#i1102071##k�i#t1102071#�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102071# ��#e#k�i#c1102071#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v 70�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 13) {
	if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 14) {
	if(!cm.haveItem(1092030, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 20#k #i1092030##k�i�������ޡj#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1092030, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 20#k #i1092030#�i�������ޡj�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 20#k #i1092030##k�i�������ޡj�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1092030# ��#e#k�i#c1092030#�j#d �w  #r�i1�j#d#n�� �� �P#k#e�iL v 20�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 15) {
	if(!cm.haveItem(1092030, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 20#k #i1092030##k�i�������ޡj#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1092030, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 20#k #i1092030#�i�������ޡj�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 20#k #i1092030##k�i�������ޡj�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1092030# ��#e#k�i#c1092030#�j#d �w  #r�i1�j#d#n�� �� �P#k#e�iL v 20�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 16) {
	if(!cm.haveItem(1092030, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 20#k #i1092030##k�i�������ޡj#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1092030, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 20#k #i1092030#�i�������ޡj�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 20#k #i1092030##k�i�������ޡj�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1092030# ��#e#k�i#c1092030#�j#d �w  #r�i1�j#d#n�� �� �P#k#e�iL v 20�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 17) {
	if(!cm.haveItem(1092045, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 64#k #i1092045##k�i�����k�ޡj#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1092045, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 64#k #i1092045#�i�����k�ޡj�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 64#k #i1092045##k�i�����k�ޡj�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1092045# ��#e#k�i#c1092045#�j#d �w  #r�i1�j#d#n�� �� �P#k#e�iL v 64�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 18) {
	if(!cm.haveItem(1092046, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 64#k #i1092046##k�i�����Ԭޡj#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1092046, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 64#k #i1092046#�i�����Ԭޡj�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 64#k #i1092046##k�i�����Ԭޡj�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1092046# ��#e#k�i#c1092046#�j#d �w  #r�i1�j#d#n�� �� �P#k#e�iL v 64�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 19) {
	if(!cm.haveItem(1092047, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 64#k #i1092047##k�i�����@�áj#g�P#k �� �� �� �n #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1092047, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 64#k #i1092047#�i�����@�áj�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 64#k #i1092047##k�i�����@�áj�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1092047# ��#e#k�i#c1092047#�j#d �w  #r�i1�j#d#n�� �� �P#k#e�iL v 64�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 20) {
	if(!cm.haveItem(1302064, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1302064##k�i�������@���C�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1302064, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v 64#k#i1302064#�i�������@���C�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 64#k#i1302064##k�i�������@���C�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1302064#��#e#k�i#c1302064#�j#d �w  #r�i1�j#d#n�� �� �� �� �@ �� �C\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 21) {
	if(!cm.haveItem(1312032, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1312032##k�i�����Q�D����j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1312032, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v 64#k#i1312032#�i�����Q�D����j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 64#k#i1312032##k�i�����Q�D���C�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1312032#��#e#k�i#c1312032#�j#d �w  #r�i1�j#d#n�� �� �� �Q �D �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 22) {
	if(!cm.haveItem(1322054, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1322054##k�i�������H����j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1322054, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v 64#k#i1322054#[ �������H���� ] �O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 64#k#i1322054##k[ �������H���� ] �� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1322054#��#e#k�i#c1322054#�j#d �w  #r�i1�j#d#n�� �� �� �� �H �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 23) {
	if(!cm.haveItem(1402039, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1402039##k�i�������̤��C�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1402039, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v 64#k#i1402039# [ �������̤��C ] �O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 64#k#i1402039##k [ �������̤��C ] �� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1402039#��#e#k�i#c1402039#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� �C\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 24) {
	if(!cm.haveItem(1412027, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1412027##k�i�����c�]����j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1412027, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v 64#k#i1412027#�i�����c�]����j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 64#k#i1412027##k�i�����c�]����j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1412027#��#e#k�i#c1412027#�j#d �w  #r�i1�j#d#n�� �� �� �c �] �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 25) {
	if(!cm.haveItem(1422029, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1422029##k�i�����z������j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1422029, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v 64#k#i1422029#�i�����z������j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 64#k#i1422029##k�i�����z������j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1422029#��#e#k�i#c1422029#�j#d �w  #r�i1�j#d#n�� �� �� �z �� �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 26) {
	if(!cm.haveItem(1432040, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1432040##k�i�����Ȥ뤧�j�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1432040, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v64#k#i1432040#�i�����Ȥ뤧�j�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 64#k#i1432040##k�i�����Ȥ뤧�j�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1432040#��#e#k�i#c1432040#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� �j\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 27) {
	if(!cm.haveItem(1442051, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1442051##k�i�����g�����١j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1442051, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v 64#k#i1442051# [ �����g������ ] �O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 64#k#i1442051##k [ �����g������ ] �� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1442051#��#e#k�i#c1442051#�j#d �w  #r�i1�j#d#n�� �� �� �g �� �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 28) {
	if(!cm.haveItem(1372034, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1372034##k�i�����F��u���j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1372034, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v 64#k#i1372034#�i�����F��u���j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 64#k#i1372034##k�i�����F��u���j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1372034#��#e#k�i#c1372034#�j#d �w  #r�i1�j#d#n�� �� �� �F �� �u ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 29) {
	if(!cm.haveItem(1382039, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1382039##k�i�������z�����j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1382039, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v64#k#i1382039#�i�������z�����j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 64#k#i1382039##k�i�������z�����j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1382039#��#e#k�i#c1382039#�j#d �w  #r�i1�j#d#n�� �� �� �� �z �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 30) {
	if(!cm.haveItem(1452045, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1452045##k�i�����g�餧�}�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1452045, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v 64#k#i1452045# [ �����g�餧�} ] �O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 64#k#i1452045##k [ �����g�餧�} ] �� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1452045#��#e#k�i#c1452045#�j#d �w  #r�i1�j#d#n�� �� �� �g �� �� �}\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 31) {
	if(!cm.haveItem(1462040, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1462040##k�i�����l�P�����j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1462040, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v64#k#i1462040#�i�����l�P�����j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 64#k#i1462040##k�i�����l�P�����j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1462040#��#e#k�i#c1462040#�j#d �w  #r�i1�j#d#n�� �� �� �l �P �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 32) {
	if(!cm.haveItem(1332056, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1332056##k�i������ù�u�b�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1332056, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v64#k#i1332056#�i������ù�u�b�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 64#k#i1332056##k�i������ù�u�b�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1332056#��#e#k�i#c1332056#�j#d �w  #r�i1�j#d#n�� �� �� �� ù �u �b\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 33) {
	if(!cm.haveItem(1472055, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1472055##k�i�������~���M�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1472055, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v64#k#i1472055#�i�������~���M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 64#k#i1472055##k�i�������~���M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1472055#��#e#k�i#c1472055#�j#d �w  #r�i1�j#d#n�� �� �� �� �~ �� �M\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 34) {
	if(!cm.haveItem(1482022, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1482022##k�i������������j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1482022, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v64#k#i1482022#�i������������j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 64#k#i1482022##k�i������������j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1482022#��#e#k�i#c1482022#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 35) {
	if(!cm.haveItem(1492022, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1492022##k�i�����������j�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1492022, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v64#k#i1492022#�i�����������j�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 64#k#i1492022##k�i�����������j�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1492022#��#e#k�i#c1492022#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� �j\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i0�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
   } else if (lol == 36) {
	if(!cm.haveItem(1302142, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1302142##k�i���������C�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1302142, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v77#k#i1302142#�i���������C�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1302142##k�i���������C�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1302142#��#e#k�i#c1302142#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �C\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 37) {
	if(!cm.haveItem(1312056, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1312056##k�i����������j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1312056, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v77#k#i1312056#�i����������j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1312056##k�i����������j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1312056#��#e#k�i#c1312056#�j#d �w  #r�i1�j#d#n�� �� �� �� �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 38) {
	if(!cm.haveItem(1322084, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1322084##k�i����������j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1322084, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v77#k#i1322084#�i����������j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1322084##k�i����������j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1322084#��#e#k�i#c1322084#�j#d �w  #r�i1�j#d#n�� �� �� �� �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 39) {
	if(!cm.haveItem(1402085, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1402085##k�i������������C�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1402085, 1) == true) {
	    cm.sendOk("#e���} [ E ] #dL v77#k  #i1402085#�i������������C�j�O�_���b��W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z   �S   ��#dL v 77#k#i1402085##k�i������������C�j�Цb�T�{���~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1402085#��#e#k�i#c1402085#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� �� �C\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 40) {
	if(!cm.haveItem(1412055, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1412055##k�i�������������j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1412055, 1) == true) {
	    cm.sendOk("#e���} [ E ] #dL v77#k  #i1412055#�i�������������j�O�_���b��W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z   �S   ��#dL v 77#k#i1412055##k�i�������������j�Цb�T�{���~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1412055#��#e#k�i#c1412055#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 41) {
	if(!cm.haveItem(1422057, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1422057##k�i��������������j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1422057, 1) == true) {
	    cm.sendOk("#e���} [ E ] #dL v77#k  #i1422057#�i��������������j�O�_���b��W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z   �S   ��#dL v 77#k#i1422057##k�i��������������j�Цb�T�{���~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1422057#��#e#k�i#c1422057#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 42) {
	if(!cm.haveItem(1432075, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1432075##k�i�����������j�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1432075, 1) == true) {
	    cm.sendOk("#e���}�iE�j#dL v77#k  #i1432075#�i�����������j�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1432075##k�i�����������j�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1432075#��#e#k�i#c1432075#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� �j\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 43) {
	if(!cm.haveItem(1442104, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1442104##k�i�����������١j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1442104, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v77#k  #i1442104#�i�����������١j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1442104##k�i�����������١j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1432075#��#e#k�i#c1432075#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 44) {
	if(!cm.haveItem(1372071, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1372071##k�i���������u���j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1372071, 1) == true) {
	    cm.sendOk("#e���}�iE�j#dL v77#k  #i1372071#�i���������u���j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1372071##k�i���������u���j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1372071#��#e#k�i#c1372071#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �u ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 45) {
	if(!cm.haveItem(1382093, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1382093##k�i�����������١j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1382093, 1) == true) {
	    cm.sendOk("#e���}�iE�j#dL v77#k  #i1382093#�i�������������j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1382093##k�i�������������j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1382093#��#e#k�i#c1382093#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 46) {
	if(!cm.haveItem(1452100, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1452100##k�i�����������}�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1452100, 1) == true) {
	    cm.sendOk("#e���}�iE�j#dL v77#k  #i1452100#�i�����������}�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1452100##k�i�����������}�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1452100#��#e#k�i#c1452100#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� �}\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 47) {
	if(!cm.haveItem(1462085, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1462085##k�i�����������j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1462085, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v77#k  #i1462085#�i�����������j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1462085##k�i�����������j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1462085#��#e#k�i#c1462085#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 48) {
	if(!cm.haveItem(1332114, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1332114##k�i���������u�M�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1332114, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v77#k  #i1332114#�i���������u�M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1332114##k�i���������u�M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1332114#��#e#k�i#c1332114#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �u �M\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 49) {
	if(!cm.haveItem(1472111, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1472111##k�i�����������M�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1472111, 1) == true) {
	    cm.sendOk("#e���}�iE�j#dL v77#k  #i1472111#�i�����������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1472111##k�i�����������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1472111#��#e#k�i#c1472111#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� �M\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 50) {
	if(!cm.haveItem(1482073, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1482073##k�i������������j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1482073, 1) == true) {
	    cm.sendOk("#e���}�i E �j#dL v77#k  #i1482073#�i������������j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1482073##k�i������������j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1482073#��#e#k�i#c1482073#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� ��\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 51) {
	if(!cm.haveItem(1492073, 1) == true && !cm.haveItem(1082252, 1) == true) {
	    cm.sendOk("#e�z�S��   #i1492073##k�i�����������j�j#g�P#k  #i1082252##k�i������M�j#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1492073, 1) == true) {
	    cm.sendOk("#e���}�iE�j#dL v77#k  #i1492073#�i�����������j�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��#dL v 77#k#i1492073##k�i�����������j�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(1082252, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j #dL v 13#k #i1082252#�i������M�j�O �_ �� �b �� �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    ��  #dL v 13#k #i1082252##k�i������M�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i1492073#��#e#k�i#c1492073#�j#d �w  #r�i1�j#d#n�� �� �� �� �� �� �j\r\n\#d�z �� �e �� #i1082252#  ��#e#k�i#c1082252#�j#d �w  #r�i1�j#d#n�� �� �� �� �M#k#e�i�������j#n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 52) {
	if(!cm.haveItem(4280000, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4280000#  ���i#c4280000#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else {
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4280000# ��#e#k�i#c4280000#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �W �� �� �J ��\r\n\\r\n\                              #g�I���i�U���j�}�l#e#r�H��#g#n���");
	}
    } else if (lol == 53) {
	if(!cm.haveItem(4280000, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4280000#  ���i#c4280000#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else {
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4280000# ��#e#k�i#c4280000#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �W �� �� �J ��\r\n\\r\n\                              #g�I���i�U���j�}�l#e#r�H��#g#n���");
	}
    } else if (lol == 54) {
	if(!cm.haveItem(4280000, Item[lol]) == true) {
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4280000#  ���i#c4280000#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else {
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4280000# ��#e#k�i#c4280000#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �W �� �� �J ��\r\n\\r\n\                              #g�I���i�U���j�}�l#e#r�H��#g#n���");
	}
    } else if (lol == 55) {
	if(cm.haveItem(1002776) && cm.haveItem(1052155) && cm.haveItem(1082234) && cm.haveItem(1072355) && cm.haveItem(1003177) && cm.haveItem(1052319) && cm.haveItem(1082300) && cm.haveItem(1072490)) {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j�X�����~");
	} else {
	    cm.sendOk("#e�z�����a��#r���㪺#k��M�M��\r\n\r\n\#i1002776##i1052155# #i1082234##i1072355#  L v 120 �ë�M��\r\n\#i1003177##i1052319##i1082300##i1072490#  L v 130 ��{�M��");
	    cm.dispose();
	}
    } else if (lol == 56) {
	if(cm.haveItem(1002777) && cm.haveItem(1052156) && cm.haveItem(1082235) && cm.haveItem(1072356) && cm.haveItem(1003178) && cm.haveItem(1052320) && cm.haveItem(1082301) && cm.haveItem(1072491)) {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j�X�����~");
	} else {
	    cm.sendOk("#e�z�����a��#r���㪺#k��M�M��\r\n\r\n\#i1002777##i1052156##i1082235##i1072356#  L v 120 �ë�M��\r\n\#i1003178# #i1052320##i1082301##i1072491#  L v 130 ��{�M��");
	    cm.dispose();
	}
    } else if (lol == 57) {
	if(cm.haveItem(1002778) && cm.haveItem(1052157) && cm.haveItem(1082236) && cm.haveItem(1072357) && cm.haveItem(1003179) && cm.haveItem(1052321) && cm.haveItem(1082302) && cm.haveItem(1072492)) {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j�X�����~");
	} else {
	    cm.sendOk("#e�z�����a��#r���㪺#k��M�M��\r\n\r\n\#i1002778##i1052157##i1082236##i1072357#  L v 120 �ë�M��\r\n\#i1003179##i1052321##i1082302##i1072492#  L v 130 ��{�M��");
	    cm.dispose();
	}
    } else if (lol == 58) {
	if(cm.haveItem(1002779) && cm.haveItem(1052158) && cm.haveItem(1082237) && cm.haveItem(1072358) && cm.haveItem(1003180) && cm.haveItem(1052322) && cm.haveItem(1082303) && cm.haveItem(1072493)) {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j�X�����~");
	} else {
	    cm.sendOk("#e�z�����a��#r���㪺#k��M�M��\r\n\r\n\#i1002779# #i1052158# #i1082237# #i1072358#  L v 120 �ë�M��\r\n\#i1003180##i1052322##i1082303##i1072493#  L v 130 ��{�M��");
	    cm.dispose();
	}
    } else if (lol == 59) {
	if(cm.haveItem(1002780) && cm.haveItem(1052159) && cm.haveItem(1082238) && cm.haveItem(1072359) && cm.haveItem(1003181) && cm.haveItem(1052323) && cm.haveItem(1082304) && cm.haveItem(1072494)) {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\r\n\#d�z �� �e �� #i4031138#��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j�X�����~");
	} else {
	    cm.sendOk("#e�z�����a��#r���㪺#k��M�M��\r\n\r\n\#i1002780##i1052159# #i1082238##i1072359#  L v 120 �ë�M��\r\n\#i1003181##i1052323##i1082304##i1072494#  L v 130 ��{�M��");
	    cm.dispose();
	}
    } else if (lol == 60) {
	if(!cm.haveItem(1102198, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 30#k #i1102198##k�i#t1102198#�j#g�P#k �����ݭn #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102198, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 30#k#i1102198#�i#t1102198#�j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 30#k#i1102198##k�i#t1102198#�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102198# ��#e#k�i#c1102198#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v  30�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 61) {
	if(!cm.haveItem(1102198, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 30#k #i1102198##k�i#t1102198#�j#g�P#k �����ݭn #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102198, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 30#k#i1102198#�i#t1102198#�j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 30#k#i1102198##k�i#t1102198#�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102198# ��#e#k�i#c1102198#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v  30�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 62) {
	if(!cm.haveItem(1102198, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 30#k #i1102198##k�i#t1102198#�j#g�P#k �����ݭn #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102198, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 30#k#i1102198#�i#t1102198#�j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 30#k#i1102198##k�i#t1102198#�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102198# ��#e#k�i#c1102198#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v  30�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 63) {
	if(!cm.haveItem(1102198, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 30#k #i1102198##k�i#t1102198#�j#g�P#k �����ݭn #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102198, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 30#k#i1102198#�i#t1102198#�j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 30#k#i1102198##k�i#t1102198#�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102198# ��#e#k�i#c1102198#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v  30�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 64) {
	if(!cm.haveItem(1102198, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 30#k #i1102198##k�i#t1102198#�j#g�P#k �����ݭn #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102198, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 30#k#i1102198#�i#t1102198#�j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 30#k#i1102198##k�i#t1102198#�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102198# ��#e#k�i#c1102198#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v  30�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 65) {
	if(!cm.haveItem(1102198, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 30#k #i1102198##k�i#t1102198#�j#g�P#k �����ݭn #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102198, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 30#k#i1102198#�i#t1102198#�j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 30#k#i1102198##k�i#t1102198#�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102198# ��#e#k�i#c1102198#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v  30�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 66) {
	if(!cm.haveItem(1102198, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 30#k #i1102198##k�i#t1102198#�j#g�P#k �����ݭn #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102198, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 30#k#i1102198#�i#t1102198#�j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 30#k#i1102198##k�i#t1102198#�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102198# ��#e#k�i#c1102198#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v  30�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 67) {
	if(!cm.haveItem(1102198, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 30#k #i1102198##k�i#t1102198#�j#g�P#k �����ݭn #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102198, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 30#k#i1102198#�i#t1102198#�j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 30#k#i1102198##k�i#t1102198#�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102198# ��#e#k�i#c1102198#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v  30�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 68) {
	if(!cm.haveItem(1102198, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 30#k #i1102198##k�i#t1102198#�j#g�P#k �����ݭn #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102198, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 30#k#i1102198#�i#t1102198#�j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 30#k#i1102198##k�i#t1102198#�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102198# ��#e#k�i#c1102198#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v  30�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    } else if (lol == 69) {
	if(!cm.haveItem(1102198, 1) == true && !cm.haveItem(4001126, Item[lol]) == true) {
	    cm.sendOk("#e�z�S�� #dL v 30#k #i1102198##k�i#t1102198#�j#g�P#k �����ݭn #r"+Item[lol]+" ��#k\r\n\r\n\        �� �T �{ �I �] �� �� �� �� �~ �b �� �� �� �� �~");
	    cm.dispose();
	} else if(!cm.haveItem(4001126, Item[lol]) == true) { 
	    cm.sendOk("#e�z �� �� �� �| �� �� �� �� �b �T �{ �@ ��\r\n\\r\n\�� �� ��  #i4001126#  ���i#c4001126#�j��                     #r�x �ݭn"+Item[lol]+"�� �x");
	    cm.dispose();
	} else if(!cm.haveItem(1102198, 1) == true) { 
	    cm.sendOk("#e�� �}�i E �j#dL v 30#k#i1102198#�i#t1102198#�j�O �_ �a �b �Y �W\r\n\\r\n\                                #r��  ��#k\r\n\\r\n\�z    �S    �� #dL v 30#k#i1102198##k�i#t1102198#�j�� �b �T �{ �� �~");
	    cm.dispose();
	} else {
	    var Mesos = cm.getPlayer().getMeso();
	    cm.sendNext("#b�t���˴���~~\r\n\\r\n\#d�z �� �e �� #i4001126# ��#e#k�i#c4001126#�j#d �w  #r�i"+Item[lol]+"�j#d#n�� �� ��\r\n\#d�z �� �e �� #i1102198# ��#e#k�i#c1102198#�j#d �w  #r�i1�j#d#n�� �� ��#k#e�iL v  30�j#n\r\n\#d�z �� �e �� #i4031138# ��#e#k�i"+Mesos+"�j#d �w  #r�i"+Meso[lol] * P+"�j#d#n��\r\n\              "+Mesos1+"\r\n\                                #g�I���i�U���j������~");
	}
    }
}

function V() {
  cm.gainMeso(-Meso[lol] * P);
    if (lol == 0) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1002508,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 0#i1002508##k�i�����Y���j");
	cm.dispose();
    } else if (lol == 1) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1002508,-1);
	cm.gainItem(1002509,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 8#i1002509##k�i�����Y���j");
	cm.dispose();
    } else if (lol == 2) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1002509,-1);
	cm.gainItem(1002510,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 30#i1002510##k�i�����Y���j");
	cm.dispose();
    } else if (lol == 3) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1002510,-1);
	cm.gainItem(1002511,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 70#i1002511##k�i�����Y���j");
	cm.dispose();
    } else if (lol == 4) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1002511,-1);
	cm.gainItem(1002758,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 90#i1002758##k�i�����Y���j");
	cm.dispose();
    } else if (lol == 5) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1032040,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 20#i1032040##k�i���������j");
	cm.dispose();
    } else if (lol == 6) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1032040,-1);
	cm.gainItem(1032041,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 40#i1032041##k�i���������j");
	cm.dispose();
    } else if (lol == 7) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1032041,-1);
	cm.gainItem(1032042,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 70#i1032042##k�i���������j");
	cm.dispose();
    } else if (lol == 8) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102166,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 20#i1102166##k�i�����ܭ��j");
	cm.dispose();
    } else if (lol == 9) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102166,-1);
	cm.gainItem(1102167,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 40#i1102167##k�i�����ܭ��j");
 	cm.dispose();
    } else if (lol == 10) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102167,-1);
	cm.gainItem(1102168,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 70#i1102168##k�i�����ܭ��j");
 	cm.dispose();
    } else if (lol == 11) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102168,-1);
	cm.gainItem(1102071,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 70#i1102071##k�i�u  �ܭ��j");
	cm.dispose();
    } else if (lol == 12) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102071,-1);
	cm.gainItem(1102198,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 30#i1102198##k�i�����ܭ��j");
	cm.dispose();
    } else if (lol == 13) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1092030,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 20#i1092030##k�i�������ޡj");
 	cm.dispose();
    } else if (lol == 14) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1092030,-1);
	cm.gainItem(1092045,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 64#i1092045##k�i�����k�ޡj");
	cm.dispose();
    } else if (lol == 15) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1092030,-1);
	cm.gainItem(1092046,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 64#i1092046##k�i�����Ԭޡj");
 	cm.dispose();
    } else if (lol == 16) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1092030,-1);
	cm.gainItem(1092047,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 64#i1092047##k�i�����@�áj");
	cm.dispose();
    } else if (lol == 17) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1092045,-1);
	cm.gainItem(1092057,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1092057##k#b�i#t1092057#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 18) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1092046,-1);
	cm.gainItem(1092058,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1092058##k#b�i#t1092058#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 19) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1092047,-1);
	cm.gainItem(1092059,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1092059##k#b�i#t1092059#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 20) {
	cm.gainItem(1302064,-1);
	cm.gainItem(1302142,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1302142##k#b�i#t1302142#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 21) {
	cm.gainItem(1312032,-1);
	cm.gainItem(1312056,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1312056##k#b�i#t1312056#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 22) {
	cm.gainItem(1322054,-1);
	cm.gainItem(1322084,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1322084##k#b�i#t1322084#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 23) {
	cm.gainItem(1402039,-1);
	cm.gainItem(1402085,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1402085##k#b [ #t1402085# ]\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 24) {
	cm.gainItem(1412027,-1);
	cm.gainItem(1412055,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1412055##k#b�i#t1412055#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 25) {
	cm.gainItem(1422029,-1);
	cm.gainItem(1422057,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1422057##k#b [ #t1422057# ]\r\n\                                                          #rL v 77");
   	cm.dispose();
    } else if (lol == 26) {
	cm.gainItem(1432040,-1);
	cm.gainItem(1432075,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1432075##k#b�i#t1432075#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 27) {
	cm.gainItem(1442051,-1);
	cm.gainItem(1442104,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1442104##k#b�i#t1442104#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 28) {
	cm.gainItem(1372034,-1);
	cm.gainItem(1372071,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1372071##k#b�i#t1372071#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 29) {
	cm.gainItem(1382039,-1);
	cm.gainItem(1382093,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1382093##k#b�i#t1382093#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 30) {
	cm.gainItem(1452045,-1);
	cm.gainItem(1452100,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1452100##k#b�i#t1452100#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 31) {
	cm.gainItem(1462040,-1);
	cm.gainItem(1462085,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1462085##k#b�i#t1462085#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 32) {
	cm.gainItem(1332056,-1);
	cm.gainItem(1332114,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1332114##k#b�i#t1332114#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 33) {
	cm.gainItem(1472055,-1);
	cm.gainItem(1472111,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1472111##k#b�i#t1472111#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 34) {
	cm.gainItem(1482022,-1);
	cm.gainItem(1482073,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1482073##k#b�i#t1482073#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 35) {
	cm.gainItem(1492022,-1);
	cm.gainItem(1492073,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1492073##k#b�i#t1492073#�j\r\n\                                                          #rL v 77");
	cm.dispose();
    } else if (lol == 36) {
	cm.gainItem(1302142,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1302081,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1302081##k#b�i#t1302081#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 37) {
	cm.gainItem(1312056,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1312037,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1312037##k#b�i#t1312037#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 38) {
	cm.gainItem(1322084,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1322060,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1322060##k#b�i#t1322060#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 39) {
	cm.gainItem(1402085,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1402046,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1402046##k#b�i#t1402046#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 40) {
	cm.gainItem(1412055,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1412033,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1412033##k#b�i#t1412033#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 41) {
	cm.gainItem(1422057,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1422037,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1422037##k#b�i#t1422037#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 42) {
	cm.gainItem(1432075,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1432047,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1432047##k#b�i#t1432047#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 43) {
	cm.gainItem(1442104,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1442063,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1442063##k#b�i#t1442063#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 44) {
	cm.gainItem(1372071,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1372044,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1372044##k#b�i#t1372044#�j\r\n\                                                          #rL v 120");
 	cm.dispose();
    } else if (lol == 45) {
	cm.gainItem(1382093,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1382057,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1382057##k#b�i#t1382057#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 46) {
	cm.gainItem(1452100,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1452057,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1452057##k#b�i#t1452057#�j\r\n\                                                          #rL v 120");
  	cm.dispose();
    } else if (lol == 47) {
	cm.gainItem(1462085,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1462050,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1462050##k#b�i#t1462050#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 48) {
	cm.gainItem(1332114,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1332074,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1332074##k#b�i#t1332074#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 49) {
	cm.gainItem(1472111,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1472068,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1472068##k#b�i#t1472068#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 50) {
	cm.gainItem(1482073,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1482023,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1482023##k#b�i#t1482023#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol == 51) {
	cm.gainItem(1492073,-1);
	cm.gainItem(1082252,-1);
	cm.gainItem(1492023,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#i1492023##k#b�i#t1492023#�j\r\n\                                                          #rL v 120");
	cm.dispose();
    } else if (lol  == 52) {
	var chance = Math.floor(Math.random()*30)+1;
	var chance1 = Math.floor(Math.random()*3)+1;
	cm.gainItem(4280000, -Item[lol]);
	if(chance>=29 && chance<=30){
	    cm.giveRandItem(ids0_2, 10, 10);
	    cm.dispose();
	} else if(chance>=28 && chance<=29){
	    cm.giveRandItem(ids0_1, 8, 7);
	    cm.dispose();
	} else if(chance>=3 && chance<=6 || chance>=17 && chance<=20){
	    cm.giveRandItem(ids0_0, 5, 5);
	    cm.dispose();
	} else if(chance>=10 && chance<=11){
	    cm.gainItem(4031456,chance1);
	    cm.sendOk("#r�u�i��, �S����쪫�~, #b���y�A#i4031456#�����]�l #r"+chance1+"#b ��.");
	    cm.dispose();
	} else {
	    cm.sendOk("#r�u�i��, �S����쪫�~, �b���b��, �۫H�U���N�i�H��쪺.");
	    cm.dispose();
	}
    } else if (lol  == 53) {
	var chance = Math.floor(Math.random()*40)+1;
	var chance1 = Math.floor(Math.random()*3)+1;
	cm.gainItem(4280000, -Item[lol]);
	if(chance==35){
	    cm.gainItem(4031456,chance1);
	    cm.sendOk("#r�u�i��, �S����쪫�~, #b���y�A#i4031456#�����]�l #r"+chance1+"#b ��.");
	    cm.dispose();
	} else if(chance>=4 && chance<=20){
	    cm.Item(ids1, false);
	    cm.dispose();
	} else {
	    cm.sendOk("#r�u�i��, �S����쪫�~, �b���b��, �۫H�U���N�i�H��쪺.");
	    cm.dispose();
	}
    } else if (lol  == 54) {
	var chance = Math.floor(Math.random()*35)+1;
	var chance1 = Math.floor(Math.random()*3)+1;
	cm.gainItem(4280000, -Item[lol]);
	if(chance==30){
	    cm.gainItem(4031456,chance1);
	    cm.sendOk("#r�u�i��, �S����쪫�~, #b���y�A#i4031456#�����]�l #r"+chance1+"#b ��.");
	    cm.dispose();
	} else if(chance>=4 && chance<=17){
	    cm.Item(ids2, false);
	    cm.dispose();
	} else {
	    cm.sendOk("#r�u�i��, �S����쪫�~, �b���b��, �۫H�U���N�i�H��쪺.");
	    cm.dispose();
	}
    } else if (lol  == 55) {
	var chance = Math.floor(Math.random()*9)+1;
	cm.gainItem(1002776, -Item[lol]);
	cm.gainItem(1052155, -Item[lol]);
	cm.gainItem(1082234, -Item[lol]);
	cm.gainItem(1072355, -Item[lol]);
	cm.gainItem(1003177, -Item[lol]);
	cm.gainItem(1052319, -Item[lol]);
	cm.gainItem(1082300, -Item[lol]);
	cm.gainItem(1072490, -Item[lol]);
	if(chance>=2 && chance<=3){
	    cm.giveRandItem(1003172, 30, 30, true, true, false, false);
	    cm.giveRandItem(1052314, 30, 30, true, true, false, false);
	    cm.giveRandItem(1082295, 30, 30, true, true, false, false);
	    cm.giveRandItem(1072485, 30, 30, true, true, false, false);
	    cm.sendOk("#b���߱z�A�a��#r�i�����k�ӮM��#b�A�֥h�ݬݥ]�]�a�I");
	    cm.serverNotice(6, "[�j������]�i" + cm.getName() + "�j��o�y�C�h �i�����k�ӮM�ˡz!~");
	    cm.dispose();
	} else if(chance==1 || chance>=5 && chance<=8){
	    cm.gainItem(1003172);
	    cm.gainItem(1052314);
	    cm.gainItem(1082295);
	    cm.gainItem(1072485);
	    cm.sendOk("#b���߱z�A���\�աA�֥h�ݬݥ]�]�a�A�۫H�A�@�w�|���w���I");
	    cm.serverNotice(6, "[����]�i" + cm.getName() + "�j��o�y�C�h �k�ӮM�ˡz!~");
	    cm.dispose();
	} else {
	    cm.sendOk("#r�u���ѡA�X���S�����\�A�b���b���A�۫H�A�@�w�ন�\���I");
	    cm.dispose();
	}
    } else if (lol  == 56) {
	var chance = Math.floor(Math.random()*9)+1;
	cm.gainItem(1002777, -Item[lol]);
	cm.gainItem(1052156, -Item[lol]);
	cm.gainItem(1082235, -Item[lol]);
	cm.gainItem(1072356, -Item[lol]);
	cm.gainItem(1003178, -Item[lol]);
	cm.gainItem(1052320, -Item[lol]);
	cm.gainItem(1082301, -Item[lol]);
	cm.gainItem(1072491, -Item[lol]);
	if(chance>=2 && chance<=3){
	    cm.giveRandItem(1003173, 30, 30, false, false, true, true);
	    cm.giveRandItem(1052315, 30, 30, false, false, true, true);
	    cm.giveRandItem(1082296, 30, 30, false, false, true, true);
	    cm.giveRandItem(1072486, 30, 30, false, false, true, true);
	    cm.sendOk("#b���߱z�A�a��#r�i�����k�ӮM��#b�A�֥h�ݬݥ]�]�a�I");
	    cm.serverNotice(6, "[�j������]�i" + cm.getName() + "�j��o�y�k�v �i�����k�ӮM�ˡz!~");
	    cm.dispose();
	} else if(chance==1 || chance>=5 && chance<=8){
	    cm.gainItem(1003173);
	    cm.gainItem(1052315);
	    cm.gainItem(1082296);
	    cm.gainItem(1072486);
	    cm.sendOk("#b���߱z�A���\�աA�֥h�ݬݥ]�]�a�A�۫H�A�@�w�|���w���I");
	    cm.serverNotice(6, "[����]�i" + cm.getName() + "�j��o�y�k�v �k�ӮM�ˡz!~");
	    cm.dispose();
	} else {
	    cm.sendOk("#r�u���ѡA�X���S�����\�A�b���b���A�۫H�A�@�w�ন�\���I");
	    cm.dispose();
	}
    } else if (lol  == 57) {
	var chance = Math.floor(Math.random()*9)+1;
	cm.gainItem(1002778, -Item[lol]);
	cm.gainItem(1052157, -Item[lol]);
	cm.gainItem(1082236, -Item[lol]);
	cm.gainItem(1072357, -Item[lol]);
	cm.gainItem(1003179, -Item[lol]);
	cm.gainItem(1052321, -Item[lol]);
	cm.gainItem(1082302, -Item[lol]);
	cm.gainItem(1072492, -Item[lol]);
	if(chance>=2 && chance<=3){
	    cm.giveRandItem(1003174, 30, 30, true, true, false, false);
	    cm.giveRandItem(1052316, 30, 30, true, true, false, false);
	    cm.giveRandItem(1082297, 30, 30, true, true, false, false);
	    cm.giveRandItem(1072487, 30, 30, true, true, false, false);
	    cm.sendOk("#b���߱z�A�a��#r�i�����k�ӮM��#b�A�֥h�ݬݥ]�]�a�I");
	    cm.serverNotice(6, "[�j������]�i" + cm.getName() + "�j��o�y�}�b�� �i�����k�ӮM�ˡz!~");
	    cm.dispose();
	} else if(chance==1 || chance>=5 && chance<=8){
	    cm.gainItem(1003174);
	    cm.gainItem(1052316);
	    cm.gainItem(1082297);
	    cm.gainItem(1072487);
	    cm.sendOk("#b���߱z�A���\�աA�֥h�ݬݥ]�]�a�A�۫H�A�@�w�|���w���I");
	    cm.serverNotice(6, "[����]�i" + cm.getName() + "�j��o�y�}�b�� �k�ӮM�ˡz!~");
	    cm.dispose();
	} else {
	    cm.sendOk("#r�u���ѡA�X���S�����\�A�b���b���A�۫H�A�@�w�ন�\���I");
	    cm.dispose();
	}
    } else if (lol  == 58) {
	var chance = Math.floor(Math.random()*9)+1;
	cm.gainItem(1002779, -Item[lol]);
	cm.gainItem(1052158, -Item[lol]);
	cm.gainItem(1082237, -Item[lol]);
	cm.gainItem(1072358, -Item[lol]);
	cm.gainItem(1003180, -Item[lol]);
	cm.gainItem(1052322, -Item[lol]);
	cm.gainItem(1082303, -Item[lol]);
	cm.gainItem(1072493, -Item[lol]);
	if(chance>=2 && chance<=3){
	    cm.giveRandItem(1003175, 30, 30, true, false, false, true);
	    cm.giveRandItem(1052317, 30, 30, true, false, false, true);
	    cm.giveRandItem(1082298, 30, 30, true, false, false, true);
	    cm.giveRandItem(1072488, 30, 30, true, false, false, true);
	    cm.sendOk("#b���߱z�A�a��#r�i�����k�ӮM��#b�A�֥h�ݬݥ]�]�a�I");
	    cm.serverNotice(6, "[�j������]�i" + cm.getName() + "�j��o�y�s�� �i�����k�ӮM�ˡz!~");
	    cm.dispose();
	} else if(chance==1 || chance>=5 && chance<=8){
	    cm.gainItem(1003175);
	    cm.gainItem(1052317);
	    cm.gainItem(1082298);
	    cm.gainItem(1072488);
	    cm.sendOk("#b���߱z�A���\�աA�֥h�ݬݥ]�]�a�A�۫H�A�@�w�|���w���I");
	    cm.serverNotice(6, "[����]�i" + cm.getName() + "�j��o�y�s�� �k�ӮM�ˡz!~");
	    cm.dispose();
	} else {
	    cm.sendOk("#r�u���ѡA�X���S�����\�A�b���b���A�۫H�A�@�w�ন�\���I");
	    cm.dispose();
	}
    } else if (lol  == 59) {
	var chance = Math.floor(Math.random()*9)+1;
	cm.gainItem(1002780, -Item[lol]);
	cm.gainItem(1052159, -Item[lol]);
	cm.gainItem(1082238, -Item[lol]);
	cm.gainItem(1072359, -Item[lol]);
	cm.gainItem(1003181, -Item[lol]);
	cm.gainItem(1052323, -Item[lol]);
	cm.gainItem(1082304, -Item[lol]);
	cm.gainItem(1072494, -Item[lol]);
	if(chance>=2 && chance<=3){
	    cm.giveRandItem(1003176, 30, 30, true, true, false, false);
	    cm.giveRandItem(1052318, 30, 30, true, true, false, false);
	    cm.giveRandItem(1082299, 30, 30, true, true, false, false);
	    cm.giveRandItem(1072489, 30, 30, true, true, false, false);
	    cm.sendOk("#b���߱z�A�a��#r�i�����k�ӮM��#b�A�֥h�ݬݥ]�]�a�I");
	    cm.serverNotice(6, "[�j������]�i" + cm.getName() + "�j��o�y���s �i�����k�ӮM�ˡz!~");
	    cm.dispose();
	} else if(chance==1 || chance>=5 && chance<=8){
	    cm.gainItem(1003176);
	    cm.gainItem(1052318);
	    cm.gainItem(1082299);
	    cm.gainItem(1072489);
	    cm.sendOk("#b���߱z�A���\�աA�֥h�ݬݥ]�]�a�A�۫H�A�@�w�|���w���I");
	    cm.serverNotice(6, "[����]�i" + cm.getName() + "�j��o�y���s �k�ӮM�ˡz!~");
	    cm.dispose();
	} else {
	    cm.sendOk("#r�u���ѡA�X���S�����\�A�b���b���A�۫H�A�@�w�ন�\���I");
	    cm.dispose();
	}
    } else if (lol == 60) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102198,-1);
	cm.gainItem(1102280,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 130#i1102280##k�i#t1102280#�j");
	cm.dispose();
    } else if (lol == 61) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102198,-1);
	cm.gainItem(1102281,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 130#i1102281##k�i#t1102281#�j");
	cm.dispose();
    } else if (lol == 62) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102198,-1);
	cm.gainItem(1102282,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 130#i1102282##k�i#t1102282#�j");
	cm.dispose();
    } else if (lol == 63) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102198,-1);
	cm.gainItem(1102283,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 130#i1102283##k�i#t1102283#�j");
	cm.dispose();
    } else if (lol == 64) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102198,-1);
	cm.gainItem(1102284,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 130#i1102284##k�i#t1102284#�j");
	cm.dispose();
    } else if (lol == 65) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102198,-1);
	cm.gainItem(1102275,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 140#i1102275##k�i#t1102275#�j");
	cm.dispose();
    } else if (lol == 66) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102198,-1);
	cm.gainItem(1102276,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 140#i1102276##k�i#t1102276#�j");
	cm.dispose();
    } else if (lol == 67) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102198,-1);
	cm.gainItem(1102277,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 140#i1102277##k�i#t1102277#�j");
	cm.dispose();
    } else if (lol == 68) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102198,-1);
	cm.gainItem(1102278,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 140#i1102278##k�i#t1102278#�j");
	cm.dispose();
    } else if (lol == 69) {
	cm.gainItem(4001126,-Item[lol]);
	cm.gainItem(1102198,-1);
	cm.gainItem(1102279,1);
	cm.sendOk("#e���}�i I �j�D���椺���S������#rL v 140#i1102279##k�i#t1102279#�j");
	cm.dispose();


    }
}