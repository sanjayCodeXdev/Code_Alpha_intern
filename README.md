# LinguaFlow – Language Translation Tool

> **CodeAlpha AI Internship · Task 1: Language Translation Tool**

A beautiful, modern, and fully functional **Language Translation Web Application** built with pure HTML, CSS, and JavaScript — no frameworks, no build tools required.

---

## 🌟 Features

- **100+ Languages** — Powered by the [MyMemory Translation API](https://mymemory.translated.net/) (free, no API key needed)
- **Auto Language Detection** — Let the API detect your source language automatically
- **Language Swap** — Instantly swap source and target languages (and text)
- **Text-to-Speech (TTS)** — Listen to both source and translated text using the Web Speech API
- **Copy to Clipboard** — One-click copy of the translated text with animated feedback
- **Character Counter** — Live counter with warning at 450+ characters (max: 500)
- **Keyboard Shortcut** — Press `Ctrl + Enter` (or `Cmd + Enter`) to translate instantly
- **Responsive Design** — Works flawlessly on desktop, tablet, and mobile
- **Premium Dark UI** — Glassmorphism, animated orbs, smooth transitions, and micro-animations

---

## 🚀 Getting Started

### Option 1: Open Directly in Browser
Just open `index.html` in any modern browser — no server needed for basic functionality!

> **Note:** For the Copy to Clipboard feature to work, you may need to serve the file via a local HTTP server (due to browser security policies on `file://` protocol).

### Option 2: Run with a Local Server (Recommended)
If you have Python installed:
```bash
# Python 3
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

Or with Node.js:
```bash
npx serve .
```

---

## 📁 Project Structure

```
CodeAlpha_ProjectName/
├── index.html     # App structure & UI layout
├── index.css      # Styling (dark mode, glassmorphism, animations)
├── app.js         # Logic (API calls, TTS, copy, swap, etc.)
└── README.md      # Project documentation
```

---

## 🌐 Translation API

This project uses the **MyMemory API** — a free, public translation API with no authentication required.

| Property | Details |
|---|---|
| API | [MyMemory Translated](https://mymemory.translated.net/) |
| Endpoint | `https://api.mymemory.translated.net/get` |
| Auth | None (free tier: 1000 words/day per IP) |
| Languages | 100+ supported |

---

## 🖥️ Screenshot

A dark-themed, premium translation UI featuring:
- Glowing gradient header
- Animated floating orbs in the background
- Glassmorphism panels for input and output
- A pulsing "Translate" button with a gradient

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Dark glassmorphism design, animations, responsive layout |
| Vanilla JavaScript | DOM manipulation, API calls, Web Speech API |
| MyMemory API | Translation backend |
| Web Speech API | Text-to-Speech (built into modern browsers) |
| Google Fonts (Inter + Outfit) | Premium typography |

---

## 📝 License

This project was created as part of the **CodeAlpha Artificial Intelligence Internship** program.

---

*Built with ❤️ for CodeAlpha AI Internship*
