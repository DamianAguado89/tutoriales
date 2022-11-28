import { Component, OnInit } from '@angular/core';
import { DarthSpinnerService } from '../../../../../projects/darth-library/src/components/darth-spinner/darth-spinner.service';

@Component({
  selector: 'app-showcase-darth-load-iframe',
  templateUrl: './showcase-darth-load-iframe.component.html',
  styleUrls: ['./showcase-darth-load-iframe.component.css']
})
export class ShowcaseDarthLoadIframeComponent implements OnInit {

  constructor(private darthSpiner: DarthSpinnerService) {
    this.darthSpiner.showSpinner();
   }

  ngOnInit() {
  }

  load(){
    console.log("Iframe cargado");
    this.darthSpiner.hideSpinner();
  }



}
