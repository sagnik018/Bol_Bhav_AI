const mongoose = require("mongoose");

const BuyerSchema = new mongoose.Schema(
  {
    buyerType: {
      type: String,
      enum: ["local", "wholesaler", "unknown"],
      default: "unknown"
    },

    offeredPrice: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Buyer", BuyerSchema);
