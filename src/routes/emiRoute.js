const express = require("express");
const res = require("express/lib/response");
const { checkUser } = require("../controllers/userController");

const emiRoute = express.Router();

emiRoute.post("/calculateemi", async (req, res) => {
  const { loanAmount, annual, duration, email } = req.body;

  if (!loanAmount || !annual || !duration || !email) {
    res.status(400).send("Missing Data!");
    return;
  }

  try {
    let user = await checkUser(email);
    if (user.email === email) {
      let r = annual / (12 * 100);

      let emi =
        (loanAmount * r * (1 + r) ** duration) / (1 + r) ** (duration - 1);
      let total = emi * duration;
      let interest = total - loanAmount;
      res
        .status(200)
        .send({ emi: emi, totalPayable: total, interest: interest });
      return;
    } else {
      return res.status(400).send("Please Try Again!");
    }
  } catch (error) {
    return res.status(400).send("Please Try Again!");
  }
});

module.exports = emiRoute;
