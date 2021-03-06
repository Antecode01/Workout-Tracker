const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSch = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      set: {
        type: Number,
      },
    },
  ],
  distance: {
    type: Number,
  },
});

const Workout = mongoose.model("workout", WorkoutSch);

module.exports = Workout;
