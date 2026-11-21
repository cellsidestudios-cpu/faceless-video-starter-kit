# Daily runbook: one faceless Short

Hand this file to Claude Code: *"Follow docs/RUNBOOK.md and make today's video."* Edit the rules to fit your channel.

## Hard rules

- Never type passwords or keys, never create accounts, never pay for anything. If a site asks you to sign in, stop and tell the owner.
- Post only to **your own channel**. Check the channel in the upload URL before publishing.
- No personal faces, voices or footage unless you chose to use them.
- Every fact in a script needs 2 sources, written in `research.md`. No source, no claim.
- If a quality gate fails twice, do not post. Log it and report.
- One post per day at most. Check `automation/history.json` first.

## 1. Research

1. Look at what is trending this week: YouTube search suggestions, Reddit, GitHub trending, Hacker News and official release notes.
2. Shortlist 5 topics. Score each 1 to 5 on: trending now, useful to a beginner, can be shown with real screens, not covered before.
3. Pick the best and open the official page for every fact.
4. Save `videos/<NN>-<slug>/research.md` with the shortlist, scores, why it won, and each fact with 2 links.

What tends to work: plain beginner questions people type into search ("What is X?", "How do I X?", "X explained for beginners"). Put the question in the title, in beginner words.

## 2. Variety

Read `automation/history.json` and differ from the last 3 videos in each of these:

- voice (alternate male and female)
- structure (how-to, X vs Y, 3 tools, myth vs fact, before/after, quiz, checklist, countdown)
- transitions, background pattern, glow colour, music style
- the "turn" line halfway through (never repeat the same one)
- hook style (bold claim, question, number, mistake)

## 3. Build

1. Copy `template/` to `videos/<NN>-<slug>/`.
2. Write `script.md`: about 38 seconds, 5 to 6 scenes, one idea per scene, spoken to the viewer, ending with one tip.
3. Real screens: `npx --yes explainroo capture <project> <official url>` for public pages. Crop so the text is readable at phone size.
4. Generate the voice: `npx --yes explainroo voice <project>`.
5. Fill `scenes.js` using the helpers in `format.js` (see `format.md`).

## 4. Quality gates (all must pass)

1. `explainroo voice`: every scene confirmed against the script.
2. `explainroo check`: 0 errors.
3. `explainroo sheet`: open it and look. No overlapping text, no empty frames, something changes every 2 seconds.
4. `explainroo render`, then `explainroo verify`: must end with "passed".
5. Re-read `research.md`: every claim has 2 sources.
6. Loudness near -14 LUFS (use earshot `measure`).

## 5. Upload

1. Re-encode small if your upload tool has a size limit: `ffmpeg -i out/video.mp4 -c:v libx264 -crf 22 -preset slow -pix_fmt yuv420p -c:a copy -movflags +faststart upload.mp4`.
2. Title under 70 characters, ending in `#shorts`.
3. Description: what the video shows, source links, and "The voice in this video is AI-made."
4. Mark the video as altered or synthetic content, and not made for kids.

## 6. Log

Append to `automation/history.json` (date, folder, title, topic type, voice, transitions, music, hook style, URL) and one line to `automation/log.md`.
