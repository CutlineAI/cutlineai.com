# Privacy policy

What Cutline and this website collect, why, and what you can ask us to do with it.


Version 2026-10-20. Last updated 22 October 2026.

## The short version

- Your footage and projects stay on your computer. Cutline never uploads your media.
- What you type, and what Cutline reports back, goes to your own AI provider, because that's where the AI runs. We never see it.
- We see very little: your email if you buy or write to us, and a scrambled (hashed) copy of your licence key, a random device ID and your computer's name when Cutline checks your licence.
- No analytics, no tracking, no advertising cookies, on this site or in Cutline.

## Who we are

Cutline ("we", "us") decides how the data described here is used, which makes us the controller under UK data protection law. Contact us at hello@cutlineai.com. We're registering Cutline as a UK company, and we'll add the company name, number and registered address here as soon as that's done.

## Using Cutline

### What stays on your computer

Cutline's relay, which your AI app starts, talks to the Cutline panel in Premiere Pro and After Effects over a private connection on your own computer. It doesn't go over your network or the internet.

Cutline doesn't send your media files anywhere and doesn't change them on disk. Silence detection and colour measurements run on your computer. Cutline keeps its settings, a log of what it did (for troubleshooting), and anything you add to its add-ons in its own folder on your computer. The log stays there unless you choose to send it to us.

### What goes to your AI provider

When you ask for an edit, your AI app sends your conversation to your AI provider. That includes what you type, and what Cutline reports back: sequence, clip and layer names, times, track layouts, marker text, effect settings, bin names, and the names and folder paths of your media files. When the AI needs to see the picture, it also includes stills of frames, which aren't your media files.

Your AI provider handles this under its own terms and privacy policy, and your account settings with it, for example whether your chats can be used for training. Check those settings if your projects are confidential. We don't see or store your conversations.

### What comes to us

Cutline's licence service runs on Cloudflare (Workers and KV storage) at updates.cutlineai.com. It keeps only what it needs to run licences, trials and updates:

- **Your licence key, hashed.** We store a SHA-256 hash of the key, never the key itself.
- **A random device ID** that Cutline creates on your computer. It isn't your Mac's serial number or any hardware ID.
- **Your computer's name**, so you can see where your licence is active when you move it. You can change it in the panel.
- **When the key was activated** on that computer, and when it last checked in.
- **When you moved your licence**: up to 3 move times in the last 30 days, so we can apply the move limit.
- **Gumroad's answer** about whether your key and subscription are valid, cached for 12 hours so Cutline doesn't ask Gumroad every time.
- **Your acceptance of these terms**: the terms version, when you accepted, and on which computer.
- **Free trials**: the device ID, the computer name, when the trial started and ends, and a SHA-256 hash of your network's IP address. The hashed IP is used only to limit free trials to 3 per network.

**Licence checks** also ask Gumroad's licence service whether your key is valid. **Update checks** send your licence key and device ID, so signed updates and add-ons only go to valid licences. They never include your projects, files or conversations.

There are **no usage analytics**. Cutline doesn't report how you use it.

### Other services Cutline contacts

- **YouTube,** directly from your computer, when you ask Cutline to search, read or watch a video.
- **GitHub,** to download two open-source tools the YouTube features use, checked against fixed checksums.
- **Gumroad,** to confirm your licence and subscription are valid.

## Buying Cutline

Gumroad sells Cutline and takes your payment. Gumroad shares your name, email address, country, what you bought and your licence key with us. We never see your card details. We use this to give you your licence, send you important emails about it (such as price changes or problems with an update), and keep tax and accounting records.

## This website

This site is hosted on GitHub Pages. GitHub records visitors' IP addresses in its server logs for security. The fonts come from Google Fonts, so your browser sends your IP address to Google when a page loads. The home page loads Gumroad's checkout script, so the buy buttons can open Gumroad's checkout on our page; Gumroad's privacy policy covers anything you enter there. The site sets no cookies and runs no analytics.

## Instagram comments and messages

If you comment a keyword on one of our Instagram posts (for example "EDIT") to ask for a link, Meta passes us your comment, its ID, your Instagram username and user ID through Instagram's official API. We use them only to send you the one message you asked for and a short public reply to your comment. We don't add you to a list or message you again unless you message us. We keep the comment ID for 8 days so we never answer the same comment twice, and otherwise only a count of how many links we've sent. Messages you send us on Instagram stay in Instagram.

## Emailing us

If you write to hello@cutlineai.com, we use what you send to answer you. If you attach a log or screenshot, check it for anything confidential first, because logs can include clip and file names.

## Why we're allowed to use it

- To provide Cutline and your licence: because it's necessary for our contract with you.
- To limit free trials to 3 per network, using a hashed IP address kept for 31 days: because we have a legitimate interest in stopping trial abuse.
- To keep a record that you accepted these terms: because we have a legitimate interest in being able to show it.
- To keep tax and accounting records: because the law requires it.
- To answer your emails and keep Cutline secure: because we have a legitimate interest in doing so.
- To send the link you asked for when you comment a keyword on Instagram: because you asked for it, and we have a legitimate interest in answering.

We'll only send you marketing email if you've asked for it, and you can stop it at any time.

## How long we keep it

| Data | How long |
| --- | --- |
| Hashed licence key, device ID, computer name, activation and last check-in | While your licence is active, then 12 months |
| Licence move times | 30 days, rolling |
| Gumroad's licence answer | 12 hours |
| Free trial records, including the hashed network IP | 31 days |
| Record of accepting these terms | While your licence is active, then 6 years |
| Purchase and tax records | 6 years, as UK tax law requires |
| Support emails | 2 years after the conversation ends |
| Instagram comment IDs from keyword comments | 8 days |

## Who else handles it

We use a few providers to run Cutline: Gumroad (sales), Cloudflare (licence service, Instagram link replies and email forwarding), Meta (Instagram), GitHub (updates and this website) and Google (fonts). Some of them process data in the United States. Where they do, they protect it with the safeguards UK law requires, such as the UK International Data Transfer Addendum or the UK-US data bridge.

We never sell your data.

## Removing your data

- **From your computer:** in the Cutline panel, open **Settings** and choose **Remove from this computer**. That deletes the panel, the Cutline Companion and Cutline's data on that computer, and frees your licence. Then remove Cutline in the Claude desktop app under **Settings**, **Extensions**.
- **From our licence service:** email hello@cutlineai.com from the address you bought with, and we'll delete your licence records within 30 days. We keep purchase and tax records for as long as the law requires.

## Your rights

You can ask us for a copy of your data, to correct it, to delete it, to restrict or object to how we use it, or to send it to someone else. Email hello@cutlineai.com and we'll reply within a month.

If you're unhappy with how we've handled your data, you can complain to the Information Commissioner's Office at ico.org.uk.

## Changes

We'll update this page if anything changes, and email customers about significant changes.
