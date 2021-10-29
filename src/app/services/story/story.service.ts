
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Story } from 'src/app/models/story';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  apiUrl = "http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }



  getStories(): Observable<ListResponseModel<Story>> {
    return this.httpClient.get<ListResponseModel<Story>>(this.apiUrl + "stories/getall");
  }

  searchStories(keyword: String): Observable<Story[]> {
    console.log(keyword)
    return this.httpClient.get<Story[]>(this.apiUrl + "stories/search?keyword=" + keyword);
  }

  getStoriesToSubject(subjectId: number): Observable<ListResponseModel<Story>> {
    return this.httpClient.get<ListResponseModel<Story>>(this.apiUrl + "stories/getSubjectToStory?subjectId=" + subjectId)
  }
  getStoriesByUserId(userId: number): Observable<ListResponseModel<Story>> {
    return this.httpClient.get<ListResponseModel<Story>>(this.apiUrl + "stories/getstoriesbyuserid?userId=" + userId)
  }
  addStory(story: Story) {
    return this.httpClient.post(this.apiUrl + "stories/add", story)
  }
  // addStoryToUser(storyId: number, userId: number) {
  //   return this.httpClient.post(this.apiUrl + "")
  // }
}
