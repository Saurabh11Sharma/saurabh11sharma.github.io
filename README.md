
# 🌐 Saurabh Sharma — Interactive Online CV

![GitHub last commit](https://img.shields.io/github/last-commit/Saurabh11Sharma/saurabh11sharma.github.io)
![GitHub repo size](https://img.shields.io/github/repo-size/Saurabh11Sharma/saurabh11sharma.github.io)
![GitHub stars](https://img.shields.io/github/stars/Saurabh11Sharma/saurabh11sharma.github.io?style=social)

> **Live:** [saurabh11sharma.github.io](https://saurabh11sharma.github.io)

---

## 📝 Overview

This is an interactive, modern online CV & portfolio built with **React 18**, **Vite**, and **Tailwind CSS v4**. It highlights my AI/ML focus, cloud-native architecture, and 12+ years of full-stack experience. Deployed automatically to GitHub Pages.

---

## � Screenshot

<!-- Replace the link below with your actual screenshot -->
![Screenshot](public/screenshot.png)

---

## ✨ Features

- ⚡ Vite + React 18 (fast HMR, tiny bundles)
- 🎨 Tailwind CSS v4 (no config needed)
- 🌙 Dark/Light mode toggle
- 🎬 Framer Motion micro-animations
- 📊 GitHub stats & streak cards
- 📥 Downloadable Resume (`public/resume.pdf`)
- 📱 Fully responsive, print-friendly
- 🤖 AI/ML-centric skills, projects, and summary

---

## 📂 Project Structure

```text
saurabh11sharma.github.io/
├── public/
│   ├── resume.pdf
│   └── screenshot.png
├── src/
│   ├── App.jsx         # Main interactive CV component
│   ├── main.jsx        # React entrypoint
│   └── index.css       # Tailwind v4 entry (single @import)
├── .github/
│   └── workflows/
│       └── pages.yml   # GitHub Pages deploy workflow
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Usage

### 1. Quick Start

```bash
git clone https://github.com/Saurabh11Sharma/saurabh11sharma.github.io
cd saurabh11sharma.github.io
npm install
npm run dev
# Open: http://localhost:5173
```

### 2. Build & Preview

```bash
npm run build
npm run preview
```

### 3. Deploy

Any push to `main` triggers GitHub Actions to build and deploy to Pages.
Check your site at: https://saurabh11sharma.github.io

---

## 🧩 Tailwind v4 Setup (Important)

- **No config files required.**
- Make sure these files do **not** exist:
  - `postcss.config.js` / `postcss.config.cjs`
  - `tailwind.config.js`
- Install Tailwind v4 only:

```bash
npm uninstall postcss autoprefixer @tailwindcss/postcss
npm install tailwindcss@latest
```

Single import in CSS (`src/index.css`):

```css
@import "tailwindcss";
```

Ensure it’s imported in `src/main.jsx`:

```js
import "./index.css";
```

If you still see a PostCSS error, you probably have a leftover `postcss.config.*`. Delete it and restart the dev server.

---

## 🧪 Sanity Check

Replace `src/App.jsx` temporarily with:

```jsx
export default function App() {
  return (
    <div className="p-10 text-4xl font-bold text-blue-600 bg-gray-100">
      Tailwind v4 works 🎉
    </div>
  );
}
```

If the text is big & blue on gray, Tailwind is working.

---

## �️ Customization

- Edit the `DATA` object inside `src/App.jsx` for:
  - name, role, summary (keep AI/ML emphasis)
  - highlights, skills, toolstack
  - experiences, projects (link to real repos)
  - email, phone, linkedin, github
- Replace `public/resume.pdf` with your own resume.
- Replace `public/screenshot.png` with your own screenshot.

---

## 🐞 Troubleshooting

**PostCSS error:**

> “Trying to use tailwindcss directly as a PostCSS plugin”

➜ You have a `postcss.config.*` file. Delete it and reinstall `tailwindcss@latest`.

**No styles (plain text):**

- `src/index.css` must be exactly `@import "tailwindcss";`
- `src/main.jsx` must import `"./index.css"`
- Run:

```bash
rm -rf node_modules package-lock.json dist .vite && npm install && npm run dev
```

**GitHub Actions fail on autoprefixer:**

➜ You’re mixing v3 configs. Remove PostCSS and Tailwind configs; ensure `package.json` devDeps do not include postcss/autoprefixer.

---

## 📬 Contact

- 📧 Email: Saurabh11sharma@live.com
- 💼 LinkedIn: [linkedin.com/in/saurabh11sharma](https://linkedin.com/in/saurabh11sharma)
- 🐙 GitHub: [github.com/Saurabh11Sharma](https://github.com/Saurabh11Sharma)

---

## ⭐ License

MIT — feel free to fork and adapt for your own online CV.
