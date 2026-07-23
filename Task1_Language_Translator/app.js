/**
 * LinguaFlow – Language Translation Tool
 * CodeAlpha AI Internship · Task 1
 *
 * Features:
 *  - Custom searchable dropdown for source & target languages
 *  - Translate between 100+ languages using MyMemory (free, no API key needed)
 *  - Language swap, character counter
 *  - Text-to-Speech (Web Speech API) for both source & translated text
 *  - Copy-to-clipboard with fallback for file:// protocol
 *  - Loading indicator & toast notifications
 *  - Functional feature pill buttons
 */

// ─── Language List ─────────────────────────────────────────────────────────────
const LANGUAGES = [
  { code: "auto",  name: "Detect Language" },
  { code: "af",    name: "Afrikaans" },
  { code: "sq",    name: "Albanian" },
  { code: "am",    name: "Amharic" },
  { code: "ar",    name: "Arabic" },
  { code: "hy",    name: "Armenian" },
  { code: "az",    name: "Azerbaijani" },
  { code: "eu",    name: "Basque" },
  { code: "be",    name: "Belarusian" },
  { code: "bn",    name: "Bengali" },
  { code: "bs",    name: "Bosnian" },
  { code: "bg",    name: "Bulgarian" },
  { code: "ca",    name: "Catalan" },
  { code: "ceb",   name: "Cebuano" },
  { code: "ny",    name: "Chichewa" },
  { code: "zh-CN", name: "Chinese (Simplified)" },
  { code: "zh-TW", name: "Chinese (Traditional)" },
  { code: "co",    name: "Corsican" },
  { code: "hr",    name: "Croatian" },
  { code: "cs",    name: "Czech" },
  { code: "da",    name: "Danish" },
  { code: "nl",    name: "Dutch" },
  { code: "en",    name: "English" },
  { code: "eo",    name: "Esperanto" },
  { code: "et",    name: "Estonian" },
  { code: "tl",    name: "Filipino" },
  { code: "fi",    name: "Finnish" },
  { code: "fr",    name: "French" },
  { code: "fy",    name: "Frisian" },
  { code: "gl",    name: "Galician" },
  { code: "ka",    name: "Georgian" },
  { code: "de",    name: "German" },
  { code: "el",    name: "Greek" },
  { code: "gu",    name: "Gujarati" },
  { code: "ht",    name: "Haitian Creole" },
  { code: "ha",    name: "Hausa" },
  { code: "haw",   name: "Hawaiian" },
  { code: "iw",    name: "Hebrew" },
  { code: "hi",    name: "Hindi" },
  { code: "hmn",   name: "Hmong" },
  { code: "hu",    name: "Hungarian" },
  { code: "is",    name: "Icelandic" },
  { code: "ig",    name: "Igbo" },
  { code: "id",    name: "Indonesian" },
  { code: "ga",    name: "Irish" },
  { code: "it",    name: "Italian" },
  { code: "ja",    name: "Japanese" },
  { code: "jw",    name: "Javanese" },
  { code: "kn",    name: "Kannada" },
  { code: "kk",    name: "Kazakh" },
  { code: "km",    name: "Khmer" },
  { code: "ko",    name: "Korean" },
  { code: "ku",    name: "Kurdish (Kurmanji)" },
  { code: "ky",    name: "Kyrgyz" },
  { code: "lo",    name: "Lao" },
  { code: "la",    name: "Latin" },
  { code: "lv",    name: "Latvian" },
  { code: "lt",    name: "Lithuanian" },
  { code: "lb",    name: "Luxembourgish" },
  { code: "mk",    name: "Macedonian" },
  { code: "mg",    name: "Malagasy" },
  { code: "ms",    name: "Malay" },
  { code: "ml",    name: "Malayalam" },
  { code: "mt",    name: "Maltese" },
  { code: "mi",    name: "Maori" },
  { code: "mr",    name: "Marathi" },
  { code: "mn",    name: "Mongolian" },
  { code: "my",    name: "Myanmar (Burmese)" },
  { code: "ne",    name: "Nepali" },
  { code: "no",    name: "Norwegian" },
  { code: "or",    name: "Odia (Oriya)" },
  { code: "ps",    name: "Pashto" },
  { code: "fa",    name: "Persian" },
  { code: "pl",    name: "Polish" },
  { code: "pt",    name: "Portuguese" },
  { code: "pa",    name: "Punjabi" },
  { code: "ro",    name: "Romanian" },
  { code: "ru",    name: "Russian" },
  { code: "sm",    name: "Samoan" },
  { code: "gd",    name: "Scots Gaelic" },
  { code: "sr",    name: "Serbian" },
  { code: "st",    name: "Sesotho" },
  { code: "sn",    name: "Shona" },
  { code: "sd",    name: "Sindhi" },
  { code: "si",    name: "Sinhala" },
  { code: "sk",    name: "Slovak" },
  { code: "sl",    name: "Slovenian" },
  { code: "so",    name: "Somali" },
  { code: "es",    name: "Spanish" },
  { code: "su",    name: "Sundanese" },
  { code: "sw",    name: "Swahili" },
  { code: "sv",    name: "Swedish" },
  { code: "tg",    name: "Tajik" },
  { code: "ta",    name: "Tamil" },
  { code: "te",    name: "Telugu" },
  { code: "th",    name: "Thai" },
  { code: "tr",    name: "Turkish" },
  { code: "uk",    name: "Ukrainian" },
  { code: "ur",    name: "Urdu" },
  { code: "ug",    name: "Uyghur" },
  { code: "uz",    name: "Uzbek" },
  { code: "vi",    name: "Vietnamese" },
  { code: "cy",    name: "Welsh" },
  { code: "xh",    name: "Xhosa" },
  { code: "yi",    name: "Yiddish" },
  { code: "yo",    name: "Yoruba" },
  { code: "zu",    name: "Zulu" },
];

