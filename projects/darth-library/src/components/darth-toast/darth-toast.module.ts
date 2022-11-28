import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarthToastComponent } from './darth-toast.component';
import { DarthToastService } from './darth-toast.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DarthToastComponent
  ],
  exports: [
    DarthToastComponent
  ],
  providers: [
    DarthToastService
  ]
})
export class DarthToastModule { }
