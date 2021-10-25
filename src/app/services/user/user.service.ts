import { User } from './../../models/user';
import { SignInModel } from './../../models/signInModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  apiUrl = "http://localhost:8080/api/users"



  signIn(signInModel: SignInModel): Observable<SignInModel> {
    return this.httpClient.post<SignInModel>(this.apiUrl + "/add", signInModel);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl + "/getall");
  }

  getUserByUsername(username: string): Observable<SingleResponseModel<User>> {
    return this.httpClient.get<SingleResponseModel<User>>(this.apiUrl + "/getuserbyusername?username=" + username);
  }

  getCurrentUser() {

    let username = localStorage.getItem("username");
    if (username != null) {
      return this.getUserByUsername(username)
    }
    else {
      return null;
    }
  }
  getUserById(userId: number): Observable<SingleResponseModel<User>> {
    return this.httpClient.get<SingleResponseModel<User>>(this.apiUrl + "/getuserbyid?userId=" + userId);
  }
}
