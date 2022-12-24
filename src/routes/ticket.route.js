const express = require("express");
const { createTicket } = require("../controllers/ticket.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

const ticketRoute = express.Router();

ticketRoute.use(authMiddleware);

ticketRoute.get("/", (req, res) => {
  return res.send("here");
});

ticketRoute.post("/create", async (req, res) => {
  const { category, title, message } = req.body;

  if (!category || !title || !message) {
    return res.status(400).send("Missing data!");
  }

  try {
    let ticket = await createTicket(req.body);
    console.log(ticket)
    return res
      .status(200)
      .send({ message: "Ticket created Successfully!", data: ticket });
  } catch (error) {
    return res.status(400).send(error);
  }
});

ticketRoute.get("/:id", (req, res) => {});

module.exports = ticketRoute;
