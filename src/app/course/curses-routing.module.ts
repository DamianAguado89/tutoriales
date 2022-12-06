import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './component/courses-list/courses-list.component';
import { CreateCourseComponent } from './component/create-course/create-course.component';



const routes: Routes = [
  {
    path: 'courses',
    children: [
      {path: 'coursesList', component: CoursesListComponent},
      {path: 'create-course', component: CreateCourseComponent},
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CursesRoutingModule { }