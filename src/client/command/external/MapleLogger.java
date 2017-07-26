package client.command.external;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import constants.ParanoiaConstants;

public class MapleLogger {
	public static final String ACCOUNT_STUCK = "accountstuck.log";
	public static final String EXCEPTION_CAUGHT = "exceptions.log";
	public static final String PARANOIA_CHAT = "chat.log";
	public static final String PARANOIA_COMMAND = "commands.log";
	public static final String PARANOIA_CONSOLE = "console.log";
	public static final String PARANOIA_BLACKLIST = "blacklist/";

	// private static final SimpleDateFormat sdf = new
	// SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

	public static void print(final String file, final Throwable t) {
		FileOutputStream out = null;
		try {
			out = new FileOutputStream(file, true);
			out.write(getString(t).getBytes());
			out.write("\n---------------------------------\n".getBytes());
		} catch (IOException ess) {
		} finally {
			try {
				if (out != null) {
					out.close();
				}
			} catch (IOException ignore) {
			}
		}
	}

	public static void print(final String file, final String s) {
		FileOutputStream out = null;
		try {
			out = new FileOutputStream(file, true);
			out.write(s.getBytes());
			out.write("\n---------------------------------\n".getBytes());
		} catch (IOException ess) {
		} finally {
			try {
				if (out != null) {
					out.close();
				}
			} catch (IOException ignore) {
			}
		}
	}
	
	public static void printFormatted(final String file, final String s) {
		MapleLogger.printFormatted(file, s, true);
	}
	
	public static void printFormatted(final String file, final String s, final boolean newLine) {
		FileOutputStream out = null;
		try {
			out = new FileOutputStream(file, true);
			if (ParanoiaConstants.USE_TIMESTAMPS) {
				out.write(("[" + Output.now() + "] ").getBytes());
			}
			out.write(s.getBytes());
			if (newLine) {
				out.write(("\n").getBytes());
			}
		} catch (IOException ess) {
		} finally {
			try {
				if (out != null) {
					out.close();
				}
			} catch (IOException ignore) {
			}
		}
	}
	
	public static void clearLog(final String file) { 
		FileOutputStream out = null;
		try {
			out = new FileOutputStream(file);
			out.write(new String().getBytes());
		} catch (IOException ess) {
		} finally {
			try {
				if (out != null) {
					out.close();
				}
			} catch (IOException ignore) {
			}
		}
	}

	private static String getString(final Throwable e) {
		String retValue = null;
		StringWriter sw = null;
		PrintWriter pw = null;
		try {
			sw = new StringWriter();
			pw = new PrintWriter(sw);
			e.printStackTrace(pw);
			retValue = sw.toString();
		} finally {
			try {
				if (pw != null) {
					pw.close();
				}
				if (sw != null) {
					sw.close();
				}
			} catch (IOException ignore) {
			}
		}
		return retValue;
	}
}
