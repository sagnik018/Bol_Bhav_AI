exports.getGuidance = (buyer, market) => {
    if (buyer < market.min) return "WALK";
    if (buyer > market.max) return "ACCEPT";
    return "HOLD";
  };
  