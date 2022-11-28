import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarthDropdownComponent } from './darth-dropdown.component';
import { FormsModule } from '@angular/forms';
import { DarthClickOutsideModule } from '../../directives/darth-click-outside/darth-click-outside.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DarthClickOutsideModule
  ],
  declarations: [DarthDropdownComponent],
  exports: [
    DarthDropdownComponent
  ]
})
export class DarthDropdownModule { }
