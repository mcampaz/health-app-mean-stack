import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  // url routing to the data backend server
  private _user_info_formUrl = "http://localhost:3000/api/user_info_form";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient) { }
  // add user information and save into data server
  addInfoUser(user_info_survey){
    return this.http.get<any>(this._user_info_formUrl, user_info_survey);
  }
  updateInfoForm(user_info_survey){
    return this.http.post<any>(this._user_info_formUrl, user_info_survey);
  }
}
