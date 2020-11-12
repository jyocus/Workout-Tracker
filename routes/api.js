const router = require("express").Router();
const NewWorkout = require("../models/modelWorkout.js");

router.post("/api/workouts", ({ body }, res) => {
    NewWorkout.create(body)
      .then(workoutTracker => {
        res.json(workoutTracker);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  
  router.get("/api/workouts", (req, res) => {
    NewWorkout.find({})
      .then(workoutTracker => {
        res.json(workoutTracker);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req,res) => {
      NewWorkout.find({}).limit(7)
      .then(workoutTracker => {
        res.json(workoutTracker);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  })

  router.put("/api/workouts/:id", (req,res) => {
      NewWorkout.findByIdAndUpdate(req.params.id, 
        {$push:{exercises:req.body}},
        {new:true}) 
        .then(workoutTracker => {
            res.json(workoutTracker);
          })
          .catch(err => {
            res.status(400).json(err);
          });
  });
  
  module.exports = router;