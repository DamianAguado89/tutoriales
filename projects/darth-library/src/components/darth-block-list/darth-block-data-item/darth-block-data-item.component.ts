import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'darth-block-data-item',
  templateUrl: './darth-block-data-item.component.html',
  styleUrls: ['./darth-block-data-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DarthBlockDataItemComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;
  
  constructor() { }

  ngOnInit() {
  }

}
