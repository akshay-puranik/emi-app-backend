const express = require("express");
const dbConnect = require("./configs/db");
const jobRoute = require("./routes/job.routes");

const app = express();
app.use(express.json());

app.use("/job",jobRoute);

app.get("/", (req, res) => res.send("mock-12 Backend"));

app.listen(8080, async () => {
  try {
    await dbConnect();
  } catch (error) {
    console.log("Error Connecting to Database!");
  }
  
  console.log("Server running at http://localhost:8080");
});