// ─── Custom Searchable Dropdown Class ──────────────────────────────────────────
class CustomSelect {
  constructor(wrapperId, languages, defaultCode) {
    this.wrapper     = document.getElementById(wrapperId);
    this.trigger     = this.wrapper.querySelector('.cs-trigger');
    this.selectedEl  = this.wrapper.querySelector('.cs-selected');
    this.panel       = this.wrapper.querySelector('.cs-panel');
    this.searchInput = this.wrapper.querySelector('.cs-search');
    this.list        = this.wrapper.querySelector('.cs-list');
    this.noResults   = this.wrapper.querySelector('.cs-no-results');
    this.languages   = languages;
    this.value       = defaultCode;
    this.onChange    = null; // optional callback

    this._buildList();
    this._bindEvents();
    this.setValue(defaultCode, false); // silent init
  }

  _buildList() {
    this.list.innerHTML = this.languages.map(lang =>
      `<li class="cs-option" data-value="${lang.code}" role="option" tabindex="-1">${lang.name}</li>`
    ).join('');
  }

  _bindEvents() {
    // Toggle open/close on trigger click
    this.trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // Filter list on search input
    this.searchInput.addEventListener('input', () => this._filter());

    // Select option on click
    this.list.addEventListener('click', (e) => {
      const opt = e.target.closest('.cs-option');
      if (opt) this.setValue(opt.dataset.value, true);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.wrapper.contains(e.target)) this.close();
    });

    // Keyboard: Escape closes, Arrow keys navigate
    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  }

  _filter() {
    const q = this.searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    this.list.querySelectorAll('.cs-option').forEach(opt => {
      const match = opt.textContent.toLowerCase().includes(q);
      opt.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    this.noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  toggle() {
    if (this.wrapper.classList.contains('open')) {
      this.close();
    } else {
      // Close all other open dropdowns first
      document.querySelectorAll('.cs-dropdown.open').forEach(d => {
        if (d !== this.wrapper) d.classList.remove('open');
      });
      this.open();
    }
  }

  open() {
    this.wrapper.classList.add('open');
    this.trigger.setAttribute('aria-expanded', 'true');
    this.searchInput.value = '';
    this._filter();
    // Scroll active item into view
    const active = this.list.querySelector('.cs-option.active');
    if (active) active.scrollIntoView({ block: 'nearest' });
    setTimeout(() => this.searchInput.focus(), 50);
  }

  close() {
    this.wrapper.classList.remove('open');
    this.trigger.setAttribute('aria-expanded', 'false');
  }

  setValue(code, fireChange = true) {
    const lang = this.languages.find(l => l.code === code);
    if (!lang) return;

    this.value = lang.code;
    this.selectedEl.textContent = lang.name;
    this.wrapper.dataset.value = lang.code;

    // Mark active
    this.list.querySelectorAll('.cs-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.value === lang.code);
    });

    this.close();
    if (fireChange && typeof this.onChange === 'function') {
      this.onChange(lang.code, lang.name);
    }
  }

  getValue() {
    return this.value;
  }

  getName() {
    return this.selectedEl.textContent;
  }
}

// ─── Initialize Custom Dropdowns ──────────────────────────────────────────────
// Source: includes "Detect Language", Target: excludes "Detect Language"
const sourceDropdown = new CustomSelect('sourceDropdown', LANGUAGES,                        'auto');
const targetDropdown = new CustomSelect('targetDropdown', LANGUAGES.filter(l => l.code !== 'auto'), 'en');

// ─── DOM References ─────────────────────────────────────────────────────────────
const swapBtn       = document.getElementById('swapBtn');
const sourceTextEl  = document.getElementById('sourceText');
const outputTextEl  = document.getElementById('outputText');
const translateBtn  = document.getElementById('translateBtn');
const clearBtn      = document.getElementById('clearBtn');
const copyBtn       = document.getElementById('copyBtn');
const charCountEl   = document.getElementById('charCount');
const loadingBarEl  = document.getElementById('loadingBar');
const toastEl       = document.getElementById('toast');
const sourceTtsBtn  = document.getElementById('sourceTts');
const targetTtsBtn  = document.getElementById('targetTts');
const statusBadge   = document.getElementById('statusBadge');

// Feature pill buttons
const pillLangs     = document.getElementById('pillLangs');
const pillTts       = document.getElementById('pillTts');
const pillCopy      = document.getElementById('pillCopy');
const pillTranslate = document.getElementById('pillTranslate');

// ─── State ─────────────────────────────────────────────────────────────────────
let translatedText    = '';
let toastTimer        = null;
let currentUtterance  = null;

// ─── Character Counter ─────────────────────────────────────────────────────────
sourceTextEl.addEventListener('input', () => {
  const len = sourceTextEl.value.length;
  charCountEl.textContent = `${len} / 500`;
  charCountEl.style.color = len > 450
    ? 'rgba(239, 68, 68, 0.9)'
    : 'rgba(240, 240, 255, 0.3)';
});

// ─── Clear Button ──────────────────────────────────────────────────────────────
clearBtn.addEventListener('click', () => {
  sourceTextEl.value = '';
  charCountEl.textContent = '0 / 500';
  charCountEl.style.color = '';
  clearOutput();
  sourceTextEl.focus();
});

function clearOutput() {
  outputTextEl.innerHTML = '<span class="placeholder-text">Your translation will appear here...</span>';
  outputTextEl.classList.remove('has-text');
  statusBadge.style.display = 'none';
  translatedText = '';
}

// ─── Swap Languages ────────────────────────────────────────────────────────────
swapBtn.addEventListener('click', () => {
  const srcCode = sourceDropdown.getValue();
  const tgtCode = targetDropdown.getValue();

  if (srcCode === 'auto') {
    showToast('Cannot swap when source is "Detect Language" 🔄', 'error');
    return;
  }

  // Swap selections
  sourceDropdown.setValue(tgtCode, false);
  targetDropdown.setValue(srcCode, false);

  // Swap text content too
  if (translatedText) {
    sourceTextEl.value = translatedText;
    charCountEl.textContent = `${translatedText.length} / 500`;
    clearOutput();
  }
});

// ─── Translation ───────────────────────────────────────────────────────────────
translateBtn.addEventListener('click', translate);

sourceTextEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) translate();
});

async function translate() {
  const text = sourceTextEl.value.trim();
  if (!text) {
    showToast('Please enter some text to translate ✏️', 'error');
    sourceTextEl.focus();
    return;
  }

  const src = sourceDropdown.getValue();
  const tgt = targetDropdown.getValue();

  if (src === tgt) {
    showToast('Source and target languages are the same!', 'error');
    return;
  }

  setLoading(true);

  try {
    const langPair = src === 'auto' ? `en|${tgt}` : `${src}|${tgt}`;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();

    if (data.responseStatus !== 200) {
      throw new Error(data.responseDetails || 'Translation failed');
    }

    translatedText = data.responseData.translatedText;
    displayOutput(translatedText);
    showToast('Translation complete! ✨', 'success');
    statusBadge.style.display = 'inline-flex';

  } catch (err) {
    console.error('Translation error:', err);
    showToast('Translation failed. Check your internet connection. 🌐', 'error');
  } finally {
    setLoading(false);
  }
}

function displayOutput(text) {
  outputTextEl.textContent = text;
  outputTextEl.classList.add('has-text');
  outputTextEl.style.opacity = '0';
  outputTextEl.style.transform = 'translateY(8px)';
  requestAnimationFrame(() => {
    outputTextEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    outputTextEl.style.opacity = '1';
    outputTextEl.style.transform = 'translateY(0)';
  });
}

// ─── Loading State ─────────────────────────────────────────────────────────────
function setLoading(isLoading) {
  translateBtn.disabled = isLoading;
  loadingBarEl.style.display = isLoading ? 'block' : 'none';
  translateBtn.querySelector('.btn-text').textContent = isLoading ? 'Translating...' : 'Translate';
}

// ─── Copy to Clipboard (with file:// fallback) ─────────────────────────────────
async function copyToClipboard(text) {
  // Modern API (works on HTTPS / localhost)
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // Fallback: create a hidden textarea, select, execCommand (works on file://)
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  const ok = document.execCommand('copy');
  document.body.removeChild(ta);
  if (!ok) throw new Error('execCommand copy failed');
}

copyBtn.addEventListener('click', async () => {
  if (!translatedText) {
    showToast('Nothing to copy yet! Translate something first.', 'error');
    return;
  }
  try {
    await copyToClipboard(translatedText);
    copyBtn.classList.add('copied');
    copyBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>`;
    showToast('Copied to clipboard! 📋', 'success');
    setTimeout(() => {
      copyBtn.classList.remove('copied');
      copyBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>`;
    }, 2200);
  } catch {
    showToast('Copy failed. Please select the text manually.', 'error');
  }
});

// ─── Text-to-Speech ────────────────────────────────────────────────────────────
function speak(text, langCode, btn) {
  if (!('speechSynthesis' in window)) {
    showToast('Text-to-Speech is not supported in your browser. Try Chrome.', 'error');
    return;
  }

  // Cancel any ongoing speech
  if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    window.speechSynthesis.cancel();
    document.querySelectorAll('.tts-btn').forEach(b => {
      b.classList.remove('speaking');
      b.dataset.speaking = 'false';
    });
    // If pressing the same button, just stop
    if (btn.dataset.speaking === 'true') return;
  }

  if (!text || !text.trim()) {
    showToast('No text to speak!', 'error');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  if (langCode && langCode !== 'auto') {
    utterance.lang = langCode.replace('_', '-');
  }
  utterance.rate  = 0.9;
  utterance.pitch = 1.0;

  currentUtterance = utterance;
  btn.classList.add('speaking');
  btn.dataset.speaking = 'true';

  utterance.onend = () => {
    btn.classList.remove('speaking');
    btn.dataset.speaking = 'false';
    currentUtterance = null;
  };

  utterance.onerror = (e) => {
    console.error('SpeechSynthesis error:', e);
    btn.classList.remove('speaking');
    btn.dataset.speaking = 'false';
    currentUtterance = null;
    // "interrupted" fires when we manually cancel, don't show error for that
    if (e.error !== 'interrupted') {
      showToast('Speech synthesis error. Try a different browser.', 'error');
    }
  };

  // Chrome bug workaround: pause/resume to ensure speech starts
  window.speechSynthesis.speak(utterance);
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
}

sourceTtsBtn.addEventListener('click', () => {
  speak(sourceTextEl.value.trim(), sourceDropdown.getValue(), sourceTtsBtn);
});

targetTtsBtn.addEventListener('click', () => {
  if (!translatedText) {
    showToast('Translate something first before listening! 🔊', 'error');
    return;
  }
  speak(translatedText, targetDropdown.getValue(), targetTtsBtn);
});

// ─── Feature Pill Buttons (Functional) ────────────────────────────────────────
pillLangs.addEventListener('click', () => {
  // Open the source language dropdown to show all languages
  sourceDropdown.open();
  showToast('🚀 ' + LANGUAGES.length + ' languages supported! Search below.', 'success');
});

pillTts.addEventListener('click', () => {
  if (translatedText) {
    speak(translatedText, targetDropdown.getValue(), targetTtsBtn);
  } else if (sourceTextEl.value.trim()) {
    speak(sourceTextEl.value.trim(), sourceDropdown.getValue(), sourceTtsBtn);
  } else {
    showToast('Enter or translate some text first to use Text-to-Speech 🔊', 'error');
  }
});

pillCopy.addEventListener('click', () => {
  copyBtn.click(); // reuse copy logic
});

pillTranslate.addEventListener('click', () => {
  translate();
});

// ─── Toast Notifications ───────────────────────────────────────────────────────
function showToast(message, type = 'info') {
  clearTimeout(toastTimer);
  toastEl.textContent = message;
  toastEl.className = `toast ${type} show`;
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 3200);
}
