import { courseActionTypes, coursesLoaded, updateCourse } from './course.actions';
import { CourseService } from "../services/course.service";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CourseEffect{
    
    loadCourses$ = createEffect(()=>
        this.actions$.pipe(
            ofType(courseActionTypes.loadCourses),
            concatMap(() => this.corseService.getAllCourses()),
            map(course => courseActionTypes.coursesLoaded({course}))
        )
    );

    createCoure$ = createEffect(()=>
        this.actions$.pipe(
            ofType(courseActionTypes.createCourse),
            concatMap((action) => this.corseService.createCourse(action.course)),
            map(() => this.router.navigateByUrl('/courses'))
        ),
        {dispatch: false}
    );

    deleteCourse$ = createEffect(() => 
        this.actions$.pipe(
            ofType(courseActionTypes.deleteCourse),
            concatMap((action) => this.corseService.deleteCourse(action.courseId))
        ),
        {dispatch: false}
    )

    updateCourse$ = createEffect(()=> 
        this.actions$.pipe(
            ofType(courseActionTypes.updateCourse),
            concatMap((action) => this.corseService.updateCourse(action.update.id, action.update.changes))
        ),
        {dispatch: false}
    )

    constructor(private corseService: CourseService, private actions$: Actions, private router: Router){}
}


/////////////////////////////////////
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Store } from '@ngrx/store';
// import { TranslateService } from '@ngx-translate/core';
// import { EMPTY, of } from 'rxjs';
// import { map, mergeMap, catchError, withLatestFrom, tap } from 'rxjs/operators';
// import { AppState } from 'src/app/core/app-state';
// import { ToastService } from 'src/app/core/services/toast.service';
// import { FactoRiesgoService } from 'src/app/shared/services/factoRiesgo.service';
// import { addFactoRiesgo, deleteFactoRiesgo, displaySuccessMessage, loadFactoRiesgo, loadFactoRiesgoAuto, setFactoRiesgo, setFactoRiesgoAuto, displayErrorMessage } from '../actions/factoRiesgo.actions';
// import { loadReservaFromIds } from '../actions/reserva.actions';
// import { reservaPacienteIdSelect } from '../selectors/reserva.selector';

// @Injectable()
// export class factoRideceEffects {

//   loadFactoRiesgo$ = createEffect(() => this.actions$.pipe(
//     ofType(loadFactoRiesgo, loadReservaFromIds),
//     withLatestFrom(this.store$.select(reservaPacienteIdSelect)),
//     mergeMap((idPersona) => this.factoRiesgoService.getFactoRiesgo(idPersona[1])
//       .pipe(
//         map(data => setFactoRiesgo({ factoresRiesgo: data })),
//         catchError(() => of(displayErrorMessage({ text: 'MESSAGES.TOASTS.FACTOR-RIESGO.ACTION-ERROR'})))
//       ))
//     )
//   );

//   selectFactoRiesgo$ = createEffect(() => this.actions$.pipe(
//     ofType(loadFactoRiesgoAuto),
//     mergeMap(() => this.factoRiesgoService.getFactoRiesgoSelect()
//       .pipe(
//         map(dataAuto => setFactoRiesgoAuto({ factoresRiesgoAuto: dataAuto })),
//         catchError(() => of(displayErrorMessage({ text: 'MESSAGES.TOASTS.FACTOR-RIESGO.ACTION-ERROR'})))
//       ))
//     )
//   );

//   addFactoRiesgo$ = createEffect(() => this.actions$.pipe(
//     ofType(addFactoRiesgo),
//     mergeMap((action) => this.factoRiesgoService.postFactoRiesgo(action.factor)
//       .pipe(
//         map(factor => displaySuccessMessage({text: 'MESSAGES.TOASTS.ACTIONS.AGREGO'})),
//         catchError(() => of(displayErrorMessage({ text: 'MESSAGES.TOASTS.FACTOR-RIESGO.ACTION-ERROR'})))
//       )
//     )
//   ));
  
//   deleteFactoRiesgo$ = createEffect(() => this.actions$.pipe(
//     ofType(deleteFactoRiesgo),
//     mergeMap((action) => this.factoRiesgoService.deleteFactoRiesgo(action.factor)
//       .pipe(
//         map(factor => displaySuccessMessage({text: 'MESSAGES.TOASTS.ACTIONS.ELIMINO'})),
//         catchError(() => of(displayErrorMessage({ text: 'MESSAGES.TOASTS.FACTOR-RIESGO.ACTION-ERROR'})))
//       ))
//   ));

//   displayErrorMessage$ = createEffect(() => this.actions$.pipe(
//     ofType(displayErrorMessage),
//     mergeMap((action) => this.translateService.get(action.text)
//       .pipe(
//         tap(res => this.toastService.show(res, 'error')),
//       )
//     )
//   ), { dispatch: false });

 
//   displaySuccessMessage$ = createEffect(() => this.actions$.pipe(
//     ofType(displaySuccessMessage),
//     mergeMap((action) => this.translateService.get(action.text).pipe(map(text => ({action: text })))
//       .pipe(
//         mergeMap((text) => this.translateService.get('MESSAGES.TOASTS.FACTOR-RIESGO.ACTION-SUCCESS', text)
//         .pipe(
//           tap(res => this.toastService.show(res, 'success')),
//           map(() => loadFactoRiesgo())
//         )
//       ),
//     )
//   )));

//   constructor(
//     private actions$: Actions,
//     private store$: Store<AppState>,
//     private factoRiesgoService: FactoRiesgoService,
//     private toastService: ToastService,
//     private translateService: TranslateService,
//   ) {}
// }

// // function displayErrorMessage(arg0: { text: string; }): any {
// //   throw new Error('Function not implemented.');
// // }
