import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {
  FormArray, FormBuilder,
  FormsModule,
  ReactiveFormsModule, Validators,
} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import { UserInfoComponent } from './user-info/user-info.component';
import { UserInformationService } from "./user-information.service";
import { AthleteComponent } from './athlete_area/athlete/athlete.component';
import { CoachComponent } from './coach_area/coach/coach.component';
import { AthleteInfoFormComponent } from './athlete_area/athlete-info-form/athlete-info-form.component';
import { CoachAthleteInfoSurveyComponent } from './coach-athlete-info-survey/coach-athlete-info-survey.component';
import { AthleteInfoSurveyComponent } from './coach_area/athlete-info-survey/athlete-info-survey.component';
import {AuthenticationGuard} from "./authentication.guard";
import { AthleteHealthform1Component } from './athlete_area/athlete-healthform1/athlete-healthform1.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserInfoComponent,
    AthleteComponent,
    CoachComponent,
    AthleteInfoFormComponent,
    CoachAthleteInfoSurveyComponent,
    AthleteInfoSurveyComponent,
    AthleteHealthform1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, AuthenticationGuard, UserInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
