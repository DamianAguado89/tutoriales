import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-darth-join-pipe',
  templateUrl: './showcase-darth-join-pipe.component.html',
  styleUrls: ['./showcase-darth-join-pipe.component.css']
})
export class ShowcaseDarthJoinPipeComponent implements OnInit {
  
  public valoresNulo = null;
  public valores: string[];
  constructor() { 
    this.valores = [
      "1","2","3","4","5"
    ];
  }

  ngOnInit() {
  }

}
