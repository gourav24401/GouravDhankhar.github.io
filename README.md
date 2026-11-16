# Gourav Dhankhar — Portfolio (Bastion theme)

Personal portfolio site, served by GitHub Pages from `main` (root).
Single-page vanilla HTML/CSS/JS — no build step, no framework.

## Structure

- `index.html` — the whole site (hero, about, arsenal, experience, ai research, projects, oem stack, speaking, certs, achievements, contact)
- `styles/styles.css` — Bastion theme (dark-first, Cold Steel `#8FC1D4`; light accent `#2E7FA3`)
- `app.js` — theme toggle, mobile nav, terminal typing, reveal-on-scroll, mailto contact form
- `assets/Gourav_Dhankhar_Resume.pdf` — CV download (the committed Visual resume)
- `img/` — bio photo (`hero.png`), gallery photos (`port1–6.jpg`), project images

## Slots to fill

- **Certificate files** → drop into `img/certs/` as `cnpen.pdf`, `api-rta.pdf`,
  `web-rta.pdf`, `capen.pdf`, `rhcsa.pdf` (image or PDF). Each cert card in
  `index.html` names its file — wrap the card's `.cert-slot` in an
  `<a href="img/certs/<file>">` to make it open the document.
- **Event photos** → drop into `img/events/` as `ciso-horizon-2026.jpg`,
  `et-ciso.jpg`, `dell-tech-forum.jpg`, then swap the `.photo-slot` div in the
  matching speaking card for an `<img>` (the HTML comment on each card shows how).
- **Bio photo** → replace `img/hero.png` with a newer portrait, same filename.

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
