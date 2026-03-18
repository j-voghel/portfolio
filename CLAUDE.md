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
