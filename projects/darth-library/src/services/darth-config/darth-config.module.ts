import { NgModule } from '@angular/core';
import { DarthConfigPipe } from './darth-config.pipe';
import { DarthConfigService } from './darth-config.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    DarthConfigPipe
  ],
  exports: [
    DarthConfigPipe
  ],
  providers: [
    DarthConfigService
  ]
})
export class DarthConfigModule { }
