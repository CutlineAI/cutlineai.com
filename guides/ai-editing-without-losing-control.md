# AI editing without losing control

How to use AI in Premiere Pro and After Effects while you keep the creative decisions: practical habits, and how Cutline is built for them.

The way to use AI in an edit without losing control is to keep the decisions and hand off the clicks. You decide what the cut should be, ask for it in specific terms, and check each change before moving on. Cutline is built for this: you type requests into the Claude desktop app, it makes them as ordinary edits in your open Premiere Pro or After Effects project, reports what changed, and lets you undo the whole change in one click.

## Three ways to work

Most editors now have three broad options.

| Approach | What you get | What it costs you |
| --- | --- | --- |
| Doing it by hand | Every decision and every click is yours. | Time on repetitive work: razor cuts, silences, renames, keyframes, exports. |
| One-click auto-edit apps | A finished cut from your footage, fast. | The decisions are made for you, results tend to look alike, and the output is often a new file or project to fix up. |
| An assistant you direct | You decide the edit and it does the clicks, in your own project. | You still need to say clearly what you want, and check the result. |

Working by hand is how most good editing gets done, and it stays the right choice for a lot of moments. Auto-edit apps can be the right call for quick social cutdowns where speed matters most. The middle option suits editors who want to keep their own style and judgement while spending less time on the mechanical parts.

## What staying in control means

Control comes down to four things.

- **You make the creative calls.** What stays, what goes, where the cut lands, how the music sits.
- **You can see what changed.** Every change is visible and explained, with nothing hidden in a new file.
- **You can take it back.** Any change can be undone cleanly, even a big one.
- **The result is yours to finish.** The edit is made of ordinary clips, keyframes and markers you can adjust by hand.

## Practical habits

These habits work with any AI editing assistant. The examples are Cutline requests from the [commands](/help/commands.html) page.

1. **Decide first, then delegate.** Know the edit you want before you ask. "Cut out 1:20 to 1:45 and close the gap" is a decision. "Make this tighter" hands the decision over.
2. **Be specific about where.** Use timecode from your timeline, track names such as V2 or A1, and clip or layer names. Vague requests are where mistakes come from.
3. **Look before you change.** Ask "What's on V2 at 1:10?" or "Show me the frame at the playhead" first. It takes seconds and means the edit lands where you meant.
4. **Mark before you cut when you're unsure.** "Find pauses longer than a second on A1 and just mark them for now" lets you review every one before anything is removed.
5. **Keep steps small.** One clear change per request is easier to check and easier to undo than a long list of instructions.
6. **Duplicate before big changes.** "Duplicate this sequence and call it 'v2 client notes'" gives you a clean fallback before anything destructive.
7. **Read the report.** After each change, read what it says it did. If there's a warning, such as a track that might be out of sync, check that spot by eye.
8. **Undo without hesitating.** If a change isn't right, take it back and ask again more precisely. It's quicker than fixing a wrong edit by hand.
9. **Save on your own terms.** Save when you're happy, the same as always.
10. **Write down your house rules.** If a client hates wipes, say so once. Cutline's Context add-on keeps briefs and notes like this and follows them on later requests.

## Where AI gets it wrong

AI assistants misunderstand sometimes. Knowing the common causes helps you spot them.

- **Ambiguous references.** "This clip" when nothing is selected, or "the interview" when there are three.
- **Timecode surprises.** Sequences with a start timecode other than zero, or drop-frame rates such as 29.97, need care. Cutline allows for both, but check cuts by eye on real projects.
- **Very long timelines.** Reading a whole feature-length sequence is a lot of data. Ask about a time range instead.
- **Things Adobe's scripting can't do.** Some changes aren't possible by script in some versions. A good assistant says so and tells you how to do it by hand.

The answer is the one you'd use with any assistant editor. Check the work.

## How Cutline is built for this

Cutline is a plugin that connects the Claude desktop app to Premiere Pro and After Effects on a Mac. These are the parts of it that exist to keep you in charge.

- **It edits your real project.** Every change lands as ordinary clips, keyframes and markers in the sequence or comp you have open. Nothing depends on Cutline afterwards.
- **It reads back and reports.** After every change it reads the result from the app and tells you what moved, with any warnings.
- **One-click undo.** Say "undo that" or click **Undo last change** in the panel, and Cutline takes back its whole last change, even dozens of cuts. In After Effects each change is one undo step.
- **Backups before batch edits.** In Premiere Pro, Cutline saves a copy of the sequence into your project before big batch edits, such as removing every silence.
- **It offers to duplicate first.** Before anything destructive, Cutline offers to duplicate the sequence.
- **It never saves unless you ask.**
- **It asks before risky deletes.** Bins with clips in them, media used in sequences and locked layers are left alone unless you confirm.
- **A history you can read.** The panel's History tab lists everything Cutline looked at or changed this session, marked Edit, Look or Failed.
- **Your media stays local.** Cutline talks to Premiere Pro and After Effects over a local connection on your Mac. What you type, plus the clip names, times and frames it reports, goes to your AI provider under that provider's terms.

Cutline is independent. It isn't made by Adobe or Anthropic. As of October 2026 it's available for Mac, with a 7-day free trial, and needs the Claude desktop app on a paid Claude plan. See the [features](/features.html) page for everything it does.

## Questions people ask

### Will AI editing make my videos look the same as everyone else's?

It depends on who makes the decisions. One-click tools apply the same logic to everyone's footage. With an assistant you direct, the cut follows your choices, so it looks like your work.

### Can I undo what the AI did?

Yes, with Cutline. Say "undo that" in Claude or click Undo last change in the panel, and it takes back its whole last change in one go. In Premiere Pro it also backs up the sequence before big batch edits.

### Does the AI save over my project?

Cutline never saves your project unless you ask it to. You save when you're happy, as usual.

### How do I check what the AI changed?

Read the report Cutline gives after every change, look at any spot it warns about, and check the History tab in the panel. You can also ask Claude to show you a frame.

### Is AI editing cheating?

Editors have always used tools to save time on mechanical work. Using an assistant for cuts, markers and keyframes is the same idea, and the creative decisions stay with you.

### Is my footage uploaded?

No. Cutline keeps your media on your Mac. Your AI provider receives what you type and what Cutline reports, such as clip names, times and frames.

## Related guides

- [How to edit in Premiere Pro with Claude](/guides/edit-premiere-pro-with-claude.html)
- [How to use Claude in After Effects](/guides/after-effects-with-claude.html)
- [What MCP means for video editors](/guides/mcp-for-video-editors.html)

To try Cutline before the public launch, email [hello@cutlineai.com](mailto:hello@cutlineai.com).
