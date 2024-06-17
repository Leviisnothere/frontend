import { Injectable } from '@angular/core';
import {Student} from '../models/student-model';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://3.15.152.64:8080/api/students';
  constructor(private http: HttpClient) {}

  getStudents() : Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudent(id: number): Observable<Student>{
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  addStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(this.apiUrl, student)
  }

  updateStudent(id: number, student: Student): Observable<Student>{
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text', headers });
  }

}
