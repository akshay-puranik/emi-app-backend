const express = require("express");
const playerModel = require("../models/player.model");

const playerRoute = express.Router();

playerRoute.get("/", async (req, res) => {
  try {
    let allPlayers = await playerModel.find();
    return res.status(200).send(allPlayers);
  } catch (error) {
    return res.send("Error getting data!");
  }
  return res.send("player route");
});

playerRoute.post("/", async (req, res) => {
  const { name, difficulty } = req.body;
  if (!name || !difficulty) {
    return res.status(400).send("Missing Data!");
  }

  try {
    let newPlayer = await playerModel.create(req.body);
    return res.status(200).send(newPlayer);
  } catch (error) {
    return res.status(400).send("Unable to add player to db!");
  }
});

playerRoute.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, difficulty, score } = req.body;

  try {
    const current = await playerModel.findById(id);
    if (current.score < score) {
      let updated = await playerModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.send(updated);
    } else return res.send(current);
  } catch (error) {
    res.send("Error Updating!");
  }
});

module.exports = playerRoute;
