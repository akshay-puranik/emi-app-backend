const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnect = () => {
    mongoose.connect(
      "mongodb+srv://dbAdmin:dbAdmin@cluster0.zng1zvv.mongodb.net/mock-12"
    );
}

module.exports = dbConnect;