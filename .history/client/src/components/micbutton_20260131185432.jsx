export default function MicButton({ onSpeech }) {
    const startMic = () => {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "hi-IN";
      recognition.onresult = (e) => {
        onSpeech(e.results[0][0].transcript);
      };
      recognition.start();
    };
  
    return (
      <button className="mic-btn" onClick={startMic}>
        🎤 बोलिए
      </button>
    );
  }
  