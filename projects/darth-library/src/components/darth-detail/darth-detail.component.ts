import { Component, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'darth-detail',
  templateUrl: './darth-detail.component.html',
  styleUrls: ['./darth-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slide',[
      transition(':enter',[
        style({transform: 'translateX(100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class DarthDetailComponent implements OnInit {

  @Output() close: EventEmitter<boolean>;

  public showDetail: boolean;

  constructor() {
    this.close = new EventEmitter<boolean>();
    this.showDetail = true;
   }

  ngOnInit() {
  }

  closeDetail(){
    this.showDetail = false;
    setTimeout(()=>{
      this.close.emit(true)
    },600);
  }

}
