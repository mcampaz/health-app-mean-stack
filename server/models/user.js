const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    user_name: String,
    password: String,
    role: String,
    info: { starting_date: { type: Date, default: Date.now()},
        address: { city: String, state: String, zip: String }, cell: String, age: Number, sex: String,
        culture: String, doctor_type: String,
        is_doctor_approved: Boolean, frequent_foods: { food: { type: String } },
        craving_foods: { food: { type: String } },
        current_medications:{ medications: { type: String } }, height: Number,
        current_weight: Number, stop_loosing_weight: String, desired_weight: Number,
        abdomen: Number, hip: Number, primary_goal: String, secondary_goal: String,
        weekly_number_of_workouts: Number, cardio_workout: Number,
        resistance_workout: Number, workout_length: Number, intake_vitamins: Boolean,
        intake_diet_pills: Boolean, intake_minerals: Boolean, supplements: String,
        daily_routine: String
    },
    health_data: {},
    health_solution:{}
});

module.exports = mongoose.model('user', userSchema, 'users');
