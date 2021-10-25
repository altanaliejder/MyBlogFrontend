import { AuthService } from './../../services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginFormGroup = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  hide = true
  ngOnInit(): void {

  }
  login() {
    console.log(this.loginFormGroup.value)
    if (this.loginFormGroup.valid) {
      let loginModel = Object.assign({}, this.loginFormGroup.value)
      console.log(loginModel)
      this.authService.login(loginModel).subscribe(response => {
        localStorage.setItem("token", response.token)
        localStorage.setItem("username", loginModel.username)
      })
    }
  }


}
