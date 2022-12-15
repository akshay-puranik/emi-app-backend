const productModel = require("../models/product.model");

const addProduct = async (item) => {
  try {
    const newProd = await productModel.create(item);
    return newProd;
  } catch (error) {
    throw new Error("Failed to add to Database!");
  }
};

const deleteProduct = async (id) => {
    try {
        let removed = await productModel.findByIdAndDelete(id);
        return removed;
    } catch (error) {
        throw new Error("Failed to delete from Database!")
    }
}

const bookmarkProduct = async (id) => {
    try {
        let prod = await productModel.findByIdAndUpdate(id,{bookmarked:true},{new:true});
        console.log(prod)
        return prod
    } catch (error) {
        throw new Error("Failed to update in Database!");
    }
}

const getAllProducts = async () => {
    let prods = await productModel.find({});
    return prods;
}

const getBookmarkedProducts = async () => {
    let prods = await productModel.find({bookmarked:true});
    return prods;
}

module.exports = {addProduct,deleteProduct,bookmarkProduct,getAllProducts,getBookmarkedProducts};
