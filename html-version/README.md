# Pinky Makeover Studio — Static HTML Version

A plain HTML, CSS and vanilla-JavaScript version of the Pinky Makeover Studio website. No build tools, no frameworks — just open `index.html` in a browser, or upload the entire `html-version/` folder to any static host (GitHub Pages, Netlify, Hostinger, cPanel, etc.).

## Folder structure

```
html-version/
├── index.html        # Home
├── about.html        # About
├── services.html     # Services (with anchors: #bridal-makeup, #party-makeup, ...)
├── gallery.html      # Portfolio gallery (with filters & lightbox)
├── contact.html      # Contact (WhatsApp + details + map)
├── css/
│   └── styles.css    # All design tokens and styles
├── js/
│   └── main.js       # Navbar scroll, mobile menu, FAQ, gallery filter & lightbox
└── assets/           # All images (logo, hero, looks, etc.)
```

## How to run locally

Just double-click `index.html` — it works directly in any modern browser. No server required.

For best results (so map iframes and inter-page navigation work cleanly) you can serve it locally:

```bash
cd html-version
python3 -m http.server 8000
# then open http://localhost:8000
```

## How to deploy

Upload the entire `html-version/` folder contents to your hosting provider's `public_html` (or equivalent) directory. That's it.

## Notes

- All colors use HSL design tokens defined in `:root` of `styles.css`.
- WhatsApp number: **+91 99077 56210**
- Instagram: [@pinkymakeoverstudio](https://www.instagram.com/pinkymakeoverstudio)
- Fonts: Cormorant Garamond (serif) + Inter (sans), loaded from Google Fonts.
