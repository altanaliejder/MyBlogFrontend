import { User } from 'src/app/models/user';
import { AuthService } from './../../services/auth/auth.service';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { FormBuilder, FormGroup, } from '@angular/forms';

@Component({
  // animations: [
  //   trigger('openClose', [
  //     // ...
  //     state('open', style({
  //       opacity: 1,
  //     })),
  //     state('closed', style({
  //       visibility: 'hidden',
  //       height: 0,
  //       opacity: 0,
  //       width: 0,

  //     })),
  //     transition('open => closed', [
  //       animate('1s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s')
  //     ]),
  //   ]),
  // ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  options: FormGroup
  searchText: any;
  isAuth: boolean;
  isOpen = false;
  user = <User>{}

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.options = this.fb.group({
      searchControl: ["",]
    })
    this.isAuth = this.authService.isAuthenticated()
  }
  ngOnInit(): void {
  }
  toggle() {
    this.isOpen = true
  }


  search() {
    let keyword = Object.assign({}, this.options.value)
    this.searchText = keyword["searchControl"]
    console.log(this.searchText)
    //this.searchComponent.keyword = searching
    //this.searchComponent.searchi(searching)
    //this.searchComponent.ngOnInit()
  }
  logout() {
    localStorage.clear()
    window.location.reload()
  }


}
