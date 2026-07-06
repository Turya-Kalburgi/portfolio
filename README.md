# Turya Kalburgi — Portfolio

A hand-drawn, journey-themed portfolio. No frameworks, no build step — just
`index.html`, `styles.css`, `script.js`, and three self-hosted fonts.

## View it locally

Double-click `index.html`, or serve it:

```sh
python3 -m http.server 8741
# then open http://localhost:8741
```

## Deploy to GitHub Pages (free, custom URL)

1. Create a new repository on GitHub named exactly `Turya-Kalburgi.github.io`
   (public, empty — no README).
2. From this folder, run:

   ```sh
   git remote add origin https://github.com/Turya-Kalburgi/Turya-Kalburgi.github.io.git
   git push -u origin main
   ```

3. Wait a minute, then visit **https://turya-kalburgi.github.io** — that's your
   portfolio, live on the internet.

Any later edit is just: `git add -A && git commit -m "update" && git push`.

## Customizing

- **Colors** — all in the `:root` block at the top of `styles.css` (light) and
  `:root[data-theme='dark']` (dark mode).
- **Content** — everything lives in `index.html`; each section is marked with a
  `CHAPTER` comment.
- **Fonts** — Fraunces (headings), Karla (body), Caveat (handwritten notes),
  self-hosted in `fonts/`.
