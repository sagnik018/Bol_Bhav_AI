export default function GuidanceIndicator({ action, language = "hindi" }) {
  const getActionText = (action) => {
    if (language === "english") {
      switch(action) {
        case "HOLD": return "HOLD - Wait for better price";
        case "ACCEPT": return "ACCEPT - Good deal!";
        case "WALK": return "WALK AWAY - Too low";
        default: return action;
      }
    } else {
      switch(action) {
        case "HOLD": return "रुकें - बेहतर दाम की प्रतीक्षा करें";
        case "ACCEPT": return "स्वीकार करें - अच्छा सौदा!";
        case "WALK": return "चले जाएं - बहुत कम कीमत";
        default: return action;
      }
    }
  };
  
  return (
    <div className={`guide ${action.toLowerCase()}`}>
      {getActionText(action)}
    </div>
  );
}