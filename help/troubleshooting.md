# Troubleshooting

Find your symptom and try the fix, from a panel that won't connect to an edit in the wrong place.


Find your symptom and try the fix. None of these need Terminal or editing settings files.

If you're still stuck, email [hello@cutlineai.com](mailto:hello@cutlineai.com) with your Mac's macOS version, your Premiere Pro or After Effects version, what you typed and what happened. A screenshot of the panel's **Settings** tab (the last button at the top right) helps a lot.

## The panel

### Cutline Beta isn't under Window > Extensions

1. Open the Claude desktop app. Claude starts Cutline, and that's what puts the panel into Premiere Pro and After Effects.
2. Quit Claude completely with Cmd+Q, then open it again.
3. Quit Premiere Pro or After Effects and open it again. Adobe apps only look for new panels when they start.
4. If your Adobe app has a **Window > Extensions (Legacy)** menu, look for Cutline Beta there.

### The status light says Not connected

The light next to the name is hollow, and hovering over it says Not connected. The panel can't reach Cutline in Claude.

1. Check the Claude desktop app is open. The panel only connects while it's running, and the light turns green within a few seconds of opening it.
2. In Claude, go to **Settings > Extensions**. Cutline Beta should be listed and switched on. If it isn't listed, double-click the installer again.
3. In the panel, go to **Settings** and click **Reload panel**.
4. Still red? Quit Claude and the Adobe app completely. Open Claude first, wait a few seconds, then open the Adobe app.

### The status light says Claude closed

The panel can see that Claude isn't running. Open the Claude desktop app and the light turns green.

### The Home tab says Claude is open but Cutline isn't running

Cutline isn't switched on in Claude. In Claude, go to **Settings > Extensions** and switch Cutline Beta on. If it isn't listed, double-click the installer again.

### The status light says Not ready

The panel is connected, but its scripts didn't load in the Adobe app. In the panel, go to **Settings** and click **Reload panel**. If it keeps happening, double-click the installer again and restart the Adobe app.

### A tab failed to load

In the panel, go to **Settings** and click **Reload panel**. If an add-on's tab keeps failing, remove that add-on in the **Add-ons** tab, then add it again.

### The panel is blank or frozen

Close the panel and open it again from **Window > Extensions > Cutline Beta**. If that doesn't help, restart the Adobe app.

## Claude

### Claude doesn't seem to know about Cutline

1. In Claude, go to **Settings > Extensions** and check Cutline Beta is installed and switched on.
2. Start a new conversation. Tools added or changed during a conversation sometimes only show up in a new one.
3. Quit Claude completely and open it again.
4. Ask Claude "Is Cutline connected?" It checks which Adobe apps are connected and which version of Cutline's tools you have.

### Claude asks permission every time

That's Claude's own safety prompt. You can allow Cutline's tools so it stops asking.

### Claude says an app isn't connected

The Cutline Beta panel isn't open in that app, or the app is closed. Open **Window > Extensions > Cutline Beta** in that app and keep the panel open. Docked is fine.

## Editing

### An edit landed in the wrong place

1. Say "undo that", or click **Undo last change** at the bottom of the panel.
2. Be more specific. Give timecodes, track names like V1 or A2, and clip names.
3. Check the sequence's start timecode. Cutline allows for it, but on 29.97 or 59.94 drop-frame sequences, or ones with an unusual start timecode, check cuts by eye. Cutline reports every cut it makes, so you can see where each one went.
4. Ask it to look first: "show me the frame at the playhead" or "what's on V2 at 1:10?"

### Cmd+Z didn't undo the whole change in Premiere Pro

In Premiere Pro, one Cutline change can be several History steps. Say "undo that" or click **Undo last change** at the bottom of the panel instead. They take back the whole change in one go. For big batch edits, the original sequence is also kept in the backups bin in your project.

### Nothing to undo after restarting the app

Cutline only remembers its changes since the app was last opened. Use the app's own undo history, or the backups bin.

### Effects disappeared after moving or replacing a clip

When a clip moves to another track, or is replaced, duplicated or un-nested, Premiere's scripting lays the media down again, so effects don't come with it. Cutline says so in its report. Ask it to copy the effects back from another clip, or undo.

### Cutline can't remove an effect, set a poster frame or detach a proxy

Some Premiere Pro versions don't let scripts do these. Do that step by hand in Effect Controls or the Project panel.

### The answer was cut off on a long timeline

Very long results are shortened. Ask about a time range, like "between 10:00 and 12:00", or about specific tracks.

### Silence detection is slow the first time

The first time, Cutline downloads its own small copy of ffmpeg, about 5 MB, to listen to the audio. After that it's quick.

### Watching a YouTube video is slow the first time

The first time, Cutline sets up its video tools, which takes about a minute. After that it's quick.

### The Colour add-on says the Companion isn't connected

Colour uses Premiere's newer scripting through a small helper called the Companion, which Cutline installs for you.

1. Restart Premiere Pro once after installing or updating Cutline.
2. Check you're on Premiere Pro 25.6 or newer.
3. Ask Claude "Is the Companion connected?" Cutline reports what it sees and what to do.
4. If it says Premiere is blocking the Companion, email [hello@cutlineai.com](mailto:hello@cutlineai.com). This can happen when another Adobe plug-in installed through Creative Cloud changes Premiere's plug-in list.

### An export doesn't start or seems stuck

Queued exports go to Adobe Media Encoder, so check Media Encoder is installed. Ask "is the export done yet?" to see progress. Exports queued before Premiere Pro or the panel restarted aren't tracked, so check Media Encoder directly.

### After Effects is busy for a long time while rendering

Rendering inside After Effects keeps it busy until it finishes. For long renders, ask Cutline to render through Media Encoder instead.

## Updates

### The panel says Update problem

Usually a network blip. In the panel, go to **Settings** and click **Check for updates** to try again. If it keeps failing, check your internet connection or firewall. Your current version keeps working in the meantime.

### The panel says automatic updates are off

In Claude, go to **Settings > Extensions**, open Cutline Beta and switch automatic tool updates back on.

### An update says it needs a newer version of Cutline

Now and then a bigger update needs a new installer. Email [hello@cutlineai.com](mailto:hello@cutlineai.com) if you don't have it, and we'll send it to you.

### A new tool from an update isn't available in Claude

Start a new conversation in Claude.

## Still stuck?

1. In the panel's **Settings** tab, under Troubleshooting, click the button that opens Cutline's folder. The log file there records what Cutline did. Attach it to your email if we ask for it.
2. Email [hello@cutlineai.com](mailto:hello@cutlineai.com).
