const userModel = require("../models/user.model");

const checkUser = async ({ email }) => {
  try {
    let user = await userModel.find({ email });
    if (user) return user;
  } catch (error) {
    throw new Error("Failed to lookup in Database!");
  }
};

const createUser = async (item) => {
  try {
    let user = await userModel.create(item);
    return user;
  } catch (error) {
    throw new Error("Failed to store in db!");
  }
};

const varifyUser = async ({ email, password }) => {
  try {
    let user = await userModel.findOne({ email });
    if (user.password === password) {
      return user;
    } else return "Invalid Credentials!"
  } catch (error) {
    throw new Error("Authentication Failed!");
  }
};

module.exports = { checkUser, createUser, varifyUser };
