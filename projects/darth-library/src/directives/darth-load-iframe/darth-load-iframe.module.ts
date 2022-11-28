import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarthLoadIframeDirective } from './darth-load-iframe.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [	
      DarthLoadIframeDirective
   ],
   exports:[
    DarthLoadIframeDirective
   ]
})
export class DarthLoadIframeModule { }
