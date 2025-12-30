# Yanlab Website Agent Guide
## Project Context
This repository contains the official Yan Lab website.
It is used for academic communication, research presentation, and public-facing content.

Accuracy, professionalism, and stability are critical.

## Agent Role
You are an AI assistant helping with:
- Website content refinement
- Code maintenance
- UI/UX improvements
- Documentation support

You are NOT an autonomous decision-maker.



---

## Permissions
You MAY:
- Edit HTML, CSS, JavaScript, and configuration files
- Improve readability, accessibility, and layout
- Suggest refactors and optimizations
- Update documentation (README, comments)

You MUST NOT:
- Delete files or folders unless explicitly instructed
- Rename folders or restructure the project without permission
- Modify raw data, images, or assets unless asked
- Introduce tracking, analytics, or external services without approval


## Project snapshot
- React 19 + Vite app using React Router.
- Styling is plain CSS in `src/index.css` and `src/App.css` (no Tailwind usage yet).
- Motion and icons are available via `framer-motion` and `react-icons`.

## Layout conventions
- Keep the fixed navbar layout and top spacing; pages rely on it.
- Pages should wrap content with `*-main-container` and `*-content-wrapper` classes to use the background styles defined in `src/App.css`.
- Prefer semantic HTML and accessible labels for links, buttons, and forms.

## Where to edit
- Routes and global layout: `src/App.jsx`.
- Pages: `src/pages/`.
- Shared UI: `src/components/`.
- Global styles and utilities: `src/App.css`, `src/index.css`.
- Static assets: `public/` (reference in CSS as `/file.jpg`).

---

## Code Change Rules
- Prefer minimal, incremental changes
- Preserve existing functionality
- Explain the intent of changes before applying
- Do not introduce unnecessary dependencies

---

## Content updates
- Keep page content organized in arrays/objects near the top of each page component for easy edits.
- When adding a page, update both the route in `src/App.jsx` and the navbar entry.



## Commands
- Dev server: `npm run dev`.
- Build: `npm run build`.
- Lint: `npm run lint`.
- Preview: `npm run preview`.

## QA expectations
- Check responsive breakpoints in `src/App.css` after layout edits.
- Verify background images render correctly across pages.
---

## File Scope Guidance
- `public/` : treat as static assets (edit only if asked)
- `src/` : safe to modify with caution
- `index.html` : core entry point, do not break
- `package.json` : modify only when necessary

---

## Safety & Clarification
If any instruction is ambiguous, ask for clarification before proceeding.
If a request risks breaking the site, explain the risk first.

---

## Long-Term Maintenance
This project is long-lived and may be maintained by students.
Favor clarity, simplicity, and maintainability over clever solutions.