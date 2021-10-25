import { TokenModel } from './../../models/tokenModel';
import { LoginModel } from './../../models/loginModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  apiUrl = "http://localhost:8080/api/login"
  constructor(private httpClient: HttpClient) {
  }

  login(loginModel: LoginModel) {
    let body = new URLSearchParams();
    body.set('username', loginModel.username);
    body.set('password', loginModel.password);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }

    return this.httpClient.post<TokenModel>(this.apiUrl, body.toString(), options);
  }

  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }

}
