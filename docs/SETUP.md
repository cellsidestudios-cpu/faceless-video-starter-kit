# Setup (Windows)

Open PowerShell and run the commands one at a time.

## 1. Core tools

| Tool | Why | Install |
|---|---|---|
| Claude Code | Does the building for you | Download from <https://claude.com/download> (needs a paid Claude plan) |
| Node.js | Runs explainroo | `winget install OpenJS.NodeJS.LTS` |
| Python 3 | Whisper and small scripts | `winget install Python.Python.3.13`, then use `py -3` |
| ffmpeg | Cuts, encodes, normalises loudness | `winget install Gyan.FFmpeg` |
| yt-dlp | Downloads reference clips you have rights to | `winget install yt-dlp.yt-dlp` |
| Whisper | Checks the voice-over matches your script | `py -3 -m pip install openai-whisper` |

Check each one: `ffmpeg -version`, `node --version`, `py -3 --version`.

## 2. Video tools

- **explainroo** builds vertical explainer videos with a local voice. Run it with `npx --yes explainroo --help`.
- **earshot** lets Claude "listen" to audio to check sound quality: <https://github.com/Leonxlnx/earshot>.
- **HyperFrames** (HTML to video) and **video-director** are optional skills for custom motion graphics. Install them as Claude Code skills or plugins following each project's own page.

## 3. Folder layout

```
my-channel/
  videos/            one folder per video (copy template/ into it)
  brand/             your look (copy brand/look-example.json)
  automation/
    history.json     what you already posted, so you never repeat yourself
    log.md           one line per run
```

## 4. Voice

The easiest free option is explainroo's built-in local voices (set `"voice": "af_heart"` in `video.json`). Alternate voices between videos for variety.

If you use a voice-cloning tool, only clone a voice you own or have written permission to use, and never someone else's.

## 5. Keys and secrets

Nothing here needs an API key. If you add one, put it in a local `.env` file. The `.gitignore` already blocks `.env`, `client_secret*.json` and `tokens/`. **Never commit those.**

## 6. First test

```powershell
npx --yes explainroo check videos/01-my-first-video
npx --yes explainroo render videos/01-my-first-video
```

Fix whatever `check` reports, then render again.
