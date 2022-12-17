const jobModel = require("../models/job.model");

const newJob = async (job) => {
  try {
    let newItem = await jobModel.create(job);
    return newItem;
  } catch (error) {
    console.log(error);
    throw new Error("Error adding item to database!");
  }
};

const getPagedData = async ({ limit, order, page = 1 }) => {
  const found = await jobModel
    .find()
    .sort({ createdAt: order == "asc" ? 1 : -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  return {
    page: page,
    data: found,
  };
};

module.exports = { newJob, getPagedData };
