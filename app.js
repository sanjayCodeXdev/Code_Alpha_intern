/**
 * LinguaFlow – Language Translation Tool
 * CodeAlpha AI Internship · Task 1
 *
 * Features:
 *  - Translate between 100+ languages using MyMemory (free, no API key needed)
 *  - Language swap, character counter
 *  - Text-to-Speech (Web Speech API) for both source & translated text
 *  - Copy-to-clipboard with animated feedback
 *  - Loading indicator & toast notifications
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

// ─── DOM References ─────────────────────────────────────────────────────────────
const sourceLangEl  = document.getElementById('sourceLang');
const targetLangEl  = document.getElementById('targetLang');
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

// ─── State ─────────────────────────────────────────────────────────────────────
let translatedText  = '';
let toastTimer      = null;
let currentUtterance = null;

// ─── Init ─────────────────────────────────────────────────────────────────────
function populateLanguageSelects() {
  LANGUAGES.forEach(lang => {
    const optSource = new Option(lang.name, lang.code);
    const optTarget = new Option(lang.name, lang.code);
    sourceLangEl.add(optSource);
    targetLangEl.add(optTarget);
  });
  // Defaults: auto-detect → English
  sourceLangEl.value = 'auto';
  targetLangEl.value = 'en';
}

populateLanguageSelects();

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
  const srcVal = sourceLangEl.value;
  const tgtVal = targetLangEl.value;

  // Don't swap if source is "auto-detect"
  if (srcVal === 'auto') {
    showToast('Cannot swap when source is "Detect Language"', 'error');
    return;
  }

  sourceLangEl.value = tgtVal;
  targetLangEl.value = srcVal;

  // Swap the text content too
  const currentOutput = translatedText;
  if (currentOutput) {
    sourceTextEl.value = currentOutput;
    charCountEl.textContent = `${currentOutput.length} / 500`;
    clearOutput();
  }
});

// ─── Translation ───────────────────────────────────────────────────────────────
translateBtn.addEventListener('click', translate);

sourceTextEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    translate();
  }
});

async function translate() {
  const text = sourceTextEl.value.trim();
  if (!text) {
    showToast('Please enter some text to translate ✏️', 'error');
    sourceTextEl.focus();
    return;
  }

  const src = sourceLangEl.value;
  const tgt = targetLangEl.value;

  if (src === tgt && src !== 'auto') {
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

  // Fade-in animation
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

  if (isLoading) {
    translateBtn.querySelector('.btn-text').textContent = 'Translating...';
  } else {
    translateBtn.querySelector('.btn-text').textContent = 'Translate';
  }
}

// ─── Copy to Clipboard ─────────────────────────────────────────────────────────
copyBtn.addEventListener('click', async () => {
  if (!translatedText) {
    showToast('Nothing to copy yet!', 'error');
    return;
  }
  try {
    await navigator.clipboard.writeText(translatedText);
    copyBtn.classList.add('copied');
    copyBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>`;
    showToast('Copied to clipboard! 📋', 'success');
    setTimeout(() => {
      copyBtn.classList.remove('copied');
      copyBtn.innerHTML = `
        <svg id="copyIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>`;
    }, 2000);
  } catch {
    showToast('Copy failed. Please copy manually.', 'error');
  }
});

// ─── Text-to-Speech ────────────────────────────────────────────────────────────
function speak(text, langCode, btn) {
  if (!('speechSynthesis' in window)) {
    showToast('Text-to-Speech is not supported in your browser.', 'error');
    return;
  }

  // If already speaking, stop it
  if (currentUtterance && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    document.querySelectorAll('.tts-btn').forEach(b => b.classList.remove('speaking'));
    if (btn.dataset.speaking === 'true') {
      btn.dataset.speaking = 'false';
      return;
    }
  }

  if (!text || text.trim() === '') {
    showToast('No text to speak!', 'error');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);

  // Try to match language (skip auto-detect)
  if (langCode && langCode !== 'auto') {
    utterance.lang = langCode.replace('_', '-');
  }

  utterance.rate = 0.9;
  utterance.pitch = 1.0;

  currentUtterance = utterance;
  btn.classList.add('speaking');
  btn.dataset.speaking = 'true';

  utterance.onend = () => {
    btn.classList.remove('speaking');
    btn.dataset.speaking = 'false';
    currentUtterance = null;
  };

  utterance.onerror = () => {
    btn.classList.remove('speaking');
    btn.dataset.speaking = 'false';
    currentUtterance = null;
    showToast('Speech synthesis encountered an error.', 'error');
  };

  window.speechSynthesis.speak(utterance);
}

sourceTtsBtn.addEventListener('click', () => {
  speak(sourceTextEl.value.trim(), sourceLangEl.value, sourceTtsBtn);
});

targetTtsBtn.addEventListener('click', () => {
  speak(translatedText, targetLangEl.value, targetTtsBtn);
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
