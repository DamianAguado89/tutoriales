import { Component, OnInit } from '@angular/core';
import { DarthToastService } from 'projects/darth-library/src/components/darth-toast/darth-toast.service';


@Component({
  selector: 'app-showcase-darth-toast',
  templateUrl: './showcase-darth-toast.component.html',
  styleUrls: ['./showcase-darth-toast.component.scss']
})
export class ShowcaseDarthToastComponent implements OnInit {

  constructor(private darthToast: DarthToastService) { }

  ngOnInit() {
  }

  addInfo(){
    this.darthToast.addInfoMessage("info", "mensaje info");
  }

  addError(){
    this.darthToast.addErrorMessage("error", "mensaje error");
  }

  addWarning(){
    this.darthToast.addWarningMessage("warning", "mensaje warning");
  }

  addSuccess(){
    this.darthToast.addSuccesMessage("success", "mensaje success");
  }

}
