const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connection = mongoose.connect(
  "mongodb+srv://dbAdmin:dbAdmin@cluster0.zng1zvv.mongodb.net/shopping-list"
);

module.exports = { connection };
