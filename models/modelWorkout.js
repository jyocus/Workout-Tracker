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
//Need to convert vituals to JSON
// (
//     toJSON:(
            virtuals: true
//}
//});
// )

trackerSchema.virtual('totalDuration').get(function() {
return this.exercises.reduce((sum, exercise) => {
    return sum + exercise.weight
    },0)
});

const NewWorkout = mongoose.model("Workout", trackerSchema);

module.exports = NewWorkout;