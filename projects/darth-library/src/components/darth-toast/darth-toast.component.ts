import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DarthToastService } from './darth-toast.service';

@Component({
  selector: 'darth-toast',
  templateUrl: './darth-toast.component.html',
  styleUrls: ['./darth-toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('overlayAnimation', [
      state('void', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in'))
    ])
  ]
})
export class DarthToastComponent implements OnInit {

  @Input() timeout: number;

  constructor(
    public toastService: DarthToastService
  ) { }

  ngOnInit() {
    if(this.timeout){
      this.toastService.timeout = this.timeout;
    }
  }

  closeToast(toast){
    this.toastService.closeToast(toast);
  }

}
