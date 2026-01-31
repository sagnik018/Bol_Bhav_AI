const { getGuidance } = require("./negotiationService");

let lastResult = null;

exports.negotiate = (req, res) => {
  const speech = req.body.speech || '';
  const match = speech.match(/\d+/);
  
  if (!match) {
    return res.status(400).json({ error: "No price detected in speech" });
  }
  
  const price = parseInt(match[0]);
  const market = { min: 80, max: 120 };

  const action = getGuidance(price, market);
  lastResult = { action, price, speech };

  res.json({ success: true, action, price });
};

exports.getResult = (req, res) => {
  res.json(lastResult);
};
