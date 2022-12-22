const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connection = async () => {
  await mongoose.connect(
    "mongodb+srv://dbAdmin:dbAdmin@cluster0.zng1zvv.mongodb.net/quiziota"
  );
};
module.exports = { connection };
