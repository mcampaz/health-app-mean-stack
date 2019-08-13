import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from "../../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-athlete-info-form',
  templateUrl: './athlete-info-form.component.html',
  styleUrls: ['./athlete-info-form.component.css']
})
export class AthleteInfoFormComponent implements OnInit {

  constructor(private fBuilder: FormBuilder, private _userInfoService: AuthenticationService,
              private  _router: Router  ) { }
  athleteInfoForm = this.fBuilder.group({
    starting_date:[''],
    address: this.fBuilder.group({
      city:['', Validators.required],
      state:['', Validators.required],
      zip:['', Validators.required]
    }),
    cell:['', Validators.required],
    age:['', Validators.required],
    sex:['Female'],
    doctor_type:['Both'],
    is_doctor_approved:['true'],
    frequent_foods:['', Validators.required],
    craving_foods:['', Validators.required],
    current_medications:['', Validators.required],
    culture:['', Validators.required],
    height:['', Validators.required],
    current_weight:['', Validators.required],
    stop_loosing_weight:['', Validators.required],
    desired_weight:['', Validators.required],
    abdomen:['', Validators.required],
    hip:['', Validators.required],
    primary_goal:['', Validators.required],
    secondary_goal:['', Validators.required],
    weekly_workouts:['', Validators.required],
    cardio_workout:['', Validators.required],
    resistance_workout:['', Validators.required],
    workout_length:['', Validators.required],
    daily_routine:['', Validators.required],
    intake_vitamins:['true'],
    intake_diet_pills:['true'],
    intake_minerals:['true'],
    supplements:['', Validators.required]
  });
  user = {
    id: '',
    user_name: '',
    first_name: '',
    starting_date: '',
    info: {
      starting_date: '',
      address: {
        city: '',
        state: '',
        zip: ''
      },
      cell: '',
      age: '',
      sex: '',
      doctor_type: '',
      is_doctor_approved: true,
      frequent_foods: '',
      craving_foods: '',
      current_medications: '',
      culture: '',
      height: '',
      current_weight: '',
      stop_loosing_weight: '',
      desired_weight: '',
      abdomen: '',
      hip: '',
      primary_goal: '',
      secondary_goal: '',
      weekly_workouts: '',
      cardio_workout: '',
      resistance_workout: '',
      workout_length: '',
      daily_routine: '',
      intake_vitamins: true,
      intake_diet_pills: true,
      intake_minerals: true,
      supplements: ''
    }
  };

  ngOnInit() {
    this.user['id'] = sessionStorage.getItem('registeredUser');
    this.user['starting_date'] = sessionStorage.getItem('date');
    this.user['user_name'] = sessionStorage.getItem('user_name');
    this.user['first_name'] = sessionStorage.getItem('first_name');
    this.updateDefaults();
  }

  updateDefaults() {
    let current_date =  (this.user['starting_date']).toLocaleString();
    this.athleteInfoForm.patchValue({
      starting_date: current_date
    });


  }

  onSubmit() {
    console.log(this.athleteInfoForm.value);
    this.user['info'] = this.athleteInfoForm.value;
    console.log(this.user);
    this._userInfoService.updateUserInfo(this.user)
      .subscribe(
        response => {
          console.log('Success!', response);
          this._router.navigate(['/athlete/athlete-healthform1']);
        },
        error => console.error('Error!', error)
      );
  }

}
