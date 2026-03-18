# Project Instructions for Claude Code

## About this project
Personal portfolio website for a designer. Plain HTML + CSS + JS — no frameworks, no build tools.

## About the owner
- Designer, not a developer — explain things in plain language
- Uses Claude Code for all git operations, publishing, and code changes
- Does not spend time in GitHub or the terminal directly

## Branch workflow
- `main` = live site (GitHub Pages). Never commit directly to main.
- `dev` = staging branch. All work happens here.
- When the user says "push it live": merge dev into main, push both branches.
- When the user says "save my progress": commit to dev only.
- When the user says "start a new round of changes": confirm we're on dev.

## Dev server
- Run with the "Static Site" config in .claude/launch.json
- Uses `python3 -m http.server 3000`
- Access at http://localhost:3000

## File overview
- `index.html` — entire single-page site (Hero, Work, About, Contact)
- `style.css` — all styles; design tokens are at the very top in :root
- `main.js` — scroll nav effect + active link highlighting
- `assets/images/` — drop images here; reference them in index.html

## Design tokens (current theme)
Light theme, warm neutrals + burnt sienna accent. All in `style.css :root`.

## Context usage
User wants a warning at 80% context usage, but Claude cannot monitor this automatically mid-conversation — /context only works when the user types it. Remind the user to type /context periodically during long sessions. Do not attempt to set up a scheduled task for this.

## Memory instruction
At the end of every session, or whenever something comes up that seems worth preserving — a workflow decision, a preference, a recurring phrase the user uses, anything that would help future sessions — automatically update this CLAUDE.md file and commit it to the dev branch. Don't ask, just do it. This file is the persistent memory for the project.
