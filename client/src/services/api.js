export const sendVoice = async (text) => {
    await fetch("http://localhost:5000/api/negotiate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ speech: text })
    });
  };
  