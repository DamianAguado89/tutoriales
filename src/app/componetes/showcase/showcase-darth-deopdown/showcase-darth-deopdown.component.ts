import { Component, OnInit } from '@angular/core';
import { DarthSelectItem } from '../../../../../projects/darth-library/src/common/darth-select-item';

@Component({
  selector: 'app-showcase-darth-deopdown',
  templateUrl: './showcase-darth-deopdown.component.html',
  styleUrls: ['./showcase-darth-deopdown.component.css']
})
export class ShowcaseDarthDeopdownComponent implements OnInit {

  public options: DarthSelectItem[];
  public valueSelect: any;
  constructor() { }

  ngOnInit() {
    this.options = [
      new DarthSelectItem("Label1", "Value1"),
      new DarthSelectItem("Label2", "Value2"),
      new DarthSelectItem("Label3", "Value3"),
      new DarthSelectItem("Label4", "Value4"),
    ];
    this.valueSelect = "Value3";
  }

  select(ev){
    console.log(ev)
  }

}
