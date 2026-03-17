# Your Name — Portfolio

A personal portfolio website built with plain HTML, CSS, and JavaScript.
No frameworks, no build tools — just files you can open, read, and edit.

---

## Project structure

```
Test App/
├── index.html        The entire website. One file, top to bottom.
├── style.css         All the visual design — colors, fonts, layout, spacing.
├── main.js           Small interactions: scroll effects, active nav links.
├── .gitignore        Tells Git which files to ignore (system junk, etc.)
├── README.md         You are here.
└── assets/
    └── images/       Drop your photos and project screenshots in here.
```

---

## How to preview the site

Just double-click `index.html`. It opens directly in your browser.
No server, no setup required.

---

## How to make changes

**To change colors or fonts:**
Open `style.css`. At the very top you'll see a section called `DESIGN TOKENS`.
The variables there (like `--color-accent`) control the entire site's look.
Change one value and it updates everywhere on the site.

**To update your name, bio, and contact info:**
Open `index.html` and search for placeholder text like:
- `Your Name`
- `hello@yourname.com`
- `yourhandle`

Replace each one with your real information.

**To add a project card:**
Open `index.html` and find the Work section (search for `id="work"`).
Copy one full `<article class="card">` block and paste it after the last one.
Update the image path, tag, title, description, and link.

**To add your photos:**
Drop image files into the `assets/images/` folder, then update the `src`
attributes in `index.html` to match the filenames you used.

---

## How to save your work to GitHub

After making changes, run these three commands in your terminal:

```bash
# 1. Stage your changes (tells Git which files to save)
git add .

# 2. Create a snapshot with a description of what you changed
git commit -m "Describe what you changed here"

# 3. Upload to GitHub
git push
```

---

## Connecting to GitHub for the first time

1. Go to github.com and create a new repository
   - Give it a name (e.g. `portfolio`)
   - Leave "Add a README" unchecked — you already have one
   - Click "Create repository"

2. Copy the URL GitHub shows you (it ends in `.git`)

3. Run these two commands in your terminal (replace the URL with yours):
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

4. To enable free hosting via GitHub Pages:
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Under "Branch" select `main` and click Save
   - Your site will be live at `https://yourusername.github.io/portfolio`

---

## Design decisions

These notes are written for a designer who wants to understand the code:

- **Palette:** Near-black background with a single lime-green accent (`--color-accent`). One accent color, used sparingly. To change the mood, swap that one variable.
- **Type pairing:** Inter (geometric sans) for UI text, Playfair Display (high-contrast serif) for headings — a classic editorial combination.
- **Spacing:** Every value follows an 8pt grid (`--space-1` through `--space-16`), matching Figma's default grid.
- **Grid:** The project cards use CSS `auto-fill` grid — the browser decides how many columns fit. On mobile it collapses to one column automatically, no media query needed.
- **Animations:** All hover effects (card lift, image zoom, button lift) are pure CSS transitions — no JavaScript or animation libraries.

---

Built with care by [Your Name].
