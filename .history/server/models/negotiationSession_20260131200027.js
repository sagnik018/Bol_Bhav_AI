const mongoose = require("mongoose");

const NegotiationSessionSchema = new mongoose.Schema(
  {
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor"
    },

    itemName: {
      type: String,
      required: true
    },

    buyerPrice: {
      type: Number,
      required: true
    },

    marketAvgPrice: {
      type: Number,
      required: true
    },

    suggestedAction: {
      type: String,
      enum: ["ACCEPT", "HOLD", "COUNTER", "WALK"],
      required: true
    },

    confidenceLevel: {
      type: String,
      enum: ["GREEN", "YELLOW", "RED"],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "NegotiationSession",
  NegotiationSessionSchema
);
