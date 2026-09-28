import React, { useState, useEffect, useRef } from 'react';
import './main.css';
import { initialData } from './quantumData'; 
import QuantumField from './QuantumField'; 

function Main() {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      term: "AURA SYSTEM", 
      text: "System initialized.Type 'Guide' to begin.", 
      mechanics: null, 
      importance: null, 
      insight: null,
      meta: "Latency: 1ms | Confidence: 100%" 
    }
  ]);
  const [input, setInput] = useState('');
  
  // Safety check for data
  const [knowledgeBase] = useState(initialData || []); 
  
  const [currentTopic, setCurrentTopic] = useState(null); 
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [suggestions, setSuggestions] = useState(["Guide", "Entanglement", "Tunneling"]);

  const [voices, setVoices] = useState([]);
  const chatEndRef = useRef(null);

  // --- VOICE LOADER ---
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices(); 
  }, []);

  // --- VOICE ENGINE ---
  const speak = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    let selectedVoice = voices.find(v => v.name.includes("Google English India")) || 
                        voices.find(v => v.name.includes("Microsoft Heera")) || 
                        voices.find(v => v.name.includes("Veena")) || 
                        voices.find(v => v.lang === "en-IN") ||
                        voices.find(v => v.name.includes("Zira"));

    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.pitch = 0.9; 
    utterance.rate = 0.9; // Slightly faster than "calm" for "advanced" feel
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // --- 🌟 NEW: ADVANCED TEXT HIGHLIGHTER ---
  const formatText = (text) => {
    // Splits text and highlights key terms. 
    // In a real app, you'd use a regex, but for React safety we just return text here.
    // The CSS 'glow-text' class handles the visual advanced feel on the container.
    return text; 
  };

  // --- TYPING LOGIC ---
  const typeMessage = (item, isDeepDive = false) => {
    setIsTyping(true);
    
    const textToDisplay = isDeepDive ? item.deepDive : item.response;
    const spokenText = isDeepDive 
        ? item.deepDive 
        : `${item.response}. Here is how it works: ${item.mechanics || "Data loading"}`;

    speak(spokenText);

    // GENERATE FAKE METADATA FOR SCI-FI FEEL
    const latency = Math.floor(Math.random() * 20) + 5;
    const confidence = (Math.random() * (99.9 - 95.0) + 95.0).toFixed(1);

    setMessages(prev => [...prev, { 
      sender: 'bot', 
      term: isDeepDive ? `DEEP DIVE: ${item.term}` : item.term, 
      text: "", 
      mechanics: isDeepDive ? null : item.mechanics,
      importance: isDeepDive ? null : item.importance,
      insight: isDeepDive ? null : item.insight,
      meta: `Latency: ${latency}ms | Quantum Confidence: ${confidence}%`
    }]);

    let i = -1;
    let currentText = "";

    const interval = setInterval(() => {
      i++;
      if (i === textToDisplay.length - 1) {
        clearInterval(interval);
        setIsTyping(false);
      }
      currentText += textToDisplay.charAt(i);
      
      setMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = newMsgs[newMsgs.length - 1];
        lastMsg.text = currentText; 
        return newMsgs;
      });
    }, 25); 
  };

  // --- INTELLIGENCE CORE ---
  const handleSend = (e, manualText = null) => {
    if (e) e.preventDefault();
    const textToSend = manualText || input;
    if (!textToSend.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: textToSend }]);
    setInput('');
    setSuggestions([]); 

    const lowerInput = textToSend.toLowerCase();

    // CHECK FOR "TELL ME MORE"
    const isRequestingMore = lowerInput.includes("more") || 
                             lowerInput.includes("deeper") || 
                             lowerInput.includes("explain");

    // SAFETY CHECK: Ensure knowledgeBase exists
    if (knowledgeBase && isRequestingMore && currentTopic && currentTopic.deepDive) {
        setTimeout(() => {
            typeMessage(currentTopic, true); 
            setSuggestions(["Guide", "New Topic"]);
        }, 600);
        return;
    }

    // STANDARD SEARCH
    const match = knowledgeBase && knowledgeBase.find(item => 
      item.keywords.some(k => lowerInput.includes(k))
    );

    if (match) {
      setCurrentTopic(match); 
      setTimeout(() => {
        typeMessage(match, false);
        setSuggestions(["Tell me more", "Why?", "Explain deeper"]);
      }, 600);
    } else {
      setTimeout(() => {
        const fallback = {
            term: "UNKNOWN PARAMETER",
            response: "Access to this specific data point is restricted or unavailable.",
            mechanics: null,
            importance: null,
            insight: "Try asking about 'Atoms', 'Dark Matter', or 'String Theory'.",
            meta: "Error: 404 | Neural Net Uncertainty"
        };
        speak(fallback.response);
        typeMessage(fallback, false);
        setSuggestions(["Atoms", "Entanglement", "Guide"]);
      }, 600);
    }
  };

  return (
    <div className="aura-container">
      <QuantumField />

      <div className="app-header">
        <div className="header-content">
            <div className={`status-dot ${isSpeaking ? 'active' : ''}`}></div>
            AURA AI 
        </div>
        <span className="status-text">{isSpeaking ? 'TRANSMITTING DATA...' : 'SYSTEM ONLINE'}</span>
      </div>

      <div className="clean-chat">
        {messages.map((msg, index) => (
          <div key={index} className={`bubble-row ${msg.sender}`}>
            <div className="bubble">
              {/* TERMINAL HEADER */}
              {msg.term && <div className="bubble-term">
                  <span className="term-icon">◈</span> {msg.term}
              </div>}
              
              <div className="bubble-text">{formatText(msg.text)}</div>
              
              {msg.sender === 'bot' && msg.mechanics && (
                <div className="bubble-section">
                  <div className="section-title">⚙️ MECHANICS</div>
                  {msg.mechanics}
                </div>
              )}
              {msg.sender === 'bot' && msg.importance && (
                <div className="bubble-section">
                  <div className="section-title">🌟 IMPLICATIONS</div>
                  {msg.importance}
                </div>
              )}
              
              {msg.insight && <div className="bubble-insight">💡 {msg.insight}</div>}

              {/* NEW: SCI-FI METADATA FOOTER */}
              {msg.meta && <div className="bubble-meta">{msg.meta}</div>}
            </div>
          </div>
        ))}
        {isTyping && <div className="typing-indicator">ANALYZING<span className="blink">_</span></div>}
        <div ref={chatEndRef} />
      </div>

      <div className="bottom-deck">
        <div className="suggestion-row">
          {suggestions.map((s, i) => (
            <button key={i} className="chip" onClick={() => handleSend(null, s)}>{s}</button>
          ))}
        </div>
        <form className="minimal-input" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Input Quantum Query..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <button type="submit" className="send-btn">➤</button>
        </form>
      </div>
    </div>
  );
}

export default Main;
