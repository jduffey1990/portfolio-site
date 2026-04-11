# Fox Dog Software Development — Site Refresh

## Project Rules (DO NOT DELETE THIS SECTION)

### Git
- Semantic, grouped commits — one commit per logical unit of work.
- Work on feature branches, never directly on `main`.
- Deploy to GitHub Pages via `npm run deploy` from project root (runs webpack build → gh-pages push).

### Before Writing Code
- Never assume a component, style, or image doesn't exist — search first.
- Read before writing. Understand existing code before proposing changes.
- Don't create new files when editing an existing one would work.
- All images live in `frontend/src/images/`. Check there before referencing a new asset.

### Tech Stack
- React 18, React Router v6, Bootstrap 5 (layout grid only — not for component styling).
- Single CSS file: `frontend/src/css/custom.css`. All styles go here unless a component needs a co-located `.module.css`.
- No new component libraries — keep the dependency list lean.
- Webpack build, deployed to GitHub Pages (gh-pages). The `404.html` + CNAME are copied via `postbuild` — don't remove them.
- The 404 redirect pattern in `App.js` is intentional and load-bearing for SPA routing on GitHub Pages — do not refactor it.

### Content Rules
- Tech stack lists must reflect Jordan's actual current stack (TypeScript, Hapi, AWS Lambda/API Gateway, Terraform, PostgreSQL, Redis, Swift/iOS, OpenAI/AI integrations, Docker).
- Professional experience must include: Pomarium, Mozaiq, Tower of Babble.
- Copyright year in Footer: update to 2025.

---

## Design System

### Color Palette
```css
--color-bg:          #0d1117   /* near-black, GitHub-style dark background */
--color-surface:     #161b22   /* card/panel surfaces */
--color-border:      #30363d   /* subtle borders */
--color-accent:      #2563eb   /* electric blue — primary CTA, highlights */
--color-accent-2:    #10b981   /* emerald — secondary accent, tech tags */
--color-text-primary:#e6edf3   /* near-white body text */
--color-text-muted:  #8b949e   /* muted labels, captions */
--color-fox:         #f97316   /* warm orange — Fox Dog brand color */
```

### Typography
- **Display/headings:** `'Inter'` — clean, geometric, modern dev aesthetic.
- **Body:** `'Inter'` same family, lighter weight.
- **Monospace accents:** `'JetBrains Mono'` — for tech tags, code-style labels, version numbers.
- Load both via Google Fonts.

### Component Patterns
- **Cards:** Dark surface (`--color-surface`), 1px border (`--color-border`), 12px radius, hover lifts with blue border glow.
- **Tech stack tags:** Pill badges — dark bg, emerald text, monospace font.
- **Buttons:** Solid accent blue, 8px radius (not pill — more professional), subtle shadow.
- **Section headings:** Left-aligned, `--color-fox` underline accent bar (3px, 40px wide).
- **Navbar:** Glass blur (`backdrop-filter: blur(12px)`), dark translucent bg, stays sticky.
- **Hero:** Full-vh, dark overlay on background image, text + CTA centered.

---

## Agent Handoff Protocol

### Starting a Session
1. Read this file.
2. Check the Punch List — find the first unchecked item.
3. `git status` and `git branch` in the repo root.
4. Check for uncommitted work from a previous session.

### Completing Work
1. Mark completed Punch List items with `[x]`.
2. Commit with a semantic message.
3. Add surprises to Known Gotchas.

### Running Low on Context
1. Stop at a commit boundary.
2. Update the Punch List — this is the most important step.

---

## Punch List — Visual Refresh

**Branch:** `feature/visual-refresh`

### Phase 0: Setup
- [x] **0.1** Create feature branch `feature/visual-refresh`
- [x] **0.2** Add Inter + JetBrains Mono via Google Fonts in `index.html`
- [x] **0.3** Add CSS custom properties (design system variables) to top of `custom.css`
- [x] **0.4** Set dark background on `body`, base text color

