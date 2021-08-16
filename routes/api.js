const router = require("express").Router();
// const Workout = require("../models/workout.js");
const db = require("../models");

// .sort({ date: -1 })
//get all workouts - SOMETHING NOT RIGHT HERE
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
            db.Workout.forEach(workout => {
                let total = 0;
                workout.exercises.forEach(e => {
                    total += e.duration;
                });
                workout.totalDuration = total;
            });

            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//update workout to add an exercise
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate({
        _id: req.params.id
    }, {
        $inc: {
            totalDuration: req.body.duration
        },
        $push: {
            exercises: req.body
        }
    }, {
        new: true
    }).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

//create new workout
router.post("/api/workouts", ({
    body
}, res) => {
    db.Workout.create({
            body
        })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// changed to get range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;