const mongoose = require("mongoose");

const PriceDataSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true
    },

    marketName: {
      type: String,
      required: true
    },

    minPrice: {
      type: Number,
      required: true
    },

    maxPrice: {
      type: Number,
      required: true
    },

    avgPrice: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("PriceData", PriceDataSchema);
