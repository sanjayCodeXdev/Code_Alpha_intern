# NexBot — AI FAQ Chatbot 🤖

> **CodeAlpha Internship — Task 2**

A sleek, intelligent FAQ chatbot built with pure HTML, CSS, and JavaScript. No external APIs or backend required — runs entirely in the browser!

## ✨ Features

- 🧠 **Smart Pattern Matching** — Rule-based NLP engine with regex patterns
- 💬 **Rich Responses** — Formatted text with markdown support (bold, code, lists)
- 💡 **Suggestion Buttons** — Each response suggests related follow-up questions
- 🎨 **Dark/Light Mode** — Smooth theme toggle with localStorage persistence
- 🚀 **Quick Topic Chips** — One-click access to popular questions
- 🌊 **Typing Indicator** — Realistic bot "thinking" animation
- 📱 **Fully Responsive** — Works beautifully on mobile and desktop
- 🎲 **Fun Responses** — Jokes, fun facts, and variety in replies
- ⌨️ **Keyboard Shortcuts** — Enter to send, Shift+Enter for new line
- 🗑️ **Clear Chat** — Reset the conversation anytime

## 📚 Knowledge Base Topics

| Topic | Example Questions |
|-------|------------------|
| 🚀 CodeAlpha | "What is CodeAlpha?", "What are the internship tasks?" |
| 📤 Submission | "How do I submit my work?", "Where to upload?" |
| 🏆 Certificate | "How do I get my certificate?" |
| 🤖 AI & ML | "What is AI?", "Explain machine learning" |
| 💻 Programming | "How to learn Python?", "JavaScript tips" |
| 🌐 Web Dev | "Frontend roadmap", "React vs Vue" |
| 📁 GitHub | "Git commands", "How to push code" |
| 💼 Career | "Tech career advice", "Developer jobs" |
| 😄 Fun | "Tell me a joke", "Fun fact" |

## 🛠️ Tech Stack

- **HTML5** — Semantic structure with ARIA accessibility
- **CSS3** — Glassmorphism, CSS variables, animations
- **Vanilla JavaScript** — No dependencies, class-based architecture

## 🚀 How to Run

Simply open `index.html` in any modern browser — no setup needed!

```bash
# Clone the repo
git clone https://github.com/sanjayCodeXdev/CodeAlpha_language_translator.git

# Navigate to Task 2
cd Task2_Chatbot_FAQ

# Open in browser
start index.html    # Windows
open index.html     # Mac
```

Or host it on **GitHub Pages** for a live demo!

## 📁 Project Structure

```
Task2_Chatbot_FAQ/
├── index.html      # App structure & markup
├── style.css       # All styling (dark/light themes, animations)
├── chatbot.js      # Bot engine + knowledge base + UI controller
└── README.md       # This file
```

## 🎯 How It Works

1. User types a message or clicks a quick-topic chip
2. The bot engine scans the input against regex patterns in the knowledge base
3. A matching response is selected (with rotation for variety)
4. A simulated typing delay adds realism
5. The response is rendered with formatted text and suggestion buttons

---

*Built with ❤️ as part of the CodeAlpha Web Development Internship*
