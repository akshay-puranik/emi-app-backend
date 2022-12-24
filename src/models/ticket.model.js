const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  bookmarked: { type: Boolean, default: false },
  message: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const ticketModel = mongoose.model("ticket", ticketSchema);

module.exports = ticketModel;
