import { NgModule } from '@angular/core';
import { DarthBlockListModule } from './components/darth-block-list/darth-block-list.module';
import { DarthDetailModule } from './components/darth-detail/darth-detail.module';
import { DarthDropdownModule } from './components/darth-dropdown/darth-dropdown.module';
import { DarthSpinnerModule } from './components/darth-spinner/darth-spinner.module';
import { DarthToastModule } from './components/darth-toast/darth-toast.module';
import { DarthClickOutsideModule } from './directives/darth-click-outside/darth-click-outside.module';
import { DarthLoadIframeModule } from './directives/darth-load-iframe/darth-load-iframe.module';

import { DarthJoinPipeModule } from './pipes/darth-join-pipe/darth-join-pipe.module';
import { DarthConfigModule } from './services/darth-config/darth-config.module';
import { DarthConstansService } from './services/darth-constans.service';


@NgModule({
  declarations: [
  ],
  imports: [
    DarthJoinPipeModule,
    DarthSpinnerModule,
    DarthToastModule,
    DarthClickOutsideModule,
    DarthDropdownModule,
    DarthLoadIframeModule,
    DarthConfigModule,
    DarthDetailModule,
    DarthBlockListModule
  ],
  exports: [
    DarthJoinPipeModule,
    DarthSpinnerModule,
    DarthToastModule,
    DarthClickOutsideModule,
    DarthDropdownModule,
    DarthLoadIframeModule,
    DarthConfigModule,
    DarthDetailModule,
    DarthBlockListModule
  ], 
  providers: [
    DarthConstansService
  ]
})
export class DarthLibraryModule { }
