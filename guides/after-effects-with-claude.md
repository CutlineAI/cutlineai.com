# How to use Claude in After Effects

Use Cutline to change layers, keyframes, text and render settings in your open After Effects comp by typing requests into the Claude desktop app.

The most direct way to use Claude in After Effects today is Cutline, a plugin that connects the Claude desktop app to After Effects on a Mac. You type a request such as "stagger the selected layers by 5 frames" or "fade the title in over the first 10 frames", and Cutline makes the change in the comp you have open, then tells you what changed. As of October 2026 Cutline is available for Mac with a 7-day free trial, and it works with Premiere Pro too.

Cutline is independent software. It isn't made by Adobe or Anthropic.

## Where it helps in After Effects

After Effects work mixes design decisions with a lot of repetitive setup. Cutline takes the setup.

- **Layer housekeeping.** Add nulls and parent layers to them, stagger, trim, rename, relabel and precompose.
- **Keyframes and easing.** Set keyframes on any property, apply Easy Ease or hold keyframes, and set influence across many keyframes at once.
- **Text versions.** Change the copy, font, size and colour across text layers, or fill in Essential Properties on a template comp.
- **Expressions.** Add or clear expressions. If an expression throws an error, Cutline reports the error back.
- **Comps and renders.** Make new comps at the size and frame rate you name, add comps to the render queue with your template, and send the queue to Adobe Media Encoder.
- **Checking.** Render any frame and show it to Claude, so it can see what's on screen before or after a change.

You still design the motion. Cutline moves the values so you don't have to dig through the timeline for each one.

## What you need

- A Mac. Cutline is tested on Apple silicon. Windows is coming soon.
- After Effects, the current version from Creative Cloud. Cutline is tested on the latest versions (October 2026); tell us if your version gives you trouble.
- The Claude desktop app, signed in on a paid Claude plan.
- A Cutline plan. Plans start with a 7-day free trial; cancel before day 7 and you pay nothing.
- Adobe Media Encoder, only if you want Cutline to send renders there.

See [requirements](/help/requirements.html) for the details.

## How to set it up

1. Get Cutline from [cutlineai.com](/), then download Cutline.mcpb from your Gumroad receipt or library.
2. Download the installer and double-click it. It adds Cutline to the Claude desktop app as an extension and installs the panel.
3. Quit After Effects if it's open, then open it again.
4. Choose **Window > Extensions > Cutline**.
5. Dock the panel and keep it open while you work. The status light next to the Cutline name turns green and says **Ready** on hover when it's connected.
6. Open a comp, then type `What's in this comp?` into Claude. Allow the tool if Claude asks for permission.

If you already set Cutline up for Premiere Pro, you only need steps 3 to 6. The same install covers both apps. The [quick start](/help/quick-start.html) has more detail.

## Example requests

| Request | What happens |
| --- | --- |
| `What's in this comp?` | Lists the layers, their timing and what's selected, without changing anything. |
| `Make a new 1080x1920 comp called "Vertical", 25 fps, 15 seconds.` | Creates the comp with those settings. |
| `Add a null and parent the selected layers to it.` | Adds a null layer and parents each selected layer to it. |
| `Stagger the selected layers by 5 frames.` | Offsets each layer's start by 5 frames from the one before. |
| `Precompose the selected layers.` | Moves the selected layers into a new precomp. |
| `Fade the title in over the first 10 frames.` | Sets two opacity keyframes on the title layer. |
| `Make all the position keyframes on the selected layer easy ease, 75% influence.` | Changes the easing on every position keyframe on that layer. |
| `Add wiggle(2, 20) to the camera's position.` | Adds the expression and reports any expression error. |
| `Change the title text to "Coming up next".` | Updates the text layer's source text. |
| `Make all the text layers Inter Bold, 64 px, white.` | Sets font, size and fill colour on every text layer in the comp. |
| `Set the Title essential property on the lower third to "Guest Name".` | Fills in the template's Essential Property. |
| `Use the "Matte" layer as an alpha matte for the footage under it.` | Sets the track matte. |
| `Add an ellipse mask to the footage with 80 pixels of feather.` | Adds the mask and sets its feather. |
| `Show me the comp at 3 seconds.` | Renders that frame so Claude can see it and describe it. |
| `Add this comp to the render queue with my ProRes template, saving to my Desktop.` | Adds a render queue item with that template and output path. |

The [commands](/help/commands.html) page has more, and every After Effects tool is on the [features](/features.html) page.

## Undo in After Effects

Undo is simpler in After Effects than in Premiere Pro. Each Cutline change is exactly one undo step, however many layers it touched. One Cmd+Z takes the whole change back.

You can also say "undo that" in Claude or click **Undo last change** at the bottom of the panel. Cutline never saves your project unless you ask.

## Tips for After Effects requests

- **Name layers.** "The Logo layer" is clearer than "the second layer from the top", and Cutline won't delete layers unless you name them.
- **Use the selection.** "The selected layers" or "the selected keyframes" tells Cutline exactly what you mean.
- **Ask it to look.** "Show me the comp at 3 seconds" before and after a change is a quick check that the result matches what you had in mind.
- **Keep requests small.** One clear change per request is easier to check and easier to undo.

For more on working this way, see [AI editing without losing control](/guides/ai-editing-without-losing-control.html).

## Limits to know about

- **Mac only** for now, and **Claude only** until ChatGPT support arrives.
- **It's new.** Check each change, and keep your usual backups.
- **The AI can misunderstand.** If a request is vague, it may change the wrong layer or property. Read the report and look at the frame.
- **Masks are rectangles and ellipses.** Custom mask shapes are still drawn by hand.
- **Rendering keeps After Effects busy.** For long renders, ask Cutline to send the queue to Media Encoder instead.
- **Locked layers stay locked.** Cutline won't delete them.
- **Older versions differ.** Before After Effects 2023, setting a track matte moves the matte layer directly above the layer it's matting.

## Is my project private?

Cutline talks to After Effects over a local connection on your Mac, and your footage never leaves the computer. What you type, plus the layer names, times and any frames Cutline reports back, goes to your AI provider under that provider's terms.

## Questions people ask

### Can Claude control After Effects?

Yes, through a plugin. Cutline connects the Claude desktop app to After Effects, so Claude can change layers, keyframes, text, masks and render settings in your open comp.

### Can Claude write After Effects expressions?

Yes. Ask for an expression on a property, such as wiggle on a camera's position, and Cutline adds it to the layer. If After Effects reports an error, Cutline passes it back so Claude can fix it.

### Can I undo what the AI changed in After Effects?

Yes. Each Cutline change is one undo step in After Effects, so a single Cmd+Z takes it back. You can also say "undo that" or click Undo last change in the panel.

### Does it work with ChatGPT?

Not yet. As of October 2026 Cutline works with the Claude desktop app only. ChatGPT support is coming soon.

### Is my footage uploaded?

No. Your media stays on your Mac. Claude receives what you type and what Cutline reports, such as layer names, times and any frames it looks at.

### Can it animate a whole sequence for me?

It can set up and change the keyframes, easing, text and layers you ask for. The creative direction comes from you, request by request.

### Which versions of After Effects does it support?

The current version of After Effects from Creative Cloud, on a Mac. Cutline is tested on the latest versions (October 2026).

## Related guides

- [How to edit in Premiere Pro with Claude](/guides/edit-premiere-pro-with-claude.html)
- [What MCP means for video editors](/guides/mcp-for-video-editors.html)
- [AI editing without losing control](/guides/ai-editing-without-losing-control.html)

To try Cutline before the public launch, email [hello@cutlineai.com](mailto:hello@cutlineai.com).
