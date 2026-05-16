---
name: testing-portfolio
description: Test the Angular portfolio app end-to-end. Use when verifying UI changes, color scheme, responsive design, or section layout.
---

# Testing the Portfolio App

## Prerequisites
- Node.js and npm installed
- Dependencies installed (`npm install`)

## Start Dev Server
```bash
npx ng serve --host 0.0.0.0
```
The server defaults to port 4200. If that port is in use, Angular will prompt for a different port — accept with `Y`.

## Sections to Test
1. **Header** — Fixed position, dark teal background, gold "Vitória." logo, white nav links (Inicio, Sobre, Habilidades, Projetos, Contato)
2. **Hero** — Teal gradient, name "Vitória De Lima Boin", subtitle, two gold CTA buttons
3. **About (Sobre Mim)** — Two-column grid: bio text + highlight cards. Stats in gold (10+, 5+, 100%)
4. **Skills (Habilidades)** — Three categories with gold progress bars and percentage labels
5. **Projects (Projetos)** — 6 cards in 3-column grid, "DESTAQUE" badges, tech tags
6. **Contact (Contato)** — Form with Nome/Email/Assunto/Mensagem fields, gold submit button, contact sidebar
7. **Footer** — Dark teal, branding, nav links, social icons, copyright year

## Navigation Test
- Click each nav link (Sobre, Habilidades, Projetos, Contato) and verify smooth scroll to the correct section
- URL should update with hash (e.g., `#about`, `#projects`)

## Responsive Test
- Use Chrome DevTools device toolbar (Ctrl+Shift+M) at 400px width
- Verify: hamburger menu, single-column layout, stacked content, centered hero text

## Color Scheme Verification
- Dark teal: `#0a2e2e` (backgrounds)
- Gold: `#c8a951` (accents, buttons, progress bars)
- White: `#ffffff` (text on dark backgrounds)
- Fonts: Poppins (body), Playfair Display (headings)

## Contact Form
- In dev mode, form submission logs to console (no backend connected)
- The form uses `ContactService` which is ready for API/Power Automate webhook integration

## Notes
- All project data and skill levels are placeholder content
- LinkedIn URL is a placeholder (`https://linkedin.com`)
- The `ProjectService` exists but is not wired into the Projects component (component uses its own static data)
