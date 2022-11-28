import { Component, OnInit } from '@angular/core';
import { DarthSpinnerService } from 'projects/darth-library/src/components/darth-spinner/darth-spinner.service';

@Component({
  selector: 'app-showcase-darth-sppiner',
  templateUrl: './showcase-darth-sppiner.component.html',
  styleUrls: ['./showcase-darth-sppiner.component.scss']
})
export class ShowcaseDarthSppinerComponent implements OnInit {
  
  public embedded: boolean;

  constructor(public darthSpinner: DarthSpinnerService) { 
    this.embedded = false;
  }

  ngOnInit() {
  }

  activarSpinner(){
    this.darthSpinner.showSpinner();
    setTimeout(()=>{
      this.darthSpinner.showSpinner();
    }, 5000)
  }

  cambiarModo(){
    this.embedded = !this.embedded;
  }

}
