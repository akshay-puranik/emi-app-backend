const express = require("express");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const { connection } = require("./configs/db");
const questionModel = require("./models/question.model");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const { category, difficulty, noquestions } = req.query;

  try {
    let arr = await await questionModel.find({
      category: category,
      difficulty: difficulty,
    });

    arr.splice(
      arr.length - noquestions > 0 ? arr.length - noquestions : arr.length
    );

    return res.status(200).send(arr);
  } catch (error) {
    return res.status(400).send("Something went wrong!");
  }
});

app.listen(PORT, async () => {
  try {
    await connection();
  } catch (error) {
    console.log("Error connecting to db!");
  }
  console.log("Server running at http://localhost:8080");
});