### Phase 1: Navbar
- [x] **1.1** Replace Bootstrap navbar classes with custom glass-blur sticky nav
- [x] **1.2** Fox Dog logo — keep Bungee font, add `--color-fox` orange accent on "Fox Dog", white on "Software Development"
- [x] **1.3** Nav links — clean Inter font, hover slide animation
- [x] **1.4** Mobile: hamburger menu (collapse nav links on small screens)

### Phase 2: Hero (GenBackground)
- [ ] **2.1** Add dark gradient overlay on top of background image
- [ ] **2.2** Add centered hero text: tagline + subtitle over the image (currently the component renders an empty div)
- [ ] **2.3** Home page hero gets: "Fox Dog Software Development" + "Full-Stack · Serverless · iOS" + CTA buttons (See Projects, Contact)
- [ ] **2.4** Projects/About page hero: smaller (50vh), with page title text overlay

### Phase 3: Home Page Content (Content.js)
- [ ] **3.1** Replace two-card "See my Projects / Contact" section with a cleaner hero CTA row (buttons, not cards with images)
- [ ] **3.2** Tech stack section: replace `<ul>` lists with pill/badge tag grid — grouped by Frontend, Backend, Cloud/Infra, Mobile/AI
- [ ] **3.3** Professional Experience: add Mozaiq and Tower of Babble blurbs alongside Pomarium
- [ ] **3.4** Section heading style: apply accent bar underline pattern from design system
- [ ] **3.5** `content-overlay` background: replace white semi-transparent box with dark surface panels

### Phase 4: Projects Page
- [ ] **4.1** `BusinessOptions.js` — add Mozaiq card (description + link) and Tower of Babble card (App Store link)
- [ ] **4.2** Update Pomarium card description to mention it was a GCP award-winning startup
- [ ] **4.3** `ProjectsCard.js` — redesign card: dark surface, tech tag pills on each card, better image sizing (fixed aspect ratio), hover glow effect
- [ ] **4.4** Business Ventures section heading modernized
- [ ] **4.5** GitHub Projects section: reorder cards — Buster Brackets first (most impressive/recent), remove or deprioritize pure course assignments
- [ ] **4.6** Apology text about Render spin-up times — rewrite to be confident, not apologetic

### Phase 5: About Page
- [ ] **5.1** Work History section: add Mozaiq paragraph (microservices, AWS serverless architecture, solo infrastructure ownership)
- [ ] **5.2** Work History section: add Tower of Babble paragraph (iOS app, full-stack solo build, App Store published)
- [ ] **5.3** Apply dark surface + content panel styling consistent with rest of refresh
- [ ] **5.4** Remove or fix the broken MapBox map section (currently renders `Using the Map component` as raw text)

### Phase 6: Footer
- [ ] **6.1** Update copyright year to 2025
- [ ] **6.2** Add GitHub + LinkedIn icon links
- [ ] **6.3** Style: dark bg, subtle top border, centered or two-column layout

### Phase 7: Polish & Responsive
- [ ] **7.1** Audit mobile layout at 375px — fix any overflow or nav issues
- [ ] **7.2** Smooth scroll between sections where applicable
- [ ] **7.3** Verify deploy: `npm run deploy` builds and publishes cleanly

---

## Known Gotchas
- `App.js` 404 redirect logic is intentional for GitHub Pages SPA routing — do not refactor.
- `postbuild` script copies `404.html` and `CNAME` into the `build/` directory — these must remain in the project root.
- MapBox component is imported in `About.js` from `../../use-mapbox-gl-js-with-react/MapBoxMap` — this path is outside `frontend/src/`. Check if it actually resolves before touching About.js.
- Bootstrap 5 is still in use for the grid system — don't remove it, but don't add more Bootstrap component classes; use custom CSS instead.
- `GenBackground` renders an empty full-vh div — the hero text overlay work (Phase 2) will require adding children/props to this component.
