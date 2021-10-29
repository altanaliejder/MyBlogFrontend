import { SubjectService } from './../../services/subject/subject.service';
import { Subject } from './../../models/subject';
import { UserService } from './../../services/user/user.service';
import { Story } from './../../models/story';
import { StoryService } from 'src/app/services/story/story.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  addStoryGroup: FormGroup;
  story = <Story>{};
  subjects: Subject[] = []
  subject = <Subject>{}
  subjectControl = new FormControl('', Validators.required)
  constructor(private fb: FormBuilder, private storyService: StoryService, private userService: UserService, private subjectService: SubjectService) {
    this.addStoryGroup = this.fb.group({
      title: ["", Validators.required],
      story: ["", Validators.required]

    })
  }



  ngOnInit(): void {
    this.getAllSubjects();
  }

  addStory() {
    this.subject = this.subjectControl.value;

    if (this.addStoryGroup.valid) {
      this.story = Object.assign({}, this.addStoryGroup.value)
      this.userService.getCurrentUser()?.subscribe(response => {
        this.story.user = response.data
        this.story.subject = this.subject
        this.storyService.addStory(this.story).subscribe()
      })
    }
  }
  getAllSubjects() {
    this.subjectService.getAllSubject().subscribe(response => {
      this.subjects = response.data
    })
  }

}
