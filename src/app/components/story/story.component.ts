import { UserService } from './../../services/user/user.service';
import { Story } from './../../models/story';


import { Component, OnInit } from '@angular/core';

import { StoryService } from 'src/app/services/story/story.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  providers: [StoryService],
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  stories: Story[] = []
  constructor(private storyService: StoryService, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["subjectId"]) {
        this.getStoriesToSubject(params["subjectId"])
      }
      else if (params["userId"]) {
        this.getStoriesByUserId(params["userId"])
      }
      else {
        this.getStories()
      }
    })


  }
  getStories() {
    this.storyService.getStories().subscribe(response => {
      this.stories = response.data
    })
  }

  getStoriesToSubject(subjectId: number) {
    this.storyService.getStoriesToSubject(subjectId).subscribe(response => {
      this.stories = response.data
    })
  }

  getStoriesByUserId(userId: number) {
    this.storyService.getStoriesByUserId(userId).subscribe(response => {
      this.stories = response.data;
    })
  }


}
