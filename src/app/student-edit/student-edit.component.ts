import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student-model';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: Student = { firstName: '', lastName: '', email: '' };
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudent(this.id).subscribe((data:Student) =>{
      this.student = data;
    });
  }

  updateStudent(): void{
    this.studentService.updateStudent(this.id, this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }

}
