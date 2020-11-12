const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: [true, 'Exercise Type']
            },

            name: {
                type: String,
                trim: true,
                required: [true, 'Name of Workout']
            },

            duration: {
                type: Number,
                required: 'Time (in minutes)'
            },

            weight: {
                type: Number,

            },
            reps: {
                type: Number,

            },
            sets: {
                type: Number,

            }


        }
    ]
})
//Need to convert vituals to JSON
// (
//     toJSON:(
virtuals: true
//}
//});
// )

trackerSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((sum, exercise) => {
        return sum + exercise.weight
    }, 0)
});

const NewWorkout = mongoose.model("Workout", trackerSchema);

module.exports = NewWorkout;