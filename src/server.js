const express = require("express");
const { connection } = require("./configs/db");
const PORT = process.env.PORT || 8080;
const app = express();
const cors = require("cors");
const productRoute = require("./routes/product.routes");

app.use(express.json());
app.use(cors());

app.use("/product",productRoute)

app.get("/", (req, res) => res.send("Hello world"));

app.listen(PORT, async () => {
  try {
    await connection;
  } catch (error) {
    console.log("Error connecting to Database");
  }

  console.log("Server running at http://localhost:8080");
});
