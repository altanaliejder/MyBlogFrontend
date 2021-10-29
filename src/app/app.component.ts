import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';

import { Component } from '@angular/core';
import { User } from './models/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-blog';
  routeName: any;
  isAuth: boolean;
  user = <User>{}

  constructor(private authService: AuthService, private userService: UserService) {
    this.getCurrentUser()
    this.isAuth = this.authService.isAuthenticated();

  }


  getCurrentUser() {
    this.userService.getCurrentUser()?.subscribe(response => {
      this.user = response.data
    })
  }

}
export class InputClearableExample {
  value = 'Clear me';
}
