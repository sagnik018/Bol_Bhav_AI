import MicButton from "../components/micbutton";
import { sendVoice } from "../services/api";
import { useState, useEffect } from "react";

export default function Negotiation() {
  const [language, setLanguage] = useState("hindi");
  
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "hindi";
    setLanguage(savedLang);
  }, []);
  
  const toggleLanguage = () => {
    const newLang = language === "hindi" ? "english" : "hindi";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };
  
  const handleSpeech = async (text) => {
    await sendVoice(text);
    window.location.href = "/result";
  };

  return (
    <div className="container">
      <button onClick={toggleLanguage} className="lang-toggle">
        {language === "hindi" ? "EN" : "हि"}
      </button>
      
      <div className="card">
        <h2>{language === "hindi" ? "अपना भाव बोलिए" : "State Your Price"}</h2>
        <p className="subtitle">
          {language === "hindi" 
            ? "माइक्रोफोन बटन दबाएं और अपनी कीमत बोलें" 
            : "Click the microphone button and speak your price"
          }
        </p>
        
        <div className="voice-interface">
          <MicButton onSpeech={handleSpeech} language={language} />
          
          <div className="voice-tips">
            <h4>{language === "hindi" ? "उदाहरण:" : "Examples:"}</h4>
            <div className="example-phrases">
              <span className="phrase">
                {language === "hindi" ? "सौ रुपये" : "One hundred rupees"}
              </span>
              <span className="phrase">
                {language === "hindi" ? "पचास रुपये" : "Fifty rupees"}
              </span>
              <span className="phrase">
                {language === "hindi" ? "दो सौ" : "Two hundred"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
