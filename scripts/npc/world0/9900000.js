/*
	Winter�V�u �v���v
*/

var status = 0;
var beauty = 0;
var haircolor = Array();
var skin = Array(0, 1, 2, 3, 4);
var hair = Array(30000, 30020, 30030, 30040, 30050, 30060, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30440, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30700, 30710, 30720);
var hhair = Array(31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31410, 31420, 31420, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31570, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740);
var hairnew = Array();
var face = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023);
var fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21016, 21017, 21018, 21019, 21020, 21021, 21022);
var facenew = Array();
var colors = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(cm.getPlayer().getGender() == 0) {
				cm.sendSimple("�K! �ڬO#r�k��#k�ܧήv! �A�n�������?\r\n#L0#�ֽ�#l\r\n#L1#�Y�v(�k)#l\r\n#L2#�v��(�k)#l\r\n#L3#����(�k)#l\r\n#L4#����(�k)#l");
			} else {
				cm.sendSimple("�K! �ڬO#r�k��#k�ܧήv! �A�n�������?\r\n#L5#�ֽ�#l\r\n#L6#�Y�v(�k)#l\r\n#L7#�v��(�k)#l\r\n#L8#����(�k)#l\r\n#L9#����(�k)#l");
			
		}

		} else if (status == 1) {
			if (selection == 0) {
				beauty = 1;
				cm.sendStyle("��@�ӧa!", skin);
			} else if (selection == 1) {
				beauty = 2;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getPlayer().getHair()
 % 10));
				}
				cm.sendStyle("��@�ӧa!", hairnew);
			} else if (selection == 2) {
				beauty = 3;
				haircolor = Array();
				var current = parseInt(cm.getPlayer().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("��@�ӧa!", haircolor);
			} else if (selection == 3) {
				beauty = 4;
				facenew = Array();
				for(var i = 0; i < face.length; i++) {
					facenew.push(face[i] + cm.getPlayer().getFace()
 % 1000 - (cm.getPlayer().getFace()
 % 100));
				}
				cm.sendStyle("��@�ӧa!", facenew);
			} else if (selection == 4) {
				beauty = 5;
				var current = cm.getPlayer().getFace()
 % 100 + 20000;
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendStyle("��@�ӧa!", colors);

//-----------------���k��-------���k��--------------------------------------
			} else if (selection == 5) {
				beauty = 6;
				cm.sendStyle("��ܧA���w��?", skin);
			} else if (selection == 6) {
				beauty = 7;
				hairnew = Array();
				for(var i = 0; i < hhair.length; i++) {
					hairnew.push(hhair[i] + parseInt(cm.getPlayer().getHair()
 % 10));
				}
				cm.sendStyle("��ܧA���w��?", hairnew);
			} else if (selection == 7) {
				beauty = 8;
				haircolor = Array();
				var current = parseInt(cm.getPlayer().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("��ܧA���w��?", haircolor);
			} else if (selection == 8) {
				beauty = 9;
				facenew = Array();
				for(var i = 0; i < fface.length; i++) {
					facenew.push(fface[i] + cm.getPlayer().getFace()
 % 1000 - (cm.getPlayer().getFace()
 % 100));
				}
				cm.sendStyle("��ܧA���w��?", facenew);
			} else if (selection == 9) {
				beauty = 10;
				var current = cm.getPlayer().getFace()
 % 100 + 21000;
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendStyle("��ܧA���w��?", colors);


			}
		}

		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				cm.setSkin(skin[selection]);
			}
			if (beauty == 2){
				cm.setHair(hairnew[selection]);
			}
			if (beauty == 3){
				cm.setHair(haircolor[selection]);
			}
			if (beauty == 4){
				cm.setFace(facenew[selection]);
			}
			if (beauty == 5){
				cm.setFace(colors[selection]);
			}
//-----------------���k��-------���k��--------------------------------------
			if (beauty == 6){
				cm.setSkin(skin[selection]);
			}
			if (beauty == 7){
				//hhair = cm.getAvailableStyles(hhair);
				cm.setHair(hairnew[selection]);
			}
			if (beauty == 8){
				cm.setHair(haircolor[selection]);
			}
			if (beauty == 9){
				cm.setFace(facenew[selection]);
			}
			if (beauty == 10){
				cm.setFace(colors[selection]);
			}

		}
	}
}
