export default function MicButton({ onResult }) {
    const startListening = () => {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "hi-IN";
      recognition.onresult = e => onResult(e.results[0][0].transcript);
      recognition.start();
    };
  
    return (
      <button className="mic-btn" onClick={startListening}>
        🎤 Listening...
      </button>
    );
  }
  