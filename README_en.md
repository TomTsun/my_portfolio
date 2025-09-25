# Personal Portfolio Website

A single-page personal site built with **React 19**, **Vite 7**, and **Tailwind CSS 4**. It highlights resume essentials—hero intro, skills, experience, projects, and contact—while using an IntersectionObserver-powered sticky nav to keep visitors oriented as they scroll.

## Features
- **Responsive layout**: Desktop shows an alternating two-column experience timeline; mobile stacks sections for readability.
- **Dynamic navigation**: Sticky header automatically highlights the section currently in view.
- **Data-driven content**: Projects and experience copy live in `src/data`, so updates require no component changes.
- **Tailwind 4 styling**: Custom blue-tinted cards, pill tags, and hover shadows add subtle motion.
- **Component-first structure**: Each section is isolated for quick customization or future expansion.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev

# 3. Run lint checks
npm run lint

# 4. Build production assets
npm run build

# 5. Preview the production build
npm run preview
```

Use Node.js 18+ to ensure Vite and Tailwind 4 work properly.

## Project Structure

```
my_website/
├─ public/                # Static assets
├─ src/
│  ├─ components/         # Page sections (Hero, Skills, Experience…)
│  ├─ data/               # JSON data for projects and experience
│  ├─ App.jsx             # Single-page entry point + nav state
│  └─ index.css           # Global styles (Tailwind base)
├─ tailwind.config.js
├─ vite.config.js
└─ package.json
```

## Customization Guide

| Section | How to update |
| ------- | -------------- |
| Hero / About | Edit copy directly in `src/components/Hero.jsx` and `About.jsx`. |
| Skills | Update the `groups` array in `src/components/Skills.jsx` to tweak icons and tags. |
| Experience | Modify `src/data/experiences.json`; new entries auto-sort by start date and alternate columns on desktop. |
| Projects | Adjust `src/data/projects.json` (title, description, tags, links). |
| Contact | Edit `src/components/Contact.jsx` to change links or messaging. |

### Re-enabling the Blog section
`BlogPreview` is currently excluded from `App.jsx`. To add it back:
1. Re-import `BlogPreview` in `App.jsx`.
2. Insert `<BlogPreview />` inside `<main>`.
3. Optionally restore the `Blog` item in `src/components/Header.jsx`.

## Deployment

`npm run build` produces static files in `dist/`, ready for Netlify, Vercel, GitHub Pages, or any static host. Configure HTTPS and caching if you use a custom domain.

## Ideas & Next Steps
- Surface more projects or wire the blog to Markdown/CMS sources.
- Convert the contact section into a working form via Formspree or a custom API.
- Add smooth scrolling or richer scroll-triggered animations with `scroll-behavior: smooth` or libraries like `framer-motion`.

Enjoy iterating on the design and tailoring it to your personal brand!
