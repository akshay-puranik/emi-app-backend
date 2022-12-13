const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./src/config/db");
const emiRoute = require("./src/routes/emiRoute");
const userRoute = require("./src/routes/userRoute");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors())

app.use("/user", userRoute);
app.use("/emi", emiRoute);

app.get("/", (req, res) => res.send("Hello"));

app.listen(PORT, async () => {
  await dbConnect();
  console.log("Server running at http://localhost:8080");
});
