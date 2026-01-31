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
      <h2>{language === "hindi" ? "बाज़ार में सही दाम पाएं" : "Get the Right Price in the Market"}</h2>
      <button onClick={() => navigate("/negotiate")}>
        {language === "hindi" ? "बातचीत शुरू करें" : "Start Negotiation"}
      </button>
    </div>
  );
}
