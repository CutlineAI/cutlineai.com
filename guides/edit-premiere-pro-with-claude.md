# How to edit in Premiere Pro with Claude

Use Cutline to edit your open Premiere Pro timeline by typing plain English into the Claude desktop app. Setup, example requests and limits.

The most direct way to edit in Premiere Pro with Claude today is Cutline, a plugin that connects the Claude desktop app to Premiere Pro on a Mac. You type a request in plain English, such as "cut out 1:20 to 1:45 and close the gap", and Cutline makes that edit in the project you have open, reads the timeline back and tells you what changed. As of October 2026, Cutline is available for Mac with a 7-day free trial, and it also works with After Effects.

Cutline is independent software. It isn't made by Adobe or Anthropic.

## What Claude can do in Premiere Pro on its own

On its own, Claude can't touch your timeline. It can explain a technique or talk through an edit, and it needs a connection to Premiere Pro to make the change itself.

Cutline is that connection. It gives Claude more than 160 editing tools across Premiere Pro and After Effects: cuts, trims, ripples, markers, audio levels, effects, keyframes, sequences, bins and exports. Every change lands as ordinary clips, keyframes and markers in your project, so nothing depends on Cutline afterwards.

## How it works

Cutline has three parts.

- **The Claude desktop app.** This is where you type. The AI runs on your own Claude account.
- **The Cutline extension in Claude.** Cutline is an MCP server. MCP, the Model Context Protocol, is the open standard Claude uses to connect to tools. Cutline installs as a Claude desktop extension and runs in the background. For more, see [what MCP means for video editors](/guides/mcp-for-video-editors.html).
- **The Cutline panel.** A panel that docks inside Premiere Pro. It carries out each edit through Adobe's own scripting (ExtendScript, and UXP where Premiere's newer scripting is needed). It shows the connection status, idea tiles you can copy, the open sequence, the playhead timecode and an **Undo last change** button.

A typical request goes like this.

1. You type: "Cut out 1:20 to 1:45 and close the gap."
2. Cutline checks what you're looking at: the open sequence, the playhead and your selection.
3. It makes the change in Premiere Pro.
4. It reads the timeline back and reports what changed, such as the sequence length before and after, and any track that might now be out of sync.

The connection between Claude and Premiere Pro is a local one on your Mac. Your footage never leaves the computer.

## What you need

- A Mac. Cutline is tested on Apple silicon. Windows is coming soon.
- Premiere Pro, the current version from Creative Cloud. Cutline is tested on the latest versions (October 2026); tell us if your version gives you trouble.
- The Claude desktop app, signed in on a paid Claude plan. Pro suits most editors, and Max suits heavy daily use.
- A Cutline plan. Plans start with a 7-day free trial; cancel before day 7 and you pay nothing.

You don't need Terminal, Adobe debug mode or any coding. Adobe Media Encoder is only needed for queued exports. The full list is on the [requirements](/help/requirements.html) page.

## How to set it up

1. Get Cutline from [cutlineai.com](/), then download Cutline.mcpb from your Gumroad receipt or library.
2. Make sure the Claude desktop app is installed and you're signed in.
3. Download the installer and double-click it. It adds Cutline to the Claude desktop app and installs the panel.
4. Quit Premiere Pro if it's open, then open it again. Premiere only looks for new panels when it starts.
5. Choose **Window > Extensions > Cutline**.
6. Dock the panel and keep it open while you work.
7. Check the status light next to the Cutline name. When it's green and says **Ready** on hover, you can start.
8. In Claude, type `What have I got selected?` as a first check. The first time Cutline uses a tool, Claude may ask your permission. Allow it.

The [quick start](/help/quick-start.html) walks through your first three edits.

## Example requests

These are real requests you can type into Claude. Change the times, tracks and names to match your project.

| Request | What happens |
| --- | --- |
| `Cut out 1:20 to 1:45 and close the gap.` | Removes that range and ripples the rest of the sequence up. Reports the old and new length. |
| `Lift 3:00 to 3:08 but leave the gap.` | Removes the range and leaves a gap, so nothing after it moves. |
| `Razor V1 and A1 at 1:10, 1:32 and 2:05.` | Adds cuts at those three times on those two tracks, then checks each one. |
| `Trim 12 frames off the end of the clip at the playhead and ripple everything after it.` | Shortens that clip and pulls the following clips back by 12 frames. |
| `Roll the cut at the playhead 6 frames later.` | Moves the edit point between two clips without changing the sequence length. |
| `Find the silences on A1 and A2 and remove them.` | Detects pauses on each mic track and removes them in one batch, after backing up the sequence. |
| `Find pauses longer than a second on A1 and just mark them for now.` | Adds a marker at each long pause and leaves the edit alone, so you can decide. |
| `Close all the gaps, keeping picture and sound in sync.` | Closes the gaps on every track together and reports what moved. |
| `Duck the music on A3 by 12 dB under the dialogue on A1.` | Adds volume keyframes on the music wherever there's dialogue, with ramps in and out. |
| `Add a cross dissolve on every cut on V1 between 1:00 and 2:00.` | Puts a dissolve on each edit in that range. |
| `Add a slow push in on this clip, 100% to 110% over its length.` | Sets scale keyframes on the selected clip. |
| `Add a red marker at the playhead called "check audio".` | Adds a named sequence marker you can find later. |
| `Make a 9:16 version of this sequence.` | Runs Auto Reframe on a copy, so the original stays as it was. |
| `Which clips are offline?` | Lists offline media in the project without changing anything. |
| `Export an XML of this sequence for Resolve.` | Writes an XML file of the sequence for use in another app. |

