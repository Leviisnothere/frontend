import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.deleteStudent();
  }

  deleteStudent():void{
    this.studentService.deleteStudent(this.id).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }

}
