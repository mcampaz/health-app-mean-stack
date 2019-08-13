import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";
import { FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  constructor(private _authentication: AuthenticationService) { }

  ngOnInit() {
    localStorage.clear();
    sessionStorage.clear();
  }
  loginUser(){
    this._authentication.loginUser(this.loginUserData)
      .subscribe(
         res => {
          console.log(res);
          localStorage.setItem('token', res.token)
        },
        err => console.log(err)
      )
  }
}
