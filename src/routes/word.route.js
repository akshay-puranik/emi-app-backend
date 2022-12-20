const express = require("express");

const wordRoute = express.Router();

wordRoute.get("/", (req, res) => {
  let { difficulty } = req.body;
  if (!difficulty) difficulty = "low";

  let letters = "abcdefghijklmnopqrstuvwxyz";

  if (difficulty == "low") {
    min = 1;
    max = 3;
  } else if (difficulty == "med") {
    min = 2;
    max = 4;
  } else if (difficulty == "high") {
    min = 3;
    max = 5;
  }
  let random = Math.floor(Math.random() * (max - min + 1) + min);

  let word = "";

  for (let i = 0; i < random; i++) {
    word += letters[Math.floor(Math.random() * (26))];
  }

  return res.send({ word: word });
//   return res.send("hi");
});

module.exports = wordRoute;
 