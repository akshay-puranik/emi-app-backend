const express = require("express");
const {
  addProduct,
  deleteProduct,
  bookmarkProduct,
  getAllProducts,
  getBookmarkedProducts,
} = require("../controllers/product.controller");

const productRoute = express.Router();


productRoute.get("/", async (req, res) => {
  try {
    let allProds = await getAllProducts();
    return res.send({ message: "All Products", data: allProds });
  } catch (error) {
    return res.send("Something Went Wrong!");
  }
});

productRoute.get("/bookmarked", async (req, res) => {
  try {
    let allProds = await getBookmarkedProducts();
    return res.send({ message: "All Products", data: allProds });
  } catch (error) {
    return res.send("Something Went Wrong!");
  }
});

productRoute.post("/add", async (req, res) => {
  const { title, quantity, priority, description } = req.body;

  if (!title || !quantity || !priority || !description) {
    return res.send("Missing Data!");
  }

  try {
    let newProd = await addProduct(req.body);
    return res
      .status(200)
      .send({ message: "Product Added Successfully!", data: newProd });
  } catch (error) {
    return res.status(400).send("Error!");
  }
});

productRoute.delete("/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let removed = await deleteProduct(id);
    res.status(200).send({ message: "Product Deleted!", data: removed });
  } catch (error) {
    return res.status(400).send(error);
  }
});

productRoute.patch("/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let updated = await bookmarkProduct(id);
    return res
      .status(200)
      .send({ message: "Product Bookmarked!", data: updated });
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = productRoute;
