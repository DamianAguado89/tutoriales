import { Injectable } from '@angular/core';
import { DarthToast } from './bean/darth-toast';
import { DarthConstansService } from '../../services/darth-constans.service';

@Injectable({
  providedIn: 'root'
})
export class DarthToastService {

  private _toasts: DarthToast[];
  private _timeout: number;

  public get toasts(): DarthToast[]{
    return this._toasts;
  }  

  public get timeout(): number{
    return this._timeout;
  }

  public set timeout(value: number){
    this._timeout = value;
  }

  constructor(private constans: DarthConstansService) { 
    this._toasts = [];
    this._timeout = this.constans.DarthToastConstans.TIMEOUT;
  }

  addInfoMessage(title: string, message: string){
    this.addMessage(title, message, this.constans.DarthToastConstans.TYPE_INFO);
  }

  addWarningMessage(title: string, message: string){
    this.addMessage(title, message, this.constans.DarthToastConstans.TYPE_WARNING);
  }

  addErrorMessage(title: string, message: string){
    this.addMessage(title, message, this.constans.DarthToastConstans.TYPE_ERROR);
  }

  addSuccesMessage(title: string, message: string){
    this.addMessage(title, message, this.constans.DarthToastConstans.TYPE_SUCCESS);
  }

  private addMessage(title: string, message: string, type:string){

    let toast: DarthToast = new DarthToast(title, message, type);
    this._toasts.push(toast);
    setTimeout(() => {
      this.closeToast(toast)
    }, this._timeout)
  }

  closeToast(toast: DarthToast){
    let index: number = this._toasts.findIndex(t => t === toast);
    if (index !== -1) {
      this._toasts.splice(index, 1);
    }
  }

}
