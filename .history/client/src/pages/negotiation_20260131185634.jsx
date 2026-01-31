import MicButton from "../components/MicButton";
import { sendVoice } from "../services/api";

export default function Negotiation() {
  const handleSpeech = async (text) => {
    await sendVoice(text);
    window.location.href = "/result";
  };

  return (
    <div className="container">
      <h2>अपना भाव बोलिए</h2>
      <MicButton onSpeech={handleSpeech} />
    </div>
  );
}
