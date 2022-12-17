const express = require("express");
const { newJob, getPagedData } = require("../controllers/job.controller");

const jobRoute = express.Router();

jobRoute.get("/", async (req,res) => {

    let params = req.query;

    console.log(params)

    try {
        let all = await getPagedData(params);
        return res.send(all)
    } catch (error) { 
        return res.status(404).send("Error not found!")
    }

    return res.send("Job Route")
})



jobRoute.post("/new",async (req,res) => {

    const {company,city,location,role,level,contract,position,language} = req.body;
    

    if(!company || !city || !location || !role || !level || !contract || !position || !language){
        return res.status(400).send("Missing Data!")
    }

    try {
        await newJob(req.body);
        return res.status(200).send("Job added successfuly!")

    } catch (error) {
        return res.status(400).send("Error adding job to the list!");
    }

})


module.exports = jobRoute;