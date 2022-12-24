const express = require("express");
const {
  checkUser,
  createUser,
  varifyUser,
} = require("../controllers/user.controllers");
const jwt = require("jsonwebtoken");

const userRoute = express.Router();

userRoute.get("/", (req, res) => {
  return res.send("here");
});

userRoute.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Missing Data!");
  }

  try {
    let user = await checkUser(req.body);

    if (user.length) return res.status(400).send("User Already Exists!");
    else {
      let user = await createUser(req.body);
      if (user) return res.status(200).send("Signup Successful!");
    }
  } catch (error) {
    return res.send(error);
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Missing Data!");
  }

  try {
    let user = await varifyUser(req.body);

    if (user == "Invalid Credentials!") {
      res.status(400).send(user);
    } else {
      let token = jwt.sign(
        { userID: user._id, userName: user.name },
        "Secret_KEY",
        {
          expiresIn: "1hr",
        }
      );
      res
        .status(200)
        .send({ message: "Login Successful!", token: token, userName: user.userName });
    }
  } catch (error) {
    return res.send(error);
  }
});

module.exports = userRoute;
