import { Component, OnInit } from '@angular/core';
import {Student} from '../models/student-model';
import {StudentService} from '../service/student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents():void{
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
    });
  }

}
