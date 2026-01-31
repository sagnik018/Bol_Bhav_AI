const mongoose = require("mongoose");

module.exports = mongoose.model("PriceData", {
  item: String,
  min: Number,
  max: Number
});
