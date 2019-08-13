import { Component, OnInit } from '@angular/core';
import { UserInformationService } from "../user-information.service";
import { User } from "../models/user";
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {

  start_date: Date = new Date();

  userInfoData = new User('Mario', 'Campaz','',
    'marilin','', 'Athlete',
    { starting_date: this.start_date,
          address:'',
          cell: '555-555-5555', age: 60, sex: 'Male', culture: '',
          doctor_type: 'None',
          is_doctor_approved: true,
          frequent_foods: {food:['papa', 'yucca', 'platano']},
          craving_foods: {food: ['papaya', 'yucca frita']},
          current_medications: {medications: ['viagra', 'pilorex']},
          height: 6.4, current_weight: 300,
          stop_loosing_weight: '2020/12/31',
          desired_weight: 240, abdomen: 50, hip: 30,
          primary_goal: '', secondary_goal: '', weekly_number_of_workouts: 4,
          cardio_workout: 2, resistance_workout: 2, workout_length: 45,
          intake_vitamins: true, intake_diet_pills: true, intake_minerals: true,
          supplements: '', daily_routine: ''
          }, {}, {}
  );
  doctorType: string[] = ['Allopath', 'Naturopath', 'None' ];
  constructor(private _user_information: UserInformationService) {}
  ngOnInit() {
  }
  addInfoUser(userForm){
    console.log(userForm);
    this._user_information.addInfoUser(this.userInfoData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
