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
  
  router.post("/api/workouts/bulk", ({ body }, res) => {
    NewWorkout.insertMany(body)
      .then(workoutTracker => {
        res.json(workoutTracker);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workouts", (req, res) => {
    NewWorkout.find({})
      .sort({ date: -1 })
      .then(workoutTracker => {
        res.json(workoutTracker);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;