import { Component, OnInit } from '@angular/core';
import {UserInfoSurvey} from "../../models/user-info-survey";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormControlName, FormGroup} from "@angular/forms";
import {UserInformationService} from "../../user-information.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector:  'app-athlete-info-survey',
  templateUrl:  './athlete-info-survey.component.html',
  styleUrls: ['./athlete-info-survey.component.css']
})

export class AthleteInfoSurveyComponent implements OnInit {
  userInfoSurvey = {};
  formInfo = [];
  result = {};
  labels_code = [
    "starting_date_lbl",
    "address_lbl",
    "city",
    "state",
    "zip",
    "cell_lbl",
    "age_lbl",
    "sex_lbl",
    "doctor_type_lbl",
    "is_doctor_approved_lbl",
    "frequent_foods_lbl",
    "craving_foods_lbl",
    "current_medications_lbl",
    "culture_lbl",
    "height_lbl",
    "current_weight_lbl",
    "stop_loosing_weight_lbl",
    "desired_weight_lbl",
    "abdomen_lbl",
    "hip_lbl",
    "primary_goal_lbl",
    "secondary_goal_lbl",
    "weekly__of_workouts_lbl",
    "cardio_workout_lbl",
    "resistance_workout_lbl",
    "workout_length_lbl",
    "daily_routine_lbl",
    "intake_vitamins_lbl",
    "intake_diet_pills_lbl",
    "intake_minerals_lbl",
    "supplements_lbl",
  ];
  labels = [
    "Date",
    "Address",
    "Street",
    "City",
    "State",
    "Zip",
    "Cell",
    "Age",
    "Sex",
    "What type of doctor do you visit?",
    "Has your doctor ever said that you have a heart condition and that you should only do physical activity recommended by a doctor?",
    "List the kind of foods you eat the most",
    "List the Kind of food you CRAVE the most",
    "Please list any medication that you are currently taking",
    "Cultural Background",
    "Height",
    "Current Weight",
    "Time when stopped losing weight",
    "Desirable Weight",
    "Abdomen",
    "Hip",
    "PRIMARY GOAL",
    "Secondary Goal",
    "How many times/wk do you feel you can exercise?",
    "Cardio",
    "Resistance",
    "How many minutes?",
    "Describe the activity in your daily (job) routine",
    "Do you take any vitamins?",
    "Diet pills?",
    "Minerals?",
    "What Supplements?"
  ];

  /*updateUserInfoForm: FormGroup;
  get alternateControls() {
    return this.updateUserInfoForm.get('inputControls') as FormArray;
  }*/
  constructor(private fb: FormBuilder, private _userInformationService: UserInformationService) {
  }

  updateUserInfoForm = this.fb.group({});

  ngOnInit() {
    this.userInfoSurvey = this._userInformationService.addInfoUser(this.userInfoSurvey)
      .subscribe(
        response => {
          console.log('Success!', response);
          Object.entries(response).forEach(entry => {
            let key = entry[0];
            let value = entry[1];
            this.formInfo.push([key, value]);
          });
          this.result = response;
        },
        error => console.error('Error!', error)
      );
    /*for (let mycontrol of this.formInfo){
      this.updateUserInfoForm.addControl(mycontrol[0], FormControl);
    }*/
  }

  updateInfoForm() {
    console.log(JSON.stringify(this.formInfo));
    let val = { };
   // val.push(this.formInfo[0]);
    //this.formInfo.forEach(item =>{ val.JSON.stringify(item[0], item[1])});
    console.log(this.formInfo);
   /* this.userInfoSurvey = this._userInformationService.updateInfoForm(JSON.stringify(this.formInfo))
      .subscribe(
        response => {
          console.log('Success!', response);
          Object.entries(response).forEach(entry => {
            let key = entry[0];
            let value = entry[1];
            this.formInfo.push([key, value]);
          });
        },
        error => console.error('Error!', error)
      );*/
  }
}
