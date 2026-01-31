const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: false
    },

    preferredLanguage: {
      type: String,
      default: "hi" // hi, en, bn etc.
    },

    marketLocation: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", VendorSchema);
