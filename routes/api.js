const router = require("express").Router();
const Workout = require("../models/workout.js");

//get all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({
            date: -1
        })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//update workout to add an exercise
router.put("/api/workouts/:id", (req, res) => {
    Workout.update({
        _id: mongojs.ObjectId(req.params.id)
    }, {
        $push: {
            exercises: req.body
        }
    }, (err, results) => {
        if (err) {
            res.json(err)
        } else {
            res.json(results)
        }
    })


});



module.exports = router;