// Initialize Web Speech API for listening (Speech-to-Text)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true; 
recognition.continuous = true;     

// Initialize Web Speech API for speaking (Text-to-Speech)
const synth = window.speechSynthesis;
window.utterances = []; 

// DOM Elements
const voiceBtn = document.getElementById('voice-btn');
const textInput = document.getElementById('searchInput');
const chatHistory = document.getElementById('chat-history');

let isConversing = false; 
let isAISpeaking = false; 
let silenceTimer = null;  
let finalTranscript = ""; // Persistent memory buffer that NEVER clears during pauses

// --- STEP 1: Handling Voice Button ---
voiceBtn.addEventListener('click', () => {
  if (!isConversing) {
    startConversing();
  } else {
    stopConversing();
  }
});

function startConversing() {
  isConversing = true;
  finalTranscript = "";
  if (textInput) textInput.value = "";
  voiceBtn.innerHTML = "🛑 Stop Chat"; 
  voiceBtn.style.backgroundColor = "#ff4444"; 
  voiceBtn.style.color = "white";
  try {
    recognition.start();
  } catch(e) {
    console.log("Mic already running");
  }
}

function stopConversing() {
  isConversing = false;
  isAISpeaking = false;
  finalTranscript = "";
  clearTimeout(silenceTimer);
  voiceBtn.innerHTML = "🎤"; 
  voiceBtn.style.backgroundColor = ""; 
  voiceBtn.style.color = "";
  recognition.stop();
  synth.cancel(); 
}

// --- STEP 2: Smart Speech Recognition (With Persistent Memory & 4s Pause Window) ---
recognition.onresult = (event) => {
  if (isAISpeaking) return;

  let interimTranscript = '';

  for (let i = event.resultIndex; i < event.results.length; i++) {
    const transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      finalTranscript += transcript + ' ';
    } else {
      interimTranscript += transcript;
    }
  }

  // Combine finalized speech history with whatever you are currently saying
  const currentFullText = (finalTranscript + interimTranscript).replace(/\s+/g, ' ').trim();

  // Show full sentence in the input box
  if (textInput) textInput.value = currentFullText;

  // Reset the silence timer every time a new word is detected
  clearTimeout(silenceTimer);

  // Wait 4 full seconds of total silence before sending to the AI
  silenceTimer = setTimeout(() => {
    if (currentFullText.length > 0 && isConversing && !isAISpeaking) {
      recognition.stop();
      const textToSend = currentFullText;
      finalTranscript = ""; // Clear memory buffer AFTER sending
      sendToAI(textToSend);
    }
  }, 4000); 
};

recognition.onerror = (event) => {
  console.error("Microphone error:", event.error);
  if (event.error === 'not-allowed' || event.error === 'audio-capture') {
    stopConversing();
    alert("Microphone Error: " + event.error + ". Please check your permissions.");
  }
};

recognition.onend = () => {
  // Restart mic automatically without wiping finalTranscript memory
  if (isConversing && !isAISpeaking && !synth.speaking) {
    setTimeout(() => {
      try {
        if (isConversing && !isAISpeaking) recognition.start();
      } catch(e) {}
    }, 300); 
  }
};

// --- HELPER: Strip symbols, emojis, and markdown before speaking ---
function cleanTextForSpeech(text) {
  if (!text) return "";

  let clean = text;
  clean = clean.replace(/\|/g, ' '); 
  clean = clean.replace(/[-_]{2,}/g, ''); 
  clean = clean.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
  clean = clean.replace(/[*#`_~]/g, '');
  clean = clean.replace(/[•]/g, '');
  clean = clean.replace(/\//g, ' or ');
  clean = clean.replace(/\bKsh\b/gi, 'Kenya Shillings');
  clean = clean.replace(/\bmax\b/gi, 'maximum');
  clean = clean.replace(/\s+/g, ' ').trim();

  return clean;
}

// --- STEP 3: Speaking the Text safely ---
function speakText(text) {
  if (!text) return;

  isAISpeaking = true;
  try { recognition.stop(); } catch(e) {}

  const spokenText = cleanTextForSpeech(text);
  const utterance = new SpeechSynthesisUtterance(spokenText);
  window.utterances.push(utterance); 

  utterance.onstart = function() {
    isAISpeaking = true;
  };

  utterance.onend = function() {
    isAISpeaking = false;
    finalTranscript = ""; // Reset memory buffer so the user starts fresh for their next question
    setTimeout(() => {
      if (isConversing) {
        try {
          recognition.start();
        } catch(e) {
          console.log("Mic already active");
        }
      }
    }, 800);
  };

  synth.speak(utterance);
}

// --- HELPER: Add bubbles to chat ---
function appendMessage(text, sender) {
  if (chatHistory.style.display !== 'flex') {
    chatHistory.style.display = 'flex';
  }
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('chat-bubble');
  msgDiv.classList.add(sender === 'user' ? 'user-msg' : 'ai-msg');
  msgDiv.textContent = text;
  chatHistory.appendChild(msgDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// --- STEP 4: Connecting to the Node Server ---
async function sendToAI(message) {
  appendMessage(message, 'user');
  if (textInput) textInput.value = '';

  appendMessage("Thinking...", 'ai');
  const loadingBubble = chatHistory.lastElementChild;

  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Server returned an error");
    }

    loadingBubble.textContent = data.reply;
    speakText(data.reply);
    
  } catch (error) {
    console.error("Error connecting to server:", error);
    loadingBubble.textContent = "Sorry, my server is having trouble! Please check the terminal.";
    isAISpeaking = false;
  }
}