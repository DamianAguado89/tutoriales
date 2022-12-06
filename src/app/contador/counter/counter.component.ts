import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as action from '../store/contador.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number}>) { }

  ngOnInit() {
    this.count$ = this.store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(action.inc());
  }

  decrement() {
    this.store.dispatch(action.dec());
  }

  random() {
    this.store.dispatch(action.random());
  }

  saltar(n: number){
    this.store.dispatch(action.saltar({num: n}));
  }

}
