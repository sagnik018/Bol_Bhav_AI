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
      .then(data => setResult(data));
  }, []);
  
  const toggleLanguage = () => {
    const newLang = language === "hindi" ? "english" : "hindi";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  if (!result) return <p>{language === "hindi" ? "लोड हो रहा है..." : "Loading..."}</p>;

  return (
    <div className="container">
      <button onClick={toggleLanguage} className="lang-toggle">
        {language === "hindi" ? "EN" : "हि"}
      </button>
      <h2>{language === "hindi" ? "सलाह" : "Advice"}</h2>
      <GuidanceIndicator action={result.action} language={language} />
    </div>
  );
}
