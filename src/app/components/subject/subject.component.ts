import { SubjectService } from './../../services/subject/subject.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects: Subject[] = []
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.getAllSubject()
  }

  getAllSubject() {
    this.subjectService.getAllSubject().subscribe(response => {
      this.subjects = response.data
    })
  }

}
