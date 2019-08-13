import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from "../authentication.service";
import {User} from "../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  constructor(private _authentication: AuthenticationService,
              private  _router: Router) { }

  ngOnInit() {
    localStorage.clear();
    sessionStorage.clear();
  }
  registerUser(){
    this._authentication.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res);
          console.log(res.user);
          sessionStorage.setItem('registeredUser', res.user._id);
          sessionStorage.setItem('user_name', res.user.user_name);
          sessionStorage.setItem('first_name', res.user.first_name);
          sessionStorage.setItem('date', res.user.info.starting_date);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/athlete/athlete-info-form']);
        },
        err => console.log(err)
      )
  }
}