There are many more on the [commands](/help/commands.html) page, and the [features](/features.html) page lists every tool.

## How to ask for edits well

Talk to Claude the way you'd brief an assistant editor. Short and specific works better than long and vague.

- **Say where.** Use timecode from your timeline, track names such as V2 or A1, or clip names. A sequence starting at 01:00:00:00 is fine.
- **Describe the result.** "Duck the music under the dialogue by 12 dB" is enough.
- **Look first when it matters.** "What's on V2 at 1:10?" takes a moment and means the edit lands where you meant.
- **Batch where it helps.** One request can cover a whole list: every cut in a range, every clip on a track.
- **Read the report.** If it mentions a warning, check that spot by eye.

For habits that keep you in charge of the edit, see [AI editing without losing control](/guides/ai-editing-without-losing-control.html).

## Undo and safety

You have three ways back.

1. Say "undo that" in Claude.
2. Click **Undo last change** at the bottom of the panel.
3. Press Cmd+Z in Premiere Pro as normal.

The first two take back Cutline's whole last change in one go, even if it was dozens of cuts. That matters because one scripted change in Premiere Pro can be several steps in the History panel.

Before big batch edits, such as removing all the silences, Cutline saves a backup copy of the sequence in your project. It offers to duplicate the sequence before anything destructive. It never saves your project unless you ask, and it refuses risky deletes, such as bins with clips in them, unless you confirm.

## What it can't do yet

Know these limits before you rely on it.

- **Mac only.** Windows is coming soon.
- **Claude only.** ChatGPT support is coming soon.
- **It needs a paid Claude plan.** The AI usage comes from your own plan. Looking at frames and reading very long timelines use more of it.
- **It's new.** Check each change, and keep your usual backups.
- **The AI can misunderstand.** A vague request can land on the wrong clip or the wrong range. Check each edit, especially on real client work.
- **Adobe's scripting has gaps.** Scripts can't create adjustment layers, so Cutline reuses one from your project. It can make a caption track from a caption file but can't read the caption text back. Some Premiere versions don't let scripts remove effects. When something isn't possible, Cutline says so and explains how to do it by hand.

Colour matching, working through review notes and an auto rough cut are coming soon.

## Is my footage private?

Cutline never uploads your media files. The link between Claude and Premiere Pro stays on your Mac.

Some information does go to your AI provider, because that's where Claude runs. That covers what you type, plus the clip names, times, track layouts and any frames Cutline reports back so Claude can check the edit. Anthropic handles that under the terms of your Claude account.

## Questions people ask

### Can Claude edit my Premiere Pro timeline?

Yes, with a plugin that connects Claude to Premiere Pro. Cutline does this: you type a request in the Claude desktop app and it makes the edit in your open sequence, then reports what changed.

### Do I need to know how to code or use Terminal?

No. You double-click an installer, restart Premiere Pro and open the panel from Window > Extensions > Cutline. Everything else happens in the Claude app.

### Does it work with ChatGPT?

Not yet. As of October 2026 Cutline works with the Claude desktop app, and ChatGPT support is coming soon.

### Is my footage uploaded?

No. Your media files stay on your Mac. What you type and the clip names, times and frames Cutline reports go to your AI provider under its terms.

### Can I undo what the AI did?

Yes. Say "undo that" in Claude or click Undo last change in the panel, and Cutline takes back its whole last change in one go. Cutline also backs up the sequence before big batch edits.

### Does it work on Windows?

Not yet. Cutline runs on Mac only today, and is tested on Apple silicon. Windows support is coming soon.

### Which versions of Premiere Pro does it support?

The current version of Premiere Pro from Creative Cloud. Cutline is tested on the latest versions (October 2026). Some features depend on what Adobe's scripting allows in your version, and Cutline tells you when something isn't possible.

### Will it replace my editor or assistant editor?

No. Cutline does the clicking: cuts, ripples, markers, keyframes and exports. You decide what the edit should be and whether it's right.

## Related guides

- [How to use Claude in After Effects](/guides/after-effects-with-claude.html)
- [What MCP means for video editors](/guides/mcp-for-video-editors.html)
- [AI editing without losing control](/guides/ai-editing-without-losing-control.html)

To try Cutline before the public launch, email [hello@cutlineai.com](mailto:hello@cutlineai.com).
