import { SearchStoryComponent } from './../search-story/search-story.component';
import { StoryService } from './../../services/story/story.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Form, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
  providers: [SearchStoryComponent],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  options: FormGroup
  searchText: any;
  isOpen = true;

  constructor(private fb: FormBuilder, private searchComponent: SearchStoryComponent) {
    this.options = this.fb.group({
      searchControl: ["",]
    })

  }

  ngOnInit(): void {

  }


  search() {
    let keyword = Object.assign({}, this.options.value)
    this.searchText = keyword["searchControl"]
    console.log(this.searchText)
    //this.searchComponent.keyword = searching
    //this.searchComponent.searchi(searching)
    //this.searchComponent.ngOnInit()
  }


}
