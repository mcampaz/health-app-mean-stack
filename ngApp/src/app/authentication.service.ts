import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // url routing to the data backend server
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _userUrl = "http://localhost:3000/api/user_info";

  constructor(private http: HttpClient) { }
  // register user and save into data server
  registerUser(user){
    return this.http.post<any>(this._registerUrl, user);
  }

  // login user and authenticate credentials in the server
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user);
  }

  // login guard authentication
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  updateUserInfo(user) {
    return this.http.put<any>(this._userUrl, user);
  }
}
