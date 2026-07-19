# Learning Roadmap — owning your website

You already know Python, git, and how to think like an engineer. Web
development reuses all of that. This roadmap takes you from "Claude built
this" to "I can rebuild this myself" in roughly **4–6 weeks at ~30 min/day**.

## How this site maps to what you'll learn

```
index.html      →  HTML     (structure: what is on the page)
css/style.css   →  CSS      (style: what it looks like)
js/main.js      →  JavaScript (behavior: what it does)
git push        →  GitHub Pages (deployment: how it goes live)
```

Think of it like an ML project: HTML is the data, CSS is the visualization,
JavaScript is the code that processes it.

## Week 1–2: HTML — the structure

**Goal:** read `index.html` top to bottom and understand every line.

- Learn: tags (`<h1>`, `<p>`, `<a>`, `<section>`), attributes (`href`,
  `class`, `id`), nesting, semantic elements (`<header>`, `<nav>`, `<footer>`)
- Resource: [MDN — HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
  (MDN is the "official documentation" of the web — like PyTorch docs for ML)
- **Exercise:** add a new fact to the "About" facts list, and add a
  LeetCode link in the contact section. Preview locally before pushing.

## Week 2–3: CSS — the styling

**Goal:** understand the `:root` variables, selectors, and the two `grid` layouts.

- Learn: selectors (`.class`, `#id`), the box model (margin/padding/border),
  colors, flexbox, grid, media queries (how the site adapts to phones)
- Resource: [MDN — CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps),
  then play [Flexbox Froggy](https://flexboxfroggy.com/) and
  [Grid Garden](https://cssgridgarden.com/) (games — genuinely the fastest way)
- **Exercise:** change `--accent` to a color you like; then make the
  project cards show 2 columns max instead of 3 on wide screens.

## Week 3–4: JavaScript — the behavior

**Goal:** understand every line of `js/main.js`.

Good news: JS will feel familiar — it's closer to Python than you expect.
`const projects = [...]` is just a list of dicts.

- Learn: variables (`const`/`let`), arrays and objects, `for...of` loops,
  functions, the DOM (`document.getElementById`, `createElement`),
  events (`addEventListener`)
- Resource: [MDN — JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps),
  or [javascript.info](https://javascript.info/) chapters 1–5
- **Exercise:** add a `date` field to each project and display it on the
  card. Stretch goal: add a button that filters projects by tag.

## Week 4–5: Git & GitHub Pages — the deployment

**Goal:** be fluent in the edit → preview → commit → push → live loop.

- Learn: `git status`, `add`, `commit`, `push`, `log`, `revert`; what a
  branch is; how GitHub Pages turns your repo into a website
- Resource: [GitHub Pages docs](https://docs.github.com/en/pages) — you
  mostly already know git from your ML repos
- **Exercise:** make a change, push it, watch the Actions tab deploy it,
  then `git revert` it and push again.

## Week 5–6: Developer tools — debugging like on the web

**Goal:** use the browser like you use a Python debugger.

- Learn: F12 DevTools — Elements tab (live-edit HTML/CSS), Console tab
  (JS errors and `console.log`), the mobile-view toggle
- **Exercise:** open your live site, use DevTools to change the accent
  color live (it resets on refresh — that's expected), and deliberately
  break `main.js` locally to see what the Console error looks like.

## What you do NOT need to learn (yet)

- **Backend (servers, databases, APIs)** — your site is static; there is
  nothing to run on a server. Skip Node/Django/Flask for now.
- **React/Vue/Next.js** — frameworks solve problems big apps have. A
  portfolio doesn't have those problems. Learn them later if a job needs them.
- **Webpack/bundlers/npm** — same reason. Plain files are enough.

## Later ideas (when the basics feel easy)

1. Add a project screenshot/image to each card
2. Add a dark/light theme toggle button
3. Write short blog posts about your ML projects (a `blog/` folder with
   more HTML pages — great for visibility)
4. Buy a custom domain (~$10/year, e.g. `omarbakr.dev`) and connect it to
   GitHub Pages — the only step that costs money, and it's optional
