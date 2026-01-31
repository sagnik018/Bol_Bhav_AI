import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("hindi");
  
  const toggleLanguage = () => {
    const newLang = language === "hindi" ? "english" : "hindi";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };
  
  return (
    <div className="container">
      <button onClick={toggleLanguage} className="lang-toggle">
        {language === "hindi" ? "EN" : "हि"}
      </button>
      
      <div className="hero">
        <h1>
          {language === "hindi" ? "बोल भाव AI" : "Bol Bhav AI"}
        </h1>
        <p className="subtitle">
          {language === "hindi" 
            ? "बाज़ार में सही दाम पाएं - आवाज़ से नेगोशिएशन सहायता" 
            : "Get the Right Price in the Market - Voice-Based Negotiation Assistant"
          }
        </p>
        
        <div className="features">
          <div className="feature">
            <div className="feature-icon">🎤</div>
            <h3>{language === "hindi" ? "आवाज़ इनपुट" : "Voice Input"}</h3>
            <p>{language === "hindi" ? "हिंदी और अंग्रेज़ी में बोलें" : "Speak in Hindi and English"}</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💡</div>
            <h3>{language === "hindi" ? "स्मार्ट सलाह" : "Smart Guidance"}</h3>
            <p>{language === "hindi" ? "तुरंत नेगोशिएशन टिप्स" : "Instant negotiation tips"}</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3>{language === "hindi" ? "बाज़ार जानकारी" : "Market Intelligence"}</h3>
            <p>{language === "hindi" ? "रीयल-टाइम प्राइस एनालिसिस" : "Real-time price analysis"}</p>
          </div>
        </div>
        
        <button onClick={() => navigate("/negotiate")} className="btn btn-primary">
          {language === "hindi" ? "बातचीत शुरू करें" : "Start Negotiation"}
        </button>
      </div>
    </div>
  );
}
