import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course.model';
import { createCourse } from '../../store/course.actions';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import * as uuid from 'uuid';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  public form: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  
  private initForm(): void {
    this.form = this.fb.group({    
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(){
    const course: Course = {
      id: uuid.v4(),
      name: this.form.get('name').value,
      description: this.form.get('description').value
    }

    this.store.dispatch(createCourse({course}));
  }

}
