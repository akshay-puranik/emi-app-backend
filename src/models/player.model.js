const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name:{type:String,required:true},
    score:{type:Number,default:0},
    difficulty:{type:String,required:true},
})

const playerModel = mongoose.model("player",playerSchema);


module.exports = playerModel;