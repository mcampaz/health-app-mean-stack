import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  constructor(private _authentication: AuthenticationService) { }

  ngOnInit() {
  }
  loginUser(){
    this._authentication.loginUser(this.loginUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
