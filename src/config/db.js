const mongoose = require('mongoose')

const dbConnect = async () => {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://dbAdmin:dbAdmin@cluster0.zng1zvv.mongodb.net/test"
    );
}

module.exports = {dbConnect}