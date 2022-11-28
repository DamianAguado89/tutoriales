import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarthJoinPipe } from './darth-join.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [	
      DarthJoinPipe
  ],
  exports: [
    DarthJoinPipe
  ]
})
export class DarthJoinPipeModule { }
