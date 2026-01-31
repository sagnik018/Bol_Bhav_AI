import { useEffect, useState } from "react";
import GuidanceIndicator from "../components/guidanceIndicator";

export default function Result() {
  const [result, setResult] = useState(null);
  const [language, setLanguage] = useState("hindi");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "hindi";
    setLanguage(savedLang);
    
    fetch("http://localhost:5000/api/result")
      .then(res => res.json())
      .then(data => setResult(data))
      .catch(err => console.error("Error fetching result:", err));
  }, []);
  
  const toggleLanguage = () => {
    const newLang = language === "hindi" ? "english" : "hindi";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const handleNewNegotiation = () => {
    window.location.href = "/negotiate";
  };

  if (!result) {
    return (
      <div className="container">
        <button onClick={toggleLanguage} className="lang-toggle">
          {language === "hindi" ? "EN" : "हि"}
        </button>
        <div className="loading">
          {language === "hindi" ? "लोड हो रहा है..." : "Loading..."}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <button onClick={toggleLanguage} className="lang-toggle">
        {language === "hindi" ? "EN" : "हि"}
      </button>
      
      <div className="result-container">
        <h2>{language === "hindi" ? "सलाह" : "Advice"}</h2>
        
        <GuidanceIndicator action={result.action} language={language} />
        
        {result.price && (
          <div className="price-info">
            <p className="detected-price">
              {language === "hindi" ? "पता चली कीमत:" : "Detected Price:"}
              <span className="price">₹{result.price}</span>
            </p>
            {result.speech && (
              <p className="speech-text">
                "{result.speech}"
              </p>
            )}
          </div>
        )}
        
        <div className="action-buttons">
          <button onClick={handleNewNegotiation} className="btn btn-primary">
            {language === "hindi" ? "नई बातचीत" : "New Negotiation"}
          </button>
          <button onClick={() => window.location.href = "/"} className="btn btn-secondary">
            {language === "hindi" ? "होम" : "Home"}
          </button>
        </div>
      </div>
    </div>
  );
}
