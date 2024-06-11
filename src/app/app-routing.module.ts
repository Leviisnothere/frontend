import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'students', component: StudentListComponent},
  { path: 'add-student', component: StudentAddComponent},
  { path: 'edit-student/:id', component: StudentEditComponent},
  { path: 'delete-student/:id', component: StudentDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
