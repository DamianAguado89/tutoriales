import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DarthSpinnerService } from './darth-spinner.service';

@Component({
  selector: 'darth-spinner',
  templateUrl: './darth-spinner.component.html',
  styleUrls: ['./darth-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DarthSpinnerComponent implements OnInit {

  @Input() embedded: boolean = false; 
  @Input() pathImg: string = 'resources/img/loading.gif';
  
  constructor(public darthSpinner: DarthSpinnerService) { }

  ngOnInit() {
  }

}
