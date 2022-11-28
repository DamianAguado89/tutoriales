import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarthBlockListComponent } from './darth-block-list/darth-block-list.component';
import { DarthBlockListItemComponent } from './darth-block-list-item/darth-block-list-item.component';
import { DarthBlockDataItemComponent } from './darth-block-data-item/darth-block-data-item.component';
import { DarthClickOutsideModule } from '../../directives/darth-click-outside/darth-click-outside.module';
import { NgxPaginationModule } from 'ngx-pagination'; 

@NgModule({
  imports: [
    CommonModule,
    DarthClickOutsideModule,
    NgxPaginationModule
  ],
  declarations: [
    DarthBlockListComponent,
    DarthBlockListItemComponent,
    DarthBlockDataItemComponent
  ],
  exports: [
    DarthBlockListComponent,
    DarthBlockDataItemComponent
  ]


})
export class DarthBlockListModule { }
