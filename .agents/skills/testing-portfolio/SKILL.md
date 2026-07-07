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
---
name: testing-portfolio
description: Test the Angular portfolio app end-to-end. Use when verifying UI changes, new sections, or responsive design.
---

# Testing the Portfolio App

## Prerequisites
- Node.js and npm installed
- Run `npm install` in the project root

## Starting the Dev Server
```bash
npx ng serve --host 0.0.0.0
```
- Default port is 4200, but if occupied it may auto-select another port (check output for actual port)
- Open Chrome at `http://localhost:<port>`

## Build Check
```bash
npx ng build
```
- Must pass with 0 errors before creating a PR
- Common issue: missing pipe imports (e.g. `UpperCasePipe` from `@angular/common`) — add to component's `imports` array

## Visual Testing Checklist

### Desktop (1024px+)
1. **Header**: Fixed position, dark teal background, gold logo, all nav links visible
2. **Hero**: Name, subtitle, two CTA buttons ("Ver Projetos", "Fale Comigo")
3. **Sobre (About)**: Two-column grid, bio text, stats with gold numbers
4. **Habilidades (Skills)**: Three categories with gold progress bars
5. **Projetos (Projects)**: 3-column card grid with tech tags
6. **Certificados (Certificates)**: 3-column card grid, uppercase category badges, hours displayed
7. **Publicações (Posts)**: 2-column card grid, platform icons (DIO/dev.to), tags as pills
8. **Estudando Agora (Studies)**: 3-column card grid, progress bars with gold gradient, percentage labels
9. **Contato (Contact)**: Form with fields + contact info sidebar
10. **Footer**: Dark teal, social icons, copyright year

### Mobile (<=768px)
- Hamburger menu icon replaces nav links
- Open hamburger menu and verify all nav links are visible without clipping
- All card grids stack to 1-column layout
- Hero text centers and stacks vertically

### Navigation
- Click each nav link and verify page scrolls to the correct section
- URL should update with hash (e.g. `#certificates`, `#posts`, `#studies`)

## Color Scheme
- Dark teal: `#0a2e2e` (backgrounds)
- Teal: `#0d4f4f` (alternating section backgrounds)
- Gold: `#c8a951` (accents, buttons, progress bars, borders)
- White/light text on dark backgrounds

## Responsive Breakpoints
- Mobile: <= 768px
- Tablet: 769px - 1024px  
- Desktop: > 1024px

## Tips
- Use Chrome DevTools responsive mode (F12 → toggle device toolbar) to test mobile/tablet layouts
- When testing with DevTools responsive mode, the viewport width shown is the simulated device width
- Sections alternate between `var(--color-teal)` and `var(--color-teal-dark)` backgrounds
- All components use Angular 20 standalone architecture with `@for`/`@if` control flow
- No CI is configured — rely on local `npx ng build` for verification
- No backend/database connected yet — all data is placeholder
