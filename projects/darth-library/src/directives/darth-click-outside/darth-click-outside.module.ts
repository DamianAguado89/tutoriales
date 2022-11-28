import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarthClickOutsideDirective } from './darth-click-outside.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [	
    DarthClickOutsideDirective
  ],
  exports: [
    DarthClickOutsideDirective
  ]
})
export class DarthClickOutsideModule { }
