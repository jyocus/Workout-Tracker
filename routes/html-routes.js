const path = require("path");
const { model } = require("../models/modelWorkout");
const router = require("express").Router();




    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // route to exercise page
      router.get("/exercise", (req,res) => {
          res.sendFile(path.join(__dirname, '../public/exercise.html'));
      });
    //route to stats page
      router.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
      });

      


  
module.exports = router;