# User guide

Everything Cutline does, how to ask for edits, and what to expect from Premiere Pro and After Effects.


Cutline is an assistant editor for Premiere Pro and After Effects. You type what you want in plain English in the Claude desktop app. Cutline makes the edit in your real, open project, reads the result back and tells you what changed.

It moves the clips and the keyframes. You keep the taste and the final say.

## How Cutline works

Cutline has three parts.

- **The Claude desktop app.** This is where you type. The AI runs on your own Claude account and plan.
- **The Cutline extension in Claude.** A small background program that Claude starts for you. It passes requests between Claude and your Adobe apps, and installs updates. It has no window and you never run it by hand.
- **The Cutline panel.** A panel inside Premiere Pro and After Effects. It carries out each edit in the app and shows you what's going on.

The connection between Claude and your Adobe apps stays on your computer. Cutline doesn't upload your media files. What you type, and the results of each step, go to Anthropic, because that's where Claude runs. Those results include clip names, times, track layouts, file names and any frames the AI looks at.

### A typical request

1. You type: "Cut out 1:20 to 1:45 and close the gap."
2. Cutline checks what you're looking at: the open sequence, the playhead and your selection.
3. It makes the change.
4. It reads the timeline back and tells you what changed, with any warnings. For example, a track that had a gap and might now be out of sync.

## Installing

You don't need Terminal, Adobe developer settings or a separate Adobe installer.

1. Make sure the Claude desktop app is installed and you're signed in.
2. Download Cutline.mcpb from your Gumroad receipt or library.
3. Double-click it. It adds Cutline to the Claude desktop app and installs the panel.
4. Quit Premiere Pro or After Effects if it's open, then open it again. Adobe apps only look for new panels when they start.
5. Choose **Window > Extensions > Cutline**.
6. Dock the panel somewhere out of the way and keep it open while you work. Docked is fine.

Cutline can only work in an app while its panel is open there. Do the last two steps in each app you want to use.

The first time Cutline uses a tool, Claude may ask for your permission. Allow it.

## Your licence

The first time you open the panel, tick **I agree to the licence agreement and the privacy policy**, then paste your licence key and click **Activate**, or click **Try it free for 7 days**. See [Licence and devices](licence-and-devices.html).

## The panel

The panel looks the same in Premiere Pro and After Effects. It rearranges itself for however you dock it: narrow, wide, or short under the timeline.

### The top bar

Along the top are the Cutline name, a status light, and the tab buttons on the right. Hover over a tab button to see its name.

### The status light

The small light next to the name tells you whether Cutline can work in this app. Hover over it to see what it says.

| Light | Says | What it means |
| --- | --- | --- |
| Green | **Ready** | Cutline can work in this app. |
| Grey | **Connecting…** | It's starting up. Give it a few seconds. |
| Green | **Updating…** | An update is installing. The panel reloads itself when it's done. |
| Hollow | **Not connected** | The panel can't reach Cutline in Claude. Usually Claude isn't open, or Cutline is switched off in it. |
| Hollow | **Claude closed** | The panel can see that Claude isn't running. Open it and the light turns green. |
| Hollow | **Not ready** | Connected, but the panel's scripts didn't load. Try **Reload panel** in Settings. |

Click the light to jump to the Home tab, which says what to do.

### The status bar

Along the bottom of the panel, on every tab:

- The sequence (Premiere Pro) or comp (After Effects) that's open, so you can see what Cutline is looking at.
- The playhead timecode. Click it to copy it.
- How many clips or layers are selected.
- **Undo last change**. Hover over it to see what it will undo. It's greyed out until Cutline has changed something.

### Tabs

From left to right: **Home**, a tab for each add-on you've switched on that has one, then **Add-ons**, **History** and **Settings**.

**Home**

Ideas for things to ask for, shown as tiles with a small picture of the edit.

- If the panel isn't connected, a box at the top says what to do, step by step.
- Search the ideas, or pick a category: **All**, **Cutting**, **Audio**, **Graphics**, **Output** or **Ask**.
- Click a tile to copy its request, then paste it into Claude.

The tiles are only examples. You can ask for any edit in your own words.

**Add-ons**

Lists the add-ons you can use. Nothing is on until you click **Add**, and **Remove** takes it away again. The panel reloads itself when you add or remove one. See the add-ons section below.

**History**

Everything Cutline looked at or changed in this app this session, newest first. Each line has the time and says **Edit**, **Look** or **Failed**. A failed one shows the error underneath.

**Settings**

- **About**: the connection status, your Premiere Pro or After Effects version, and the versions of Cutline's parts.
- **Updates**: when Cutline last checked, and a **Check for updates** button.
- **Troubleshooting**: **Reload panel**, and a button that opens Cutline's folder, where it keeps its logs and settings.

## Asking for edits well

Talk to Cutline the way you'd brief an assistant editor. Short and specific works better than long and vague.

### Say where

- **Times**: "between 1:20 and 1:45", "at 02:13:05", "the first 10 frames". Use the timecode you see on the timeline. If your sequence starts at 01:00:00:00, that's fine. Cutline allows for the start timecode.
- **Tracks**: "on V2", "A1 and A2", "every video track".
- **Clips and layers by name**: "the clip called Interview_B", "the Logo layer", "the lower third comp".
- **What you're looking at**: "this clip", "here", "the selected layers". Cutline reads your playhead, selection and open sequence or comp.

### Say what you want

Describe the result you want. You don't need to explain which buttons to click.

- "Remove every silence longer than a second on A1 and A2, but keep a little padding."
- "Duck the music on A3 under the dialogue on A1 by 12 dB."

A request like "do the thing with the audio" leaves Cutline guessing.

### Batch where it makes sense

One request can cover a lot. "Add a cross dissolve on every cut on V1 between 1:00 and 2:00", or "Rename the clips on V1 Interview 1, Interview 2 and so on." Cutline handles the whole list in one go.

### Look first when it matters

- "Show me the frame at the playhead."
- "What's on V2 at 1:10?"
- "List every red marker with its time."

Looking first is quick, and it means the edit lands where you meant.

### Duplicate before big changes

Before anything destructive, like removing dozens of sections or rebuilding a timeline, Cutline offers to duplicate the sequence first. Say yes. In Premiere Pro it also keeps a backup copy of the sequence before big batch edits.

### Read the report

After every change, Cutline tells you what it did and where. Read it. If it mentions a warning, like a track that had a gap or clips that might be out of sync, check that spot by eye.

### Use your house rules

With the Context add-on switched on, you can drop in a brief, a style guide or a note like "the client hates wipes", and Cutline follows it. See the Context add-on below.

### Save your AI allowance

Looking at frames, watching YouTube videos and reading very long timelines all use more of your Claude allowance. On a long sequence, ask about a range ("what's on the timeline between 10:00 and 12:00?") rather than the whole thing.

For more examples, see [Commands](commands.html).

## Undo

You have three ways back.

1. Say "undo that" in Claude.
2. Click **Undo last change** at the bottom of the panel.
3. Press Cmd+Z in the app as normal.

The first two take back Cutline's whole last change in one go, even if it was dozens of cuts, and tell you what they undid.

### Undo in Premiere Pro

Premiere's scripting can't group changes, so one Cutline change can be several steps in Premiere's History panel. That's why "undo that" and **Undo last change** exist. They step Premiere back until the timeline matches how it was just before Cutline's change, and tell you if they couldn't.

For big batch edits, like removing all the silences, Cutline first saves a copy of the sequence into a backups bin in your project. Undo swaps the original back in and keeps Cutline's version in that bin, so you can even undo the undo.

If you press Cmd+Z yourself after a Cutline change, you may need to press it a few times. Check the timeline as you go.

### Undo in After Effects

Each Cutline change is exactly one undo step. One Cmd+Z takes back the whole change, however many layers it touched.

### Good to know

- Cutline only remembers its own changes since the app was last opened. After a restart, use the app's own undo or the backups bin.
- Cutline never saves your project unless you ask it to.

## Add-ons

Add-ons give Cutline extra tools. They're off until you switch them on.

To switch one on, open the panel's **Add-ons** tab and click **Add**. The panel reloads, and the add-on's tab appears if it has one. Claude picks up the new tools straight away. If it doesn't seem to, start a new conversation in Claude.

To switch one off, click **Remove** in the same place.

### Context

Briefs, handbooks, scripts and notes that Cutline reads before it edits.

- Open the **Context** tab. Drop in a file or click to choose one: PDF, Word (.docx), RTF, HTML, text, Markdown, CSV, subtitle files (.srt, .vtt) or reference images (PNG, JPEG, GIF, WebP).
- You can also write a note, or paste a YouTube link to keep a video's details and transcript as a reference.
- Choose who each item is for. **This project** means the project you have open, so save the project first. **All projects** means everything from now on. **Next request only** is read once, then moved to Used, and **Use again** brings it back.
- Cutline reads your items before it edits and tells you which ones it's following. Each item has a button that shows exactly what Claude reads.
- Pause or delete items at any time.
- You can also just say "remember that the client hates wipes", and Cutline saves it as a note.

### Colour

For Premiere Pro. Coming soon. It grades the way a colourist works: measure, balance, match, then one shared look.

- **Look** measures a frame of each camera like scopes: black point, mids, white point, clipping, how neutral the greys are, and skin on the face against the skin line.
- **Balance** brings the main camera's skin to a natural level and neutralises the greys, with small moves.
- **Match** brings another camera, or a new shoot, to a reference. That can be another track in this sequence or a grade you saved earlier.
- **Save a reference**: once you're happy with a grade, however you made it, save it by name and match future shoots to it.
- **Grade** sets a balance layer per shot and one look layer shared across matched shots, so they stay matched. It can also use Premiere's Color And Contrast zones, Film Color and a soft oval window around the subject.
- **Read** and **Clear** show what's on a clip's grade, or take Cutline's grade off so you can start again.

Every Colour change is one undo step. It never touches the clip's own Lumetri effect, which often holds your camera's conversion LUT.

Colour uses Premiere's newer scripting through a small helper called the Companion, which Cutline installs for you. Restart Premiere Pro once after the first install. Colour needs Premiere Pro 25.6 or newer.

