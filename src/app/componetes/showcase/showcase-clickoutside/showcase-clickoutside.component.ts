import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-clickoutside',
  templateUrl: './showcase-clickoutside.component.html',
  styleUrls: ['./showcase-clickoutside.component.css']
})
export class ShowcaseClickoutsideComponent implements OnInit {

  public mode: string;

  constructor() {
    this.mode = 'estandar';
   }

  ngOnInit() {
  }

  openEstandar() {
    this.mode = 'estandar';
  }

  openDelay() {
    this.mode = 'delay';
  }

  openDesactived() {
    this.mode = 'desactivated';
  }

  clickOutside($event){
    console.log($event);
  }

}
