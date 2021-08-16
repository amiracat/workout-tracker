const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require("path");

//routes to send to different html pages

// const dbWorkout = new Workout();

// Workout.create({ name: "workouts" })
//   .then(dbWorkout => {
//     console.log(dbWorkout);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

// router.post("/exercise", ({body}, res) => {
//   Workout.create(body)
//     .then(({_id}) => Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//       console.log(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
 });
 
 router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
 });

router.get("/stats", (req, res) => {
   res.sendFile(path.join(__dirname, "../public/stats.html"));
  });


  module.exports = router;
