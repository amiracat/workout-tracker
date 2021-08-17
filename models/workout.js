const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Choose Resistance or Cardio."
        },
        name: {
            type: String,
            trim: true,
            required: "Choose name of exercise."
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
            default: 0
            //required only for resistance type
        },
        reps: {
            type: Number,
            default: 0
            //required only for resistance type
        },
        sets: {
            type: Number,
            default: 0
            //required only for resistance type
        },
        distance: {
            type: Number,
            default: 0
            //required only for cardio type
        }
    }],
    totalDuration: {
        type: Number,
        default: 0
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;