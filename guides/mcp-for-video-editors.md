# What MCP means for video editors

A plain guide to the Model Context Protocol, how it lets Claude work inside Premiere Pro and After Effects, and what to look for in an editing tool.

MCP, the Model Context Protocol, is an open standard that lets an AI app such as Claude use tools on your computer. For video editors, it means Claude can make a change in Premiere Pro or After Effects for you, then check the result. Cutline is an MCP server for Premiere Pro and After Effects that you install as a Claude desktop extension on a Mac.

## MCP in plain words

An AI chat app on its own can only read and write text. It can explain how to ripple delete a range in Premiere Pro, but it can't do it.

MCP is a common way for an AI app to reach other software. A program called an MCP server offers the AI a list of tools, each with a name, a description and the details it needs. For example, a tool might be "remove this time range from the sequence and close the gap", needing a start time and an end time.

When you ask for something, the AI app picks the right tool, fills in the details from your request and asks the server to run it. The server does the work and sends back the result. The AI reads the result and tells you what happened, or picks the next tool.

Anthropic, the company behind Claude, published MCP as an open standard in late 2024. As of October 2026 it's widely used, and the Claude desktop app supports it through desktop extensions you can install with a double-click.

## Why it matters for editing

Before tools like this, using AI in an edit meant copying text between windows. You asked a question, read the answer and did the clicks yourself. Or you asked for a script, then worked out how to run it.

With an MCP server for your editing app, the AI can work on the project you have open.

- **It can see the edit.** It can read the open sequence, the playhead, your selection, clip names, markers and track layout.
- **It can make the change.** Cuts, trims, keyframes, markers, audio levels and exports happen in the real project.
- **It can check its work.** After each change it can read the timeline back, or look at a frame, and report what actually happened.

That last point is the one that makes it useful on real projects. An edit you can't check is an edit you can't trust.

## Three kinds of AI editing tools

Most AI editing tools fall into one of three groups.

- **General-purpose scripts.** The AI writes a script and runs it in your app. This can do almost anything, but it's hard to check what a script will do before it runs, and hard to undo cleanly afterwards.
- **One-click auto-edit apps.** You hand over your footage and get back a finished cut, usually as a new file or a new project. They're fast, and the decisions are made for you.
- **Assistants that work in your project.** You ask for specific edits and the tool makes them in the sequence or comp you have open, with ordinary clips and keyframes you can adjust by hand. Cutline is in this group.

Each suits a different job. The last group suits editors who want to keep making the creative decisions and hand off the clicking.

## What to look for in an editing integration

If you're choosing an AI tool for Premiere Pro or After Effects, these are the questions worth asking.

1. **Does it edit the real project?** Changes should land in the sequence or comp you have open, as ordinary clips, keyframes and markers. You shouldn't need to export, round-trip or rebuild anything.
2. **Does it report what changed?** A good tool reads the result back after every change and tells you, including warnings such as a track that might now be out of sync.
3. **Can you undo the whole change in one go?** In Premiere Pro, one scripted change can be many History steps. A tool should be able to take back its whole last change with one action.
4. **Does it back up before big edits?** Removing every silence in an interview is a big change. A copy of the sequence first is a sensible safety net.
5. **Does it save without asking?** It shouldn't. Saving should stay your decision.
6. **Does your media stay on your computer?** The connection to your editing app should be local, with nothing uploaded unless you choose to.
7. **Is it clear about what goes to the AI?** What you type and what the tool reports back, such as clip names, times and frames, goes to your AI provider. A good tool tells you this plainly.
8. **Is it honest about limits?** Adobe's scripting can't do everything. A tool should say when something isn't possible and explain how to do it by hand.
9. **Can you install it without Terminal?** Editors shouldn't need command-line tools or Adobe debug mode.

## Be careful what you install

An MCP server can do anything its tools allow, on your computer, in your apps. Install them only from sources you trust, check what each tool can change, and look at what Claude asks permission for the first time a tool runs.

## How Cutline uses MCP

Cutline answers the checklist above like this.

- It's an MCP server installed as a Claude desktop extension, with more than 160 tools across Premiere Pro and After Effects.
- A panel docks inside each Adobe app. It shows the connection status, idea tiles, the open sequence or comp, the playhead timecode and an **Undo last change** button. You open it from **Window > Extensions > Cutline**.
- The panel talks to Premiere Pro and After Effects through Adobe's own scripting, ExtendScript and UXP, over a local connection on your Mac. Your footage never leaves the computer.
- What you type, plus the clip names, times and frames Cutline reports, goes to your AI provider under that provider's terms.
- Every change lands as ordinary clips, keyframes and markers. "Undo last change" takes back the whole last change in one click.
- It never saves the project unless you ask, and backs up the sequence before big batch edits.

Cutline is independent. It isn't made by Adobe or Anthropic. It needs a Mac, Premiere Pro or After Effects, and the Claude desktop app on a paid Claude plan. As of October 2026 it's available with a 7-day free trial, and ChatGPT support and Windows are coming soon. The [features](/features.html) page lists every tool, and the [requirements](/help/requirements.html) page has the details.

## Questions people ask

### What is MCP in simple terms?

MCP, the Model Context Protocol, is an open standard that lets AI apps use tools in other software. An MCP server lists what it can do, and the AI app calls those tools when you ask for something.

### Is there an MCP server for Premiere Pro?

Yes. Cutline is an MCP server for Premiere Pro and After Effects that installs as a Claude desktop extension on a Mac. It's available as of October 2026, with a 7-day free trial.

### Do I need to be technical to use MCP?

No. With a desktop extension, you double-click an installer and the Claude app handles the rest. You don't need Terminal or any code.

### Is MCP safe to use with client projects?

It depends on the server you install. Choose one that keeps media on your computer, reports every change, offers a full undo and never saves without asking, and only install servers from sources you trust.

### Does MCP upload my footage?

That depends on the MCP server you install. Cutline keeps your media on your Mac and only sends what you type and what it reports, such as clip names, times and frames, to your AI provider.

### Does MCP work with ChatGPT?

MCP is an open standard that several AI apps support. As of October 2026 Cutline works with the Claude desktop app, and ChatGPT support is coming soon.

## Related guides

- [How to edit in Premiere Pro with Claude](/guides/edit-premiere-pro-with-claude.html)
- [How to use Claude in After Effects](/guides/after-effects-with-claude.html)
- [AI editing without losing control](/guides/ai-editing-without-losing-control.html)
