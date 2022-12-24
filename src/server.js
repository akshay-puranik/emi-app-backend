const express = require("express");
const cors = require("cors");
const connection = require("./configs/db");
const userRoute = require("./routes/user.route");
const ticketRoute = require("./routes/ticket.route");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user",userRoute);
app.use("/ticket",ticketRoute);


app.get("/", (req, res) => res.send("Hello world"));

app.listen(PORT, async () => {
  try {
    await connection();
    console.log("connected to db");
  } catch (error) {
    console.log("Error connecting to db");
  }
  console.log("Server running at http://localhost:8080");
});
