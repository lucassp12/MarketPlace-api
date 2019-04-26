const mongoose = require("mongoose");

const Purchase = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  ad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ad",
    required: true
  },
  sold: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Purchase", Purchase);
