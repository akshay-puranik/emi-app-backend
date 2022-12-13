const { response } = require("express");
const express = require("express");
const { checkUser, newUser } = require("../controllers/userController");
const userRoute = express.Router();

userRoute.get("/", (req, res) => {
  res.send("here");
});

userRoute.post("/signup", async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).send("Missing Data!");
    return;
  }
  let user;
  try {
    user = await checkUser(email);
    if (user) {
      res.status(400).send("User Already Exists! Please Sign in!");
    } else {
      user = await newUser(req.body);
      return res.status(200).send("Signup Successful!");
    }
  } catch (error) {
    res.status(400).send("Error");
  }
});

userRoute.post("/getprofile", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).send("Missing Data!");
    return;
  }
  let user;
  try {
    user = await checkUser(email);
    if (user) {
      let { email, username } = user;
      res.status(200).send({ email: email, username: username });
    } else {
      res.status(404).send("User not found!");
    }
  } catch (error) {
    res.status(400).send("Error");
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("Missing Data!");
    return;
  }
  let user;
  try {
    user = await checkUser(email);
    if (user) {
      res.status(200).send({ message: "Successful", token: "123456" });
      console.log(user);
    } else {
      res.status(404).send("User not found!");
    }
  } catch (error) {
    res.status(400).send("Error");
  }
});

module.exports = userRoute;
