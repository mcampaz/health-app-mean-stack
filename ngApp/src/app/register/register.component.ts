import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = { };
  constructor(private _authentication: AuthenticationService) { }

  ngOnInit() {
  }
  registerUser(){
    this._authentication.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
