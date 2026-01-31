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
      <h2>{language === "hindi" ? "अपना भाव बोलिए" : "State Your Price"}</h2>
      <MicButton onSpeech={handleSpeech} language={language} />
    </div>
  );
}
