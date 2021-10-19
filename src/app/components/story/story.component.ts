import { Story } from './../../models/story';


import { Component, OnInit } from '@angular/core';

import { StoryService } from 'src/app/services/story/story.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  providers: [StoryService],
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  stories: Story[] = []
  constructor(private storyService: StoryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getStories()

  }
  getStories() {
    this.storyService.getStories().subscribe(response => {
      this.stories = response.data
    })
  }



}