Adobe doesn't let any script set Premiere's Color Mode controls, Lumetri curves, colour wheels or HSL Secondary keys, or load LUT files. Cutline tells you if you ask for one of these.

Skin decides the grade. If something looks too dark or too colourful to you, say so. Your eye wins over the numbers.

### Review

For Premiere Pro. Coming soon. A review tab for your revision notes.

- Open the **Review** tab with a sequence open. Choose **Linked to timeline**, where the player follows Premiere's playhead, or **Independent**, where you play and scrub here without moving Premiere.
- Click **Render preview** for smooth playback. It renders through Adobe Media Encoder while you keep editing. Without a preview, you see Premiere's frame.
- Type a note at any moment. It's stamped with the time.
- You can show open notes as markers on the timeline.
- Click the button that copies a request for Claude, then paste it into Claude. Cutline works through the open notes in time order. It looks at each frame first, makes the change and marks the note done with a one-line reply saying what it changed. Notes it couldn't do stay open with the reason.
- Notes stay on your computer.

## YouTube

These work without Premiere Pro or After Effects open.

- **Read a video.** Share a YouTube link and ask what it says. Cutline gets the title, channel, licence, chapters and the timestamped transcript.
- **Watch a video.** Cutline looks at frames from the video to describe shots, pacing and on-screen text, list cut times and average shot length, or look closely at specific moments.
- **Search.** Find references, with filters for length, upload date, HD or 4K, subtitles and Creative Commons only.

The first time Cutline watches a video, it sets up its video tools. That takes about a minute, and it's quick after that.

## Limits and known issues

Adobe's scripting can't do everything. When Cutline can't do something, it tells you and explains how to do it by hand.

### General

- **The panel must be open** in an app for Cutline to work there. Docked is fine.
- **Claude must be running.** The panel only connects while it is.
- **Undo in Premiere Pro** can be several History steps per Cutline change. See the undo section above.
- **Undo only covers this session.** Cutline remembers its changes since the app was last opened.
- **Very long results get cut short.** On a long timeline, ask about a time range or fewer tracks.
- **Check unusual timecode.** Sequences with a non-zero start timecode, and 29.97 or 59.94 drop-frame sequences, are supported. Check cuts by eye on real projects. Every cut is read back and reported, so a miss shows up in the report.

### Premiere Pro

- Duplicating clips lays the media down again, so effects, keyframes and speed changes aren't copied. Ask Cutline to copy the effects across afterwards.
- Moving a clip to another track, replacing a clip or un-nesting doesn't carry effects across. Cutline says so in its report.
- Adjustment layers: Cutline reuses one from your project. Scripts can't create them, so if there isn't one, Cutline tells you how to make one.
- Captions: Cutline can make a caption track from an imported caption file, but it can't read the caption text back. Check it in the timeline.
- Some Premiere versions don't let scripts remove effects, set poster frames or detach proxies. Cutline tells you, and you do that step by hand.
- Premiere may refuse to change some settings on an existing sequence, often the frame rate. The fix is a new sequence, and Cutline can make one.
- Scripts can switch Scale to Frame Size on, but they can't switch it off.
- Scene Edit Detection and Auto Reframe keep Premiere busy until they finish. Long clips take minutes.
- EDL import may show Premiere's own settings dialog.
- Export progress is only tracked for exports queued since Premiere or the panel last started.

### After Effects

- Rendering in After Effects keeps it busy until it's done. For long renders, Cutline can send the queue to Adobe Media Encoder instead.
- To delete layers, name them. Cutline won't delete "whatever's selected", and it won't delete locked layers.
- On After Effects versions before 2023, setting a track matte moves the matte layer directly above.

### Adobe's panel system

Cutline's panel uses Adobe's CEP extension system. Adobe is gradually moving its apps to a newer system called UXP.

## Updates

New tools and fixes install themselves in the background while Claude is open. The panel reloads on its own when an update arrives.

- To check now, click **Check for updates** in the panel's Settings tab, or ask Claude to "check for Cutline updates".
- Updates are signed. Cutline only installs an update that carries Cutline's signature and matches its checksum.
- Updates wait until Cutline isn't in the middle of an edit.
- Now and then a bigger update needs a new installer. Cutline tells you when that happens.
- Cutline's settings in Claude include an option to install tool updates automatically. Leave it on.

## Uninstalling

1. In Claude, go to **Settings > Extensions**, find Cutline and uninstall it.
2. If you'd also like the panel and Cutline's saved data removed from your Mac, email [hello@cutlineai.com](mailto:hello@cutlineai.com) and we'll help.

Cutline keeps its settings, logs, Context items, Review notes and saved Colour references in its own folder. The button under Troubleshooting in the panel's Settings tab shows you where.

Uninstalling never touches your projects, sequences or media. Anything Cutline already did in a project stays as normal Premiere Pro or After Effects edits.

## Getting help

- [Troubleshooting](troubleshooting.html) covers the common problems.
- Email [hello@cutlineai.com](mailto:hello@cutlineai.com) with your Mac's macOS version, your Premiere Pro or After Effects version, what you typed and what happened.
