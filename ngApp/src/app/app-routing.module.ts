import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UserInfoComponent} from "./user-info/user-info.component";
import {CoachComponent} from "./coach_area/coach/coach.component";
import {AthleteInfoSurveyComponent} from "./coach_area/athlete-info-survey/athlete-info-survey.component";
import {AthleteComponent} from "./athlete_area/athlete/athlete.component";
import {AthleteInfoFormComponent} from "./athlete_area/athlete-info-form/athlete-info-form.component";
import {AuthenticationGuard} from "./authentication.guard";
import {AthleteHealthform1Component} from "./athlete_area/athlete-healthform1/athlete-healthform1.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user_info',
    component: UserInfoComponent,
    children: [{
      path: './athlete_area/athlete-info-form',
      component: AthleteInfoFormComponent,
     // canActivate: [AuthenticationGuard]
    }
  ]
  },
  {
    path: 'coach',
    component: CoachComponent,
    children: [{
      path: 'athlete-info-survey',
      component: AthleteInfoSurveyComponent,
      canActivate: [AuthenticationGuard]
    }]
  },
  {
    path: 'athlete',
    component: AthleteComponent,
    children: [{
        path: 'athlete-info-form',
        component: AthleteInfoFormComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'athlete-healthform1',
        component: AthleteHealthform1Component,
        // canActivate: [AuthenticationGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
