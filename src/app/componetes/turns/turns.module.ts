import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnRoutingModule } from './turn-routing.module';
import { TurnComponent } from './turn/turn.component';


@NgModule({
  declarations: [
    TurnComponent
  ],
  imports: [
    CommonModule,
    TurnRoutingModule   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TurnsModule { }
