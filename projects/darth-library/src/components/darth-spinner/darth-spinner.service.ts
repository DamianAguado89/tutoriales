import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarthSpinnerService {

  private _show: boolean;

  constructor() { }
  
  public get show(): boolean{
    return this._show;
  }


  showSpinner(){
    this._show = true;
  }

  hideSpinner(){
    this._show = false;
  }
  
}
