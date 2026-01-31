import { useState } from "react";

export default function MicButton({ onSpeech, language = "hindi" }) {
  const [isListening, setIsListening] = useState(false);
  
  const startMic = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = language === "hindi" ? "hi-IN" : "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onstart = () => {
      setIsListening(true);
    };
    
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      onSpeech(transcript);
      setIsListening(false);
    };
    
    recognition.onerror = (e) => {
      console.error("Speech recognition error:", e.error);
      setIsListening(false);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    recognition.start();
  };

  return (
    <button 
      className={`mic-btn ${isListening ? "listening" : ""}`} 
      onClick={startMic}
      disabled={isListening}
    >
      {isListening ? "🔴 Listening..." : "🎤 Click to Speak"}
    </button>
  );
}