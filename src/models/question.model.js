const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  category: { type: String },
  type: { type: String },
  difficulty: { type: String },
  question: { type: String },
  correct_answer: { type: String },
  incorrect_answers: { type: Array },
});

const questionModel = mongoose.model("question", questionSchema);

module.exports = questionModel;
 