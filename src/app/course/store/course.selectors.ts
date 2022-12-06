import { CourseState } from "./course.reducers";
import { Course } from "../model/course.model";
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from "./course.reducers";

export const courseFeactureSelector = createFeatureSelector<CourseState>('courses');

export const getAllCourses = createSelector(
    courseFeactureSelector,
    selectAll
);

export const areCoursesLoaded = createSelector(
    courseFeactureSelector,
    state => state.coursesLoaded
);
//////////////////////////////////////////////$Recycle.Bin
// import { createSelector } from '@ngrx/store';
// import { AppState } from 'src/app/core/app-state';
// import { ReservaState } from "src/app/shared/interfaces/states/reserva-state.interface";

// export const selectFactoRiesgoFeature = (state: AppState) => state.reserva;

// export const selectListFactoRiesgo = createSelector(
//     selectFactoRiesgoFeature,
//   (state: ReservaState) => state.factoresRiesgo
// );

// export const selectFactoRiesgoAuto = createSelector(
//   selectFactoRiesgoFeature,
// (state: ReservaState) => state.factoresRiesgoAuto
// );
