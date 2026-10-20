# Commands

Example requests to type into Claude for Premiere Pro, After Effects, the add-ons and YouTube.


These are real requests you can type into Claude. Copy one, change the times, tracks and names to match your project, and send it.

## Tips

- Times are what you see on your timeline: `1:20`, `00:01:20:12`, "the first 10 frames".
- Tracks are `V1`, `V2`, `A1` and so on. You can name clips and layers, or say "this clip" or "the selected layers".
- Cutline reports what it changed after every request. Read it.
- Changed your mind? Say "undo that".

## Premiere Pro

### Cuts and trims

- `Razor V1 and A1 at 1:10, 1:32 and 2:05.`
- `Trim 12 frames off the end of the clip at the playhead and ripple everything after it.`
- `Roll the cut at the playhead 6 frames later.`
- `Slip the clip at 2:10 half a second later.`

### Gaps, ripple and silences

- `Cut out 1:20 to 1:45 and close the gap.`
- `Lift 3:00 to 3:08 but leave the gap.`
- `Close all the gaps, keeping picture and sound in sync.`
- `Are there any black holes where every video track is empty?`
- `Find the silences on A1 and A2 and remove them.`
- `Find pauses longer than a second on A1 and just mark them for now.`

### Switching and moving

- `Turn off V2 between 2:00 and 2:10.`
- `Move the selected clips 2 seconds later.`
- `Swap the clip at 1:30 on V1 for Interview_B, starting 10 seconds in.`

### Markers

- `Add a red marker at the playhead called "check audio".`
- `List every red marker with its time.`
- `Turn the marker at 2:30 into a chapter marker called "Part two".`
- `Run scene edit detection on the selected clip and add markers at each cut.`

### Titles and graphics

- `Add the lower third template from my Desktop at 0:15 with "Guest Name" and "Director".`
- `Change the title text on V3 to "Coming up next".`
- `Make a caption track from the SRT I just imported.`

### Audio

- `Set the music on A3 to -18 dB.`
- `Duck the music on A3 by 12 dB under the dialogue on A1.`
- `Fade the music out over the last two seconds.`

### Transitions and effects

- `Add a cross dissolve on every cut on V1 between 1:00 and 2:00.`
- `Apply Gaussian Blur at 30 to the selected clips.`
- `Copy the effects from the clip at 0:10 onto every clip on V2.`
- `Crop 10% off the top and bottom of this clip.`
- `Warm the clips on V1 up a touch and bring saturation down to 90.`

### Motion, keyframes and speed

- `Scale the clip at the playhead to 110% and move it 50 pixels left.`
- `Add a slow push in on this clip, 100% to 110% over its length.`
- `Slow this clip to 50% with optical flow.`
- `Freeze the frame at the playhead for 2 seconds.`

### Sequences and reframing

- `Duplicate this sequence and call it "v2 client notes".`
- `Make a 9:16 version of this sequence.`
- `Make a new sequence from 2:00 to 3:30 of this one.`
- `Add two video tracks and name V4 "Graphics".`

### Project and bins

- `Import the Day 2 folder from my Desktop into a bin called "Day 2".`
- `Make bins Footage/Cam A and Footage/Cam B and move the A-cam clips into Cam A.`
- `Which clips are offline?`
- `Rename the clips on V1 "Interview 1", "Interview 2" and so on.`
- `Save the project.`

### Looking and checking

- `What have I got selected?`
- `Show me the frame at the playhead.`
- `What's on V2 at 1:10?`

### Export

- `Export this sequence with an H.264 1080p preset to my Desktop.`
- `Export an XML of this sequence for Resolve.`
- `Export an AAF for the sound mix with 2-second handles.`

## After Effects

### Comps

- `What's in this comp?`
- `Make a new 1080x1920 comp called "Vertical", 25 fps, 15 seconds.`
- `Precompose the selected layers.`

### Layers

- `Add a null and parent the selected layers to it.`
- `Stagger the selected layers by 5 frames.`
- `Use the "Matte" layer as an alpha matte for the footage under it.`

### Text

- `Change the title text to "Coming up next".`
- `Make all the text layers Inter Bold, 64 px, white.`
- `Set the Title essential property on the lower third to "Guest Name".`

### Keyframes and easing

- `Fade the title in over the first 10 frames.`
- `Make all the position keyframes on the selected layer easy ease, 75% influence.`
- `Add wiggle(2, 20) to the camera's position.`

### Effects

- `Add Gaussian Blur at 15 to the background layer.`

### Masks

- `Add an ellipse mask to the footage with 80 pixels of feather.`
- `Invert Mask 1 on the Background layer.`

### Frames and rendering

- `Show me the comp at 3 seconds.`
- `Add this comp to the render queue with my ProRes template, saving to my Desktop.`
- `Render the queue through Media Encoder.`

## Colour add-on (Premiere Pro)

Coming soon.

- `Look at V1 and V2 at 10:00 and tell me how the skin and greys read.`
- `Balance the close-up on V1 for skin, then match V2 to it.`
- `Save this grade as a reference called "Studio interview".`
- `Match each camera on this new shoot to my "Studio interview" reference.`
- `Clear the grade on V2 and start again.`

## Context add-on

- `Read the brief before you start.`
- `Remember that the client hates wipes.`
- `Keep this video as a style reference for this project:` then paste the YouTube link.

## Review add-on (Premiere Pro)

Coming soon.

- `Action my review notes.`
- `Go through my open notes in order and tell me which ones you couldn't do.`

## YouTube

For the first two, paste the YouTube link after the request.

- `What does this video say about grading skin tones?`
- `Watch this edit and give me a shot list with cut times.`
- `Find Creative Commons drone shots of a coastline in 4K.`

Only put footage in your edit when you have the right to use it.

## Undo and status

- `Undo that.`
- `Is Cutline connected to Premiere and After Effects?`
- `Check for Cutline updates.`

For how to phrase requests well, see the [User guide](user-guide.html).
