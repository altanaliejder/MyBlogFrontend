
import { Story } from './../../models/story';
import { StoryService } from './../../services/story/story.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-story',
  templateUrl: './search-story.component.html',
  //providers: [NavbarComponent],
  styleUrls: ['./search-story.component.css']
})
export class SearchStoryComponent implements OnInit {

  constructor(private storyService: StoryService, private activatedRoute: ActivatedRoute) { }

  stories: Story[] = []
  searchText: String = ""
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.searchText = params["keyword"]
      this.search(params["keyword"])
    })
    //console.log(this.keyword + "ng")
    //this.search(this.keyword)
  }

  search(keyword: any) {
    this.storyService.searchStories(keyword).subscribe(response => {
      this.stories = response
    })
  }

  getStories() {
    this.storyService.getStories().subscribe(response => {
      this.stories = response.data
    })
  }

}
