# Personal Website — omartbakr.github.io

My portfolio website, hosted **free** on GitHub Pages.

## How this site works

There is no backend and no framework — just three files doing all the work:

| File | What it does | How often you'll edit it |
|---|---|---|
| `index.html` | The content: your name, about text, skills, links | Sometimes |
| `css/style.css` | The look: colors, spacing, layout | Rarely |
| `js/main.js` | The **projects list** + mobile menu | **Most often** |

GitHub Pages serves these files directly. Every time you push to `main`,
the live site updates automatically within ~1 minute. That's the whole
deployment process.

## Everyday tasks

### Preview changes on your computer (before publishing)

```bash
cd ~/Code/PersonalWebsite
python -m http.server 8000
```

Then open http://localhost:8000 in your browser. Press `Ctrl+C` to stop.
(You can also just double-click `index.html`, but the local server is closer
to how the real site behaves.)

### Add a new project

1. Open `js/main.js`
2. Copy one `{ ... }` block in the `projects` array
3. Paste it at the **top** of the array and edit the title, description,
   tags, and GitHub link
4. Preview locally, then publish (below)

### Publish your changes

```bash
cd ~/Code/PersonalWebsite
git add .
git commit -m "Add new project: XYZ"
git push
```

Wait ~1 minute, then refresh https://omartbakr.github.io

### Change the color theme

Open `css/style.css` and edit the variables at the very top (`:root` block).
Changing `--accent` alone gives the site a completely different personality.

### Update your about text / skills

Edit the matching section in `index.html` — search for `id="about"` or
`id="skills"`. The text is plain HTML; change the words between the tags.

## If something breaks

- **Site looks broken after a push** → open the browser console (F12 →
  Console tab). A red error usually points to the exact file and line.
- **Push rejected** → run `git pull` first, then push again.
- **Want to undo your last change** → `git revert HEAD` then `git push`.
- **Site not updating** → check the "Actions" tab of the GitHub repo; the
  `pages-build-deployment` workflow shows deploy status.

## Learning

See [LEARNING.md](LEARNING.md) for the roadmap of what to learn to fully
own this site.
