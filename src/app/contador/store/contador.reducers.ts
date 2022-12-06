import { createReducer, on } from "@ngrx/store";
import * as states from './contador.action';
import { state } from '@angular/animations';

export const initial = 0;

const _counterReducer = createReducer(
    initial,
    on(states.inc, states => states + 1),
    on(states.dec, states => states - 1),
    on(states.random, states => Math.floor(Math.random() * 100)),
    on(states.saltar, (states, {num}) => num),
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}