/**
 * NexBot — FAQ Chatbot Engine
 * A smart rule-based chatbot with natural language pattern matching
 */

// ══════════════════════════════════════════
//  KNOWLEDGE BASE — FAQ Responses
// ══════════════════════════════════════════

const knowledgeBase = [
  // ── Greetings ──
  {
    patterns: [/\b(hi|hello|hey|howdy|greetings|good\s*(morning|afternoon|evening|night)|sup|yo)\b/i],
    responses: [
      { text: "Hey there! 👋 I'm **NexBot**, your intelligent FAQ assistant. I'm here to help answer your questions instantly. What would you like to know?", suggestions: ["About CodeAlpha", "Internship Tasks", "Getting Started"] },
      { text: "Hello! 😊 Great to see you! I'm NexBot — ask me anything about CodeAlpha, programming, or general FAQs!", suggestions: ["What can you do?", "Tell me about AI", "Fun fact"] },
      { text: "Hi! 🚀 I'm NexBot, always online and ready to help. What's on your mind?", suggestions: ["About CodeAlpha", "How do I submit?", "Tips for learning"] },
    ]
  },

  // ── What can you do / capabilities ──
  {
    patterns: [/what can you (do|help|answer)|your (capabilities|features|skills)|how (do you work|are you helpful)/i],
    responses: [
      {
        text: "I'm NexBot and I can help you with:\n\n🔹 **CodeAlpha** internship FAQs\n🔹 **Programming** tips and concepts\n🔹 **AI & Technology** explanations\n🔹 **Career advice** for developers\n🔹 **Fun facts** and trivia\n\nJust type your question naturally and I'll do my best!",
        suggestions: ["Tell me about CodeAlpha", "What is AI?", "Programming tips"]
      }
    ]
  },

  // ── About CodeAlpha ──
  {
    patterns: [/what is codealpha|about codealpha|tell me about codealpha|codealpha internship|who is codealpha/i],
    responses: [
      {
        text: "**CodeAlpha** is an IT company offering virtual internship programs for students and fresh graduates. 🌐\n\nKey highlights:\n• 100% remote/virtual internship\n• Real-world project experience\n• Mentorship & guidance provided\n• Certificate upon completion\n• Great for building your portfolio!",
        suggestions: ["What are the tasks?", "How to apply?", "Certificate details"]
      }
    ]
  },

  // ── Internship Tasks ──
  {
    patterns: [/internship tasks|what are the tasks|tasks for intern|task list|project list/i],
    responses: [
      {
        text: "CodeAlpha typically offers these internship tasks for Python/Web developers:\n\n**Task 1** 🌍 Language Translation Tool\n**Task 2** 🤖 Simple Chatbot / FAQ Bot\n**Task 3** 📚 Book Library System\n**Task 4** 💹 Stock Portfolio Tracker\n\nEach task helps build real skills you can showcase!",
        suggestions: ["How to submit?", "Tips for task completion", "Certificate"]
      }
    ]
  },

  // ── Getting Started ──
  {
    patterns: [/how (do i|to) get started|where (do i|to) start|beginning|first steps|how to begin/i],
    responses: [
      {
        text: "Here's how to get started with CodeAlpha! 🚀\n\n1️⃣ **Read the task requirements** carefully\n2️⃣ **Plan your project** structure\n3️⃣ **Build & test** your solution\n4️⃣ **Upload to GitHub** with a clear README\n5️⃣ **Submit the link** to CodeAlpha\n\nTip: Start simple, then add features!",
        suggestions: ["GitHub tips", "README template", "Task submission"]
      }
    ]
  },

  // ── Submission ──
  {
    patterns: [/how (to|do i) submit|submission|upload (code|project|work)|where to submit|submit (my|the) (work|task|project)/i],
    responses: [
      {
        text: "To submit your CodeAlpha internship work: 📤\n\n1. **Create a GitHub repository** named `CodeAlpha_ProjectName`\n2. **Push all your code** to the main branch\n3. **Add a README.md** with project description\n4. **Share the GitHub link** with CodeAlpha via email or portal\n\n💡 Make sure your repo is **public** so they can review it!",
        suggestions: ["GitHub commands", "README tips", "What's next?"]
      }
    ]
  },

  // ── Certificate ──
  {
    patterns: [/certificate|certification|get certified|completion certificate|proof of internship/i],
    responses: [
      {
        text: "🏆 **CodeAlpha Certificate Info:**\n\nYou receive a **Certificate of Completion** after:\n• Completing all assigned tasks\n• Submitting your GitHub links\n• Meeting the quality requirements\n\nThe certificate is digital and can be added to **LinkedIn**, your **resume**, and **portfolio**. It's great for demonstrating real-world project experience!",
        suggestions: ["How to submit?", "LinkedIn tips", "Portfolio advice"]
      }
    ]
  },

  // ── AI / Artificial Intelligence ──
  {
    patterns: [/what is (ai|artificial intelligence)|tell me about ai|explain ai|how does ai work/i],
    responses: [
      {
        text: "**Artificial Intelligence (AI)** is the simulation of human intelligence by computers. 🤖\n\nKey branches:\n• **Machine Learning** — Learning from data\n• **Deep Learning** — Neural networks\n• **NLP** — Understanding language\n• **Computer Vision** — Seeing & analyzing images\n\nAI powers things like voice assistants, recommendation systems, self-driving cars, and... chatbots like me! 😄",
        suggestions: ["What is Machine Learning?", "NLP explained", "AI career path"]
      }
    ]
  },

  // ── Machine Learning ──
  {
    patterns: [/what is (ml|machine learning)|explain machine learning|how does ml work/i],
    responses: [
      {
        text: "**Machine Learning (ML)** is a subset of AI where systems **learn from data** without being explicitly programmed. 📊\n\nTypes:\n• **Supervised** — Trained on labeled data\n• **Unsupervised** — Finds patterns in unlabeled data\n• **Reinforcement** — Learns by reward/penalty\n\nPopular frameworks: TensorFlow, PyTorch, scikit-learn",
        suggestions: ["What is AI?", "Deep learning?", "Python for ML"]
      }
    ]
  },

  // ── Python ──
  {
    patterns: [/python|learn python|python tips|why python|is python good/i],
    responses: [
      {
        text: "**Python** is one of the best programming languages to learn! 🐍\n\nWhy Python?\n• ✅ Simple, readable syntax\n• ✅ Huge ecosystem of libraries\n• ✅ Great for AI/ML, web dev, automation\n• ✅ Massive community & resources\n• ✅ High demand in job market\n\nStart with: Python.org official tutorial, freeCodeCamp, or Codecademy!",
        suggestions: ["Python resources", "What to build?", "Career in Python"]
      }
    ]
  },

  // ── Learning Programming ──
  {
    patterns: [/how (to|do i|can i) learn (programming|coding|code|web dev|development)|tips for (learning|coding|programming)/i],
    responses: [
      {
        text: "Here's a proven roadmap to learn programming! 💻\n\n1. **Choose a language** — Python or JavaScript for beginners\n2. **Learn the basics** — Variables, loops, functions\n3. **Build projects** — The most important step!\n4. **Use GitHub** — Version control is essential\n5. **Join communities** — Reddit, Discord, Stack Overflow\n6. **Be consistent** — 1 hour daily > 7 hours weekly\n\nRemember: Every expert was once a beginner! 🌟",
        suggestions: ["Best resources", "Project ideas", "Python tips"]
      }
    ]
  },

  // ── JavaScript ──
  {
    patterns: [/javascript|js tips|learn javascript|why javascript/i],
    responses: [
      {
        text: "**JavaScript** is the language of the web! 🌐\n\nKey facts:\n• Runs in every browser natively\n• Powers both frontend & backend (Node.js)\n• Huge job market demand\n• Frameworks: React, Vue, Angular, Next.js\n\nBest learning resources:\n• MDN Web Docs\n• javascript.info\n• The Odin Project (free!)",
        suggestions: ["React vs Vue?", "Node.js explained", "Web dev path"]
      }
    ]
  },

  // ── GitHub ──
  {
    patterns: [/github|git (commands|basics|tutorial)|what is git|how to use git/i],
    responses: [
      {
        text: "**Git & GitHub** essentials! 🗂️\n\nCommon commands:\n```\ngit init          # Start a repo\ngit add .         # Stage all changes\ngit commit -m \"\" # Save changes\ngit push          # Upload to GitHub\ngit pull          # Get latest changes\ngit clone <url>   # Copy a repo\n```\n\nTip: Write clear commit messages — future-you will thank you!",
        suggestions: ["How to create a repo?", "GitHub Pages", "Submit my project"]
      }
    ]
  },

  // ── Fun Fact ──
  {
    patterns: [/fun fact|tell me (something|a fact)|interesting fact|did you know|trivia/i],
    responses: [
      { text: "🎲 **Fun Fact!**\n\nThe first computer bug was an actual bug! 🐛 In 1947, Grace Hopper's team found a real moth trapped in a Harvard Mark II computer. She taped it into the logbook and wrote: *\"First actual case of bug being found.\"*", suggestions: ["Another fact!", "Tell me about AI", "History of coding"] },
      { text: "🎲 **Fun Fact!**\n\nThere are over **700 programming languages** in existence! The first high-level language was **FORTRAN**, created in 1957. Meanwhile, Python (1991) is less than 35 years old but dominates AI/ML! 🐍", suggestions: ["Another fact!", "About Python", "Which language to learn?"] },
      { text: "🎲 **Fun Fact!**\n\nGoogle's search index contains over **100 petabytes** of data — that's 100,000 terabytes! 🌍 And it processes over **8.5 billion** searches per day. The engineers behind it are incredible!", suggestions: ["Another fact!", "About AI", "How search works?"] },
      { text: "🎲 **Fun Fact!**\n\nThe word **\"algorithm\"** comes from the name of 9th-century Persian mathematician **Muhammad ibn Musa al-Khwarizmi**. His works introduced algebra and decimal notation to Europe! 🔢", suggestions: ["Another fact!", "What is AI?", "Math in programming"] },
    ]
  },

  // ── Career in Tech ──
  {
    patterns: [/career (in|for) (tech|it|programming|coding|software)|job (in|as) (developer|programmer|engineer)|salary|tech job/i],
    responses: [
      {
        text: "**Tech Career Guide** 💼\n\nHigh-demand roles in 2025:\n• **Full-Stack Developer** — Web apps end-to-end\n• **Data Scientist** — Insights from data\n• **ML Engineer** — Build AI systems\n• **DevOps/Cloud Engineer** — Infrastructure\n• **Cybersecurity Analyst** — Protect systems\n\nBest investments: Build a portfolio, contribute to open source, get certifications (AWS, Google Cloud)!",
        suggestions: ["How to build a portfolio?", "Which language to learn?", "About internships"]
      }
    ]
  },

  // ── What is a chatbot ──
  {
    patterns: [/what is (a )?chatbot|how (do|does) chatbot(s)? work|chatbot explanation/i],
    responses: [
      {
        text: "**Chatbots** are software programs designed to simulate conversation! 🤖\n\nTypes:\n• **Rule-based** — Follow predefined patterns (like me!)\n• **AI-powered** — Use NLP & ML (like ChatGPT)\n• **Hybrid** — Combination of both\n\nChatbots are used in customer service, healthcare, education, and more. Building one (like this task!) is a great way to learn programming!",
        suggestions: ["About AI", "NLP explained", "Build a chatbot"]
      }
    ]
  },

  // ── About the bot itself ──
  {
    patterns: [/who are you|what are you|your name|tell me about yourself|introduce yourself/i],
    responses: [
      {
        text: "I'm **NexBot** 🤖 — a smart FAQ chatbot built as part of a CodeAlpha internship project!\n\n**What I'm built with:**\n• HTML5, CSS3 & Vanilla JavaScript\n• Rule-based NLP pattern matching\n• No external APIs needed — all offline!\n\nI was designed to be fast, helpful, and look great. 😎 Ask me anything!",
        suggestions: ["What can you do?", "About CodeAlpha", "Fun fact"]
      }
    ]
  },

  // ── Web Development ──
  {
    patterns: [/web dev(elopment)?|front[- ]?end|back[- ]?end|full[- ]?stack|html|css|react/i],
    responses: [
      {
        text: "**Web Development Roadmap** 🌐\n\n**Frontend:**\nHTML → CSS → JavaScript → React/Vue\n\n**Backend:**\nNode.js / Python (Django/Flask) / APIs\n\n**Database:**\nMySQL / PostgreSQL / MongoDB\n\n**Tools:**\nGit, VS Code, Chrome DevTools, Figma\n\nGreat free resources: The Odin Project, freeCodeCamp, MDN Docs!",
        suggestions: ["JavaScript tips", "Python vs Node.js?", "Build my first site"]
      }
    ]
  },

  // ── Thank you ──
  {
    patterns: [/thank(s| you)|thx|ty\b|appreciate|helpful/i],
    responses: [
      { text: "You're welcome! 😊 I'm happy I could help. Is there anything else you'd like to know?", suggestions: ["More questions", "Fun fact", "About CodeAlpha"] },
      { text: "Anytime! 🌟 That's what I'm here for. Feel free to ask more questions!", suggestions: ["Chatbot questions", "Programming tips", "Career advice"] },
    ]
  },

  // ── Goodbye ──
  {
    patterns: [/\b(bye|goodbye|see you|later|cya|farewell|take care|good night)\b/i],
    responses: [
      { text: "Goodbye! 👋 It was great chatting with you. Come back anytime you have questions. Best of luck with your projects! 🚀", suggestions: [] },
      { text: "See you later! 🌟 Keep learning, keep building. You've got this! 💪", suggestions: [] },
    ]
  },

  // ── Yes/No responses ──
  {
    patterns: [/^(yes|yeah|yep|sure|ok|okay|yup|absolutely|definitely|of course)$/i],
    responses: [
      { text: "Great! 😊 What would you like to know more about?", suggestions: ["CodeAlpha tasks", "Programming tips", "About AI"] },
    ]
  },
  {
    patterns: [/^(no|nope|nah|not really|not now)$/i],
    responses: [
      { text: "No problem! I'm here whenever you need me. 😊 Just type your question anytime!", suggestions: ["Quick topics", "Fun fact"] },
    ]
  },

  // ── How are you ──
  {
    patterns: [/how are you|how('s| is) it going|how do you do|you good|you okay/i],
    responses: [
      { text: "I'm running at **100% efficiency** today! ⚡ Thanks for asking. As an AI, I don't have feelings, but I'm always ready and excited to help. How are *you* doing? 😊", suggestions: ["Tell me a fun fact", "Ask something"] },
    ]
  },

  // ── Jokes ──
  {
    patterns: [/tell (me a )?joke|something funny|make me laugh|joke/i],
    responses: [
      { text: "😄 Why do programmers prefer dark mode?\n\n**Because light attracts bugs!** 🐛", suggestions: ["Another joke!", "Fun fact", "Programming tips"] },
      { text: "😄 How many programmers does it take to change a light bulb?\n\n**None — that's a hardware problem!** 💡", suggestions: ["Another joke!", "What is a bug?", "Fun fact"] },
      { text: "😄 A SQL query walks into a bar, walks up to two tables and asks...\n\n**\"Can I join you?\"** 🍺", suggestions: ["Another joke!", "What is SQL?", "Fun fact"] },
    ]
  },
];

// ── Default / Fallback responses ──
const fallbackResponses = [
  { text: "🤔 Hmm, I'm not quite sure about that one. Could you try rephrasing? Or pick a topic from the quick chips above!", suggestions: ["About CodeAlpha", "Programming tips", "Fun fact"] },
  { text: "That's an interesting question! 🧐 I don't have that answer yet, but try asking about CodeAlpha, AI, programming, or career tips!", suggestions: ["What can you do?", "Tell me about AI", "Career advice"] },
  { text: "I didn't quite catch that. 🤖 My knowledge covers CodeAlpha FAQs, programming, AI, and more. Try one of the suggested topics!", suggestions: ["CodeAlpha tasks", "JavaScript tips", "Fun fact"] },
];

// ══════════════════════════════════════════
//  CHATBOT ENGINE
// ══════════════════════════════════════════

class NexBot {
  constructor() {
    this.messageHistory = [];
    this.isTyping = false;
    this.funFactIndex = 0;
    this.jokeIndex = 0;
  }

  /** Find best matching response for user input */
  getResponse(input) {
    const trimmed = input.trim();
    if (!trimmed) return null;

    // Check each knowledge base entry
    for (const entry of knowledgeBase) {
      for (const pattern of entry.patterns) {
        if (pattern.test(trimmed)) {
          // For fun facts and jokes, cycle through responses
          const responses = entry.responses;
          if (responses.length === 1) return responses[0];
          
          // Rotate through multiple responses for variety
          const idx = Math.floor(Math.random() * responses.length);
          return responses[idx];
        }
      }
    }

    // Fallback
    const idx = Math.floor(Math.random() * fallbackResponses.length);
    return fallbackResponses[idx];
  }

  /** Format markdown-like text to HTML */
  formatText(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code style="background:rgba(124,58,237,0.15);padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.85em">$1</code>')
      .replace(/```([\s\S]*?)```/g, '<pre style="background:rgba(0,0,0,0.2);border:1px solid rgba(124,58,237,0.2);border-radius:8px;padding:10px 12px;margin:8px 0;font-family:monospace;font-size:0.8em;overflow-x:auto;white-space:pre-wrap"><code>$1</code></pre>')
      .replace(/\n/g, '<br>');
  }

  /** Format timestamp */
  getTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}

// ══════════════════════════════════════════
//  UI CONTROLLER
// ══════════════════════════════════════════

class ChatUI {
  constructor() {
    this.bot = new NexBot();
    this.chatWindow = document.getElementById('chatWindow');
    this.userInput = document.getElementById('userInput');
    this.sendBtn = document.getElementById('sendBtn');
    this.charCount = document.getElementById('charCount');
    this.clearChatBtn = document.getElementById('clearChat');
    this.themeToggle = document.getElementById('themeToggle');
    this.moonIcon = document.getElementById('moonIcon');
    this.sunIcon = document.getElementById('sunIcon');
    this.isDark = true;

    this.init();
  }

  init() {
    this.renderWelcome();
    this.bindEvents();
    this.loadTheme();
  }

  bindEvents() {
    // Send on button click
    this.sendBtn.addEventListener('click', () => this.handleSend());

    // Send on Enter, newline on Shift+Enter
    this.userInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleSend();
      }
    });

    // Character count + auto-resize
    this.userInput.addEventListener('input', () => {
      this.updateCharCount();
      this.autoResize();
    });

    // Clear chat
    this.clearChatBtn.addEventListener('click', () => this.clearChat());

    // Theme toggle
    this.themeToggle.addEventListener('click', () => this.toggleTheme());

    // Quick topic chips
    document.querySelectorAll('.topic-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        this.sendMessage(query);
      });
    });
  }

  updateCharCount() {
    const len = this.userInput.value.length;
    this.charCount.textContent = `${len}/500`;
    this.charCount.className = 'char-count';
    if (len > 400) this.charCount.classList.add('warn');
    if (len >= 490) this.charCount.classList.add('limit');
  }

  autoResize() {
    this.userInput.style.height = 'auto';
    this.userInput.style.height = Math.min(this.userInput.scrollHeight, 120) + 'px';
  }

  handleSend() {
    const text = this.userInput.value.trim();
    if (!text || this.bot.isTyping) return;
    this.sendMessage(text);
    this.userInput.value = '';
    this.userInput.style.height = 'auto';
    this.updateCharCount();
  }

  sendMessage(text) {
    if (this.bot.isTyping) return;

    // Remove welcome screen if present
    const welcome = this.chatWindow.querySelector('.welcome-screen');
    if (welcome) welcome.remove();

    // Render user message
    this.appendMessage('user', text);

    // Show typing indicator
    this.bot.isTyping = true;
    this.sendBtn.disabled = true;
    const typingEl = this.showTyping();

    // Simulate thinking delay (400–1200ms)
    const delay = 400 + Math.random() * 800;
    setTimeout(() => {
      typingEl.remove();
      const response = this.bot.getResponse(text);
      if (response) {
        this.appendMessage('bot', response.text, response.suggestions || []);
      }
      this.bot.isTyping = false;
      this.sendBtn.disabled = false;
      this.userInput.focus();
    }, delay);
  }

  appendMessage(role, text, suggestions = []) {
    const isBot = role === 'bot';
    const el = document.createElement('div');
    el.className = `message ${role}`;

    const avatar = isBot ? '🤖' : '👤';
    const label = isBot ? 'NexBot' : 'You';
    const time = this.bot.getTime();
    const formattedText = isBot ? this.bot.formatText(text) : this.escapeHtml(text).replace(/\n/g, '<br>');

    let suggestionsHTML = '';
    if (isBot && suggestions.length > 0) {
      suggestionsHTML = `<div class="msg-suggestions">
        ${suggestions.map(s => `<button class="suggestion-btn" data-query="${this.escapeAttr(s)}">${this.escapeHtml(s)}</button>`).join('')}
      </div>`;
    }

    el.innerHTML = `
      <div class="msg-avatar" aria-hidden="true">${avatar}</div>
      <div class="msg-content">
        <span class="msg-label">${label}</span>
        <div class="msg-bubble">${formattedText}${suggestionsHTML}</div>
        <span class="msg-time">${time}</span>
      </div>
    `;

    // Bind suggestion button events
    el.querySelectorAll('.suggestion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.getAttribute('data-query');
        this.sendMessage(query);
      });
    });

    this.chatWindow.appendChild(el);
    this.scrollToBottom();
  }

  showTyping() {
    const el = document.createElement('div');
    el.className = 'typing-indicator';
    el.innerHTML = `
      <div class="msg-avatar" aria-hidden="true">🤖</div>
      <div class="typing-dots" aria-label="Bot is typing">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    `;
    this.chatWindow.appendChild(el);
    this.scrollToBottom();
    return el;
  }

  scrollToBottom() {
    requestAnimationFrame(() => {
      this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
    });
  }

  renderWelcome() {
    const el = document.createElement('div');
    el.className = 'welcome-screen';
    el.innerHTML = `
      <div class="welcome-icon">🤖</div>
      <h2>Welcome to NexBot!</h2>
      <p>Your intelligent FAQ assistant. Ask me about CodeAlpha, programming, AI, career tips, or anything else!</p>
      <div class="welcome-chips">
        <button class="topic-chip" data-query="What can you do?">What can you do?</button>
        <button class="topic-chip" data-query="Tell me about CodeAlpha">About CodeAlpha</button>
        <button class="topic-chip" data-query="Tell me a fun fact">Fun Fact 🎲</button>
      </div>
    `;

    el.querySelectorAll('.topic-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        this.sendMessage(query);
      });
    });

    this.chatWindow.appendChild(el);
  }

  clearChat() {
    this.chatWindow.innerHTML = '';
    this.renderWelcome();
    // Bind topic chips again (they're in header, not cleared)
    document.querySelectorAll('.quick-topics .topic-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        this.sendMessage(query);
      });
    });
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    localStorage.setItem('nexbot-theme', this.isDark ? 'dark' : 'light');
    this.moonIcon.style.display = this.isDark ? 'block' : 'none';
    this.sunIcon.style.display = this.isDark ? 'none' : 'block';
  }

  loadTheme() {
    const saved = localStorage.getItem('nexbot-theme');
    if (saved === 'light') {
      this.isDark = false;
      document.documentElement.setAttribute('data-theme', 'light');
      this.moonIcon.style.display = 'none';
      this.sunIcon.style.display = 'block';
    }
  }

  escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  escapeAttr(str) {
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
}

// ══════════════════════════════════════════
//  BOOT
// ══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  new ChatUI();
});
