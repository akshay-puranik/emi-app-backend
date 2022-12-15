const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    quantity: { type: Number, required: true },
    priority: { type: String, required: true },
    bookmarked: { type: Boolean, default: false},
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
