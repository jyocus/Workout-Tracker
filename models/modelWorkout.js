const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    name: {
        type: String,
        trim:true,
        required: [true, 'Name of Workout']
    },
    weight: {
        type: Number,
        required: 'Weight (lbs)'
    },
    reps: {
        type: Number,
        required: 'How many reps?'
    },
    sets: {
        type: Number,
        required: 'How many sets?'
    },
    date: {
        type: Date,
        default: Date.now
      }


});

const NewWorkout = mongoose.model("New Workout", trackerSchema);

module.exports = NewWorkout;