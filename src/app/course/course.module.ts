import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './services/course.service';
import { CourseEffect } from './store/course.effects';
import { courseReducer } from './store/course.reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoursesListComponent } from './component/courses-list/courses-list.component';
import { CreateCourseComponent } from './component/create-course/create-course.component';
import { CursesRoutingModule } from './curses-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CursesRoutingModule,
    StoreModule.forFeature('course', courseReducer),
    EffectsModule.forRoot([])
  ],
  declarations: [
    CoursesListComponent,
    CreateCourseComponent
  ],
  providers: [CourseService],
  exports:[
    CoursesListComponent,
    CreateCourseComponent
  ]
})
export class CourseModule { }
