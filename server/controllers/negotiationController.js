const { getGuidance } = require("./negotiationService");

let lastResult = null;

exports.negotiate = (req, res) => {
  const price = parseInt(req.body.speech.match(/\d+/)[0]);
  const market = { min: 80, max: 120 };

  const action = getGuidance(price, market);
  lastResult = { action };

  res.json({ success: true });
};

exports.getResult = (req, res) => {
  res.json(lastResult);
};
