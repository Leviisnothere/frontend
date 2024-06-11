// student-delete.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  id: number = 0;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (confirm('Are you sure you want to delete this student?')) {
      this.deleteStudent();
    } else {
      this.router.navigate(['/students']);
    }
  }

  deleteStudent(): void {
    this.studentService.deleteStudent(this.id)
      .pipe(
        catchError(error => {
          this.errorMessage = 'There was an error deleting the student. Please try again.';
          return of(null); // Return a null observable
        })
      )
      .subscribe(response => {
        if (response !== null) {
          alert(response);
          this.router.navigate(['/students']);
        }
      });
  }
}
