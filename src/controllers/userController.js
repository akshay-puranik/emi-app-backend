const res = require("express/lib/response.js");
const mongoose = require("mongoose");
const userModel = require("../models/userModel.js");

const checkUser = async (email) => {
  try {
    let checked = await userModel.findOne({ email });
    return checked;
  } catch (error) {
    return false;
  }
};

const newUser = async ({ email, password, username }) => {
  try {
    let user = await userModel.create({ email, password, username });
    console.log(user);
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = { checkUser, newUser };
