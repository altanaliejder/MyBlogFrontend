import { SignInModel } from './../../models/signInModel';
import { UserService } from './../../services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinFormControl: FormGroup
  constructor(private fb: FormBuilder, private signInService: UserService) {
    this.signinFormControl = fb.group({
      username: ["", Validators.required],
      email: ["", Validators.email],
      name: ["", Validators.required],
      surname: ["", Validators.required],
      password: ["", Validators.minLength(4)]
    })
  }
  hide = true
  ngOnInit(): void {

  }
  signIn() {

    if (this.signinFormControl.valid) {
      let signInModel = Object.assign({}, this.signinFormControl.value)
      console.log(signInModel)
      this.signInService.signIn(signInModel).subscribe(response => {

      })
    }
  }
}

