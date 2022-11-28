import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarthSpinnerComponent } from './darth-spinner.component';
import { DarthSpinnerService } from './darth-spinner.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DarthSpinnerComponent
  ],
  exports: [
    DarthSpinnerComponent
  ],
  providers:[
    DarthSpinnerService
  ]
})
export class DarthSpinnerModule { }
