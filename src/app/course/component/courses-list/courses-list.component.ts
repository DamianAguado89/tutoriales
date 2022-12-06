import { Component, OnInit } from '@angular/core';
import { getAllCourses } from '../../store/course.selectors';
import { courseActionTypes, deleteCourse } from '../../store/course.actions';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../model/course.model';
import { CourseService } from '../../services/course.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses$: Observable<Course[]>;

  courseToBeUpdated: Course;

  isUpdateActivated = false;

  public form: FormGroup;
  constructor(private fb: FormBuilder, private courseService: CourseService, private store: Store<AppState>) { }

  ngOnInit() {
    this.courses$ = this.store.select(getAllCourses);
    this.initForm()
  }

  private initForm(): void {
    this.form = this.fb.group({    
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  deleteCourse(courseId: string){
    this.store.dispatch(courseActionTypes.deleteCourse({courseId}));
  }

  showUpdateForm(course: Course){
    this.courseToBeUpdated = {...course};
    this.form.get('name').setValue(this.courseToBeUpdated.name);
    this.form.get('description').setValue(this.courseToBeUpdated.description);
    this.isUpdateActivated = true;
  }

  updateCourse(){
    const update: Update<Course> = {
      id: this.courseToBeUpdated.id,
      changes: {
        ...this.courseToBeUpdated,
        ...this.form.value
      }
    }
    this.store.dispatch(courseActionTypes.updateCourse({update}));
    this.isUpdateActivated = false;
    this.courseToBeUpdated = null;
  }

  

}
