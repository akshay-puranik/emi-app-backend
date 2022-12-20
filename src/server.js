const express = require("express");
const dbConnect = require("./configs/db");
const cors = require("cors");
const playerRoute = require("./routes/player.route");
const wordRoute = require("./routes/word.route");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/player",playerRoute);
app.use("/word",wordRoute);

app.get("/", (req, res) => res.send("word-game backend"));

app.listen(PORT, async () => {
  try {
    await dbConnect();
  } catch (error) {
    console.log("Error Connecting to Database!");
  }
  
  console.log("Server running at http://localhost:8080");
});
