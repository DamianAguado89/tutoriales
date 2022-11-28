import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-darth-detail',
  templateUrl: './showcase-darth-detail.component.html',
  styleUrls: ['./showcase-darth-detail.component.scss']
})
export class ShowcaseDarthDetailComponent implements OnInit {

  public showDetail: boolean;

  constructor() { }

  ngOnInit() {
  }

  closeDetail(){
    this.showDetail = false;
  }

  openDetail(){
    this.showDetail = true;
  }

  

}
