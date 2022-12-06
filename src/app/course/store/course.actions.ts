import { Course } from '../model/course.model'; 
import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';

export const loadCourses = createAction(
    '[Courses List] Load Courses via Service'
);

export const coursesLoaded = createAction(
    '[Courses Effect] Courses Loaded Sussessfully',
    props<{course: Course[]}>()
);

export const createCourse = createAction(
    '[Create Course Component] Create Course',
    props<{course: Course}>()
);

export const deleteCourse = createAction(
    '[Courses List Operations] Delete Curse',
    props<{courseId: string}>()
)

export const updateCourse = createAction(
    '[Courses List Operations] Update Course',
    props<{update: Update<Course>}>()
);

export const courseActionTypes = {
    loadCourses,
    coursesLoaded,
    createCourse,
    deleteCourse,
    updateCourse
}

/////////////////////////////////////
// import { createAction, props } from "@ngrx/store";
// import { DataPage } from "src/app/core/interfaces/data-page.interface";
// import { risk_factors, bodyFactoRiesgo, risk_factorAuto, factoRiesgo, factorRiesgoAuto } from "src/app/shared/interfaces/factores-riesgo.interface";
// // import { FactoRiesgoState } from "src/app/shared/interfaces/states/factoRiesgo-state.interface";


// export const loadFactoRiesgo = createAction(
//     '[ factoRiesgo ] load factoRiesgo'
// );

// export const setFactoRiesgo = createAction(
//     '[ factoRiesgo ] Set factoRiesgo',
//     props<{ factoresRiesgo: factoRiesgo}>()
// );

// export const loadFactoRiesgoAuto = createAction(
//     '[ factoRiesgo ] load factoRiesgoSelect'
// );

// export const setFactoRiesgoAuto = createAction(
//     '[ factoRiesgo ] set factoRiesgoSelect',
//     props<{ factoresRiesgoAuto: factorRiesgoAuto }>()
// );

// export const addFactoRiesgo = createAction(
//     '[ factoRiesgo ] add factoRiesgo',
//     props<{ factor: bodyFactoRiesgo }>()
// );

// export const deleteFactoRiesgo = createAction(
//     '[ factoRiesgo ] delete factoRiesgo',
//     props<{ factor: bodyFactoRiesgo }>()
// );

// export const displayErrorMessage = createAction(
//     '[ factoRiesgo ] error message',
//     props<{ text: string }>()
// );

// export const displaySuccessMessage = createAction(
//     '[ factoRiesgo ] success message',
//     props<{ text: string }>()
// );
