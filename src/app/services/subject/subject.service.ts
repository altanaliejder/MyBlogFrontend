import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'src/app/models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  apiUrl = "http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }

  getAllSubject(): Observable<ListResponseModel<Subject>> {
    return this.httpClient.get<ListResponseModel<Subject>>(this.apiUrl + "subjects/getall")
  }
}
