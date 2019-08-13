const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const user_info_surveySchema = new Schema({
      starting_date_lbl: String,
      address_lbl: String,
      street: String,
      city: String,
      state: String,
      zip: String,
      cell_lbl: String,
      age_lbl: String,
      sex_lbl: String,
      doctor_type_lbl: String,
      is_doctor_approved_lbl: String,
      frequent_foods_lbl: String,
      craving_foods_lbl:  String,
      current_medications_lbl: String,
      culture_lbl: String,
      height_lbl: String,
      current_weight_lbl: String,
      stop_loosing_weight_lbl: String,
      desired_weight_lbl: String,
      abdomen_lbl: String,
      hip_lbl: String,
      primary_goal_lbl: String,
      secondary_goal_lbl: String,
      weekly_String_of_workouts_lbl: String,
      cardio_workout_lbl: String,
      resistance_workout_lbl: String,
      workout_length_lbl: String,
      daily_routine_lbl: String,
      intake_vitamins_lbl: String,
      intake_diet_pills_lbl: String,
      intake_minerals_lbl: String,
      supplements_lbl: String
});

module.exports = mongoose.model('user_info_survey', user_info_surveySchema, 'user_info_surveys');
