import { createAction, props } from "@ngrx/store";

export const inc = createAction('Incremento');
export const dec = createAction('Decremento');
export const random = createAction('Random');
export const saltar = createAction('Saltar',
    props<{ num: number }>()
);