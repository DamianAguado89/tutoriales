import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarthDetailComponent } from './darth-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DarthDetailComponent],
  exports: [DarthDetailComponent]
})
export class DarthDetailModule { }
