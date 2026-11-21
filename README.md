# Faceless Video Starter Kit

A free setup for making faceless short videos (Shorts, Reels, TikTok) with an AI voice-over, using [Claude Code](https://claude.com/download) and open tools. No face, no microphone, no paid editing software.

This repo holds the **setup, the workflow and a starter template**. It does not contain anyone's videos, channel details or keys.

## What you get

| Folder | What's inside |
|---|---|
| [`docs/SETUP.md`](docs/SETUP.md) | Install the tools, step by step (Windows first) |
| [`docs/RUNBOOK.md`](docs/RUNBOOK.md) | The daily workflow: research, script, voice, render, quality gates, upload |
| [`template/`](template) | A vertical-short template (`format.js`, `scenes.js`, `script.md`, `video.json`) for [explainroo](https://www.npmjs.com/package/explainroo) |
| [`brand/`](brand) | An example colour/font "look" you can copy and change |

## The pipeline in one picture

```
topic research -> script.md -> AI voice (local) -> scenes + captions -> render -> checks -> upload
```

Everything runs on your own PC. The voice is generated locally, so it costs nothing per video.

## Quick start

1. Follow [`docs/SETUP.md`](docs/SETUP.md).
2. Copy `template/` to `videos/01-my-first-video/`.
3. Edit `script.md` (about 38 seconds, spoken to the viewer).
4. Ask Claude Code: *"Follow docs/RUNBOOK.md and build this video."*

## Be honest with your audience

YouTube asks whether a video uses altered or synthetic content. If the voice is AI-made, say yes and say so in the description. Only show sources you are allowed to show, and fact-check every claim.

## Licence

MIT. See [`LICENSE`](LICENSE). Third-party tools (Claude Code, ffmpeg, explainroo and others) keep their own licences and terms.
