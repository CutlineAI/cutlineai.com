# FAQ

Short answers to the questions editors ask most about Cutline.


## About Cutline

### What does Cutline do?

You type a request in the Claude desktop app, like "cut out 1:20 to 1:45 and close the gap", "duck the music under A1" or "fade the title in over 10 frames". Cutline makes that change in the Premiere Pro or After Effects project you have open, then tells you what changed. For more examples, see [Commands](commands.html).

### Does Cutline replace me?

No. Cutline is an assistant editor. It does the clicking: cuts, ripples, markers, keyframes, renames and exports. You decide what the edit should be and whether it's right. It reports every change, so you stay in control.

### Who makes Cutline?

Cutline is independent. It isn't made by Adobe or Anthropic. It works with Premiere Pro and After Effects, which are made by Adobe, and with the Claude desktop app, which is made by Anthropic.

### What are add-ons?

Extra tools you switch on in the panel's **Add-ons** tab. They're off until you add them.

- **Context** reads your briefs and house rules before it edits.
- **Colour** measures, matches and grades the way a colourist does, in Premiere Pro. In the beta now, coming soon to the public release.
- **Review** lets you leave timestamped notes that Cutline then actions, in Premiere Pro. In the beta now, coming soon to the public release.

### Can it grade?

With the Colour add-on, yes, within limits. It measures skin and greys, balances, matches cameras to each other or to a grade you saved, and sets a shared look. It can't set Premiere's Color Mode controls, curves, colour wheels or HSL secondaries, or load LUT files, because Adobe doesn't let any script do that.

### What can it do with YouTube?

It can search YouTube, read a video's details and transcript, and watch a video to describe its shots, pacing and cuts. Only put footage in your edit when you have the right to use it.

## Apps and setup

### Which AI apps does it work with?

The Claude desktop app. ChatGPT support is coming soon.

### Which Claude plan do I need?

Cutline runs on your own Claude account, so the AI usage comes from your plan. Editing can use a lot of it, so a paid plan is best: Pro, or Max if you edit a lot.

### Which versions of Premiere Pro and After Effects does it work with?

2022 or newer, including Adobe's Beta versions. The Colour add-on needs Premiere Pro 25.6 or newer.

### Does it work on Windows?

Not yet. Cutline is Mac only today. Windows is coming soon.

### Do I need to code, use Terminal or turn on Adobe debug mode?

No. You double-click the installer, restart your Adobe app, and open the panel from **Window > Extensions > Cutline Beta**. See [Quick start](quick-start.html).

### Do I need a licence key?

Not during the beta. From launch, Cutline will use a licence key that works on one computer at a time. See [Licence and devices](licence-and-devices.html).

## Your work and your data

### Can I undo what it does?

Yes. Say "undo that", or click **Undo last change** at the bottom of the panel. Either one takes back Cutline's whole last change in one go, even if it was dozens of cuts. Your own Cmd+Z works too.

In After Effects, each Cutline change is exactly one undo step. In Premiere Pro, one change can be several History steps, which is why the one-click undo exists. Before big batch edits in Premiere Pro, Cutline also keeps a backup copy of the sequence.

### Will it save over my project?

No. Cutline only saves when you ask it to.

### Does it change my footage files?

No. It edits your project and leaves your media files on disk alone. Deleting items from a project never deletes the files.

### Is my footage uploaded?

No. Cutline never uploads your media files. The connection between Claude and Premiere Pro or After Effects stays on your computer.

What does go to Anthropic, because that's where Claude runs: what you type, the results of each step (clip names, times, track layouts, file names and paths), and any frames the AI looks at to check what's on screen. Anthropic handles this under its own terms for your Claude account.

### Does Cutline collect analytics?

No. Cutline has no usage tracking.

### Does it work offline?

Not really. Claude runs online, so it needs the internet, and so do Cutline's updates.

### What happens to my projects if I stop using Cutline?

Nothing. Everything Cutline did is ordinary Premiere Pro and After Effects edits, so your projects open and work as before.

## Updates and the future

### How do updates work?

Automatically, in the background. Updates are signed, so only genuine Cutline updates install. The panel reloads itself when one arrives.

### What if Adobe changes its plugin system?

Cutline's panel uses Adobe's CEP extension system. Adobe is gradually moving its apps to a newer system called UXP. The Colour add-on already uses UXP.

## Help

### Where do I get help?

Start with [Troubleshooting](troubleshooting.html). If you're still stuck, email [hello@cutlineai.com](mailto:hello@cutlineai.com) with your app version, what you typed and what happened.
