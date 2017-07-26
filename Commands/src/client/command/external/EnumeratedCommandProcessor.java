package client.command.external;

import client.MapleCharacter;
import client.MapleClient;

public class EnumeratedCommandProcessor extends AbstractCommandProcessor {
	@Override
	public void execute(MapleClient c, String[] sub, char heading) {
		MapleCharacter chr = c.getPlayer();
		if (heading == '@' || heading == '/') {
			boolean commandExecuted = true;
			switch (chr.gmLevel()) {
				case 5:
				case 4:
				case 3: 
				case 2:
				case 1:
					//commandExecuted = DonorCommands.execute(c, sub, heading);
                                    commandExecuted = PlayerCommands.execute(c, sub, heading);
					if (commandExecuted) break;
				case 0:
                                    if (chr.getOfficial() == 1) {
					commandExecuted = PlayerCommands.execute(c, sub, heading);
                                    } else {
                                        chr.yellowMessage("你不是正式的成員，你有可能沒有點擊 莉琳 這個Npc哦.");
                                        break;
                                    }
					if (commandExecuted) break;
				default:
					EnumeratedCommands.execute(c, sub, heading);
					break;
			}
		} else {
			boolean commandExecuted = false;
			switch (chr.gmLevel()) {
				case 5:
					//commandExecuted = AdminCommands.execute(c, sub, heading);
                                    commandExecuted = PlayerCommands.execute(c, sub, heading);
					if (commandExecuted) break;
				case 4:
					//commandExecuted = DeveloperCommands.execute(c, sub, heading);
                                    commandExecuted = PlayerCommands.execute(c, sub, heading);
					if (commandExecuted) break;
				case 3:
					//commandExecuted = GMCommands.execute(c, sub, heading);
                                    commandExecuted = PlayerCommands.execute(c, sub, heading);
					if (commandExecuted) break;
				case 2:
					//commandExecuted = SupportCommands.execute(c, sub, heading);
                                    commandExecuted = PlayerCommands.execute(c, sub, heading);
					if (commandExecuted) break;
				default:
					EnumeratedCommands.execute(c, sub, heading);
					break;
			}
		}
	}

}