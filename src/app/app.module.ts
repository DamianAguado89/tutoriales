import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { NavBarComponent } from '../app/componetes/nav-bar/nav-bar.component';
import { DarthAguadoModule } from 'darth-aguado';
import { ShowcaseDarthAguadoComponent } from './componetes/showcase/showcase-darthAguado/showcase-darthAguado.component';
import { DarthLibraryModule } from 'projects/darth-library/src/darth-library.module';
import { ShowcaseDarthJoinPipeComponent } from './componetes/showcase/showcase-darth-join-pipe/showcase-darth-join-pipe.component';
import { ShowcaseDarthSppinerComponent } from './componetes/showcase/showcase-darth-sppiner/showcase-darth-sppiner.component';
import { ShowcaseDarthToastComponent } from './componetes/showcase/showcase-darth-toast/showcase-darth-toast.component';
import { ShowcaseClickoutsideComponent } from './componetes/showcase/showcase-clickoutside/showcase-clickoutside.component';
import { SideMenuComponent } from './componetes/side-menu/side-menu.component';
import { ShowcaseDarthDeopdownComponent } from './componetes/showcase/showcase-darth-deopdown/showcase-darth-deopdown.component';
import { ShowcaseDarthLoadIframeComponent } from './componetes/showcase/showcase-darth-load-iframe/showcase-darth-load-iframe.component';
import { ShowcaseDarthConfigComponent } from './componetes/showcase/showcase-darth-config/showcase-darth-config.component';
import { DarthConfigService } from '../../projects/darth-library/src/services/darth-config/darth-config.service';
import { ShowcaseDarthDetailComponent } from './componetes/showcase/showcase-darth-detail/showcase-darth-detail.component';
import { ShowcaseDarthBlockListComponent } from './componetes/showcase/showcase-darth-block-list/showcase-darth-block-list.component';

export function configFactory(provider: DarthConfigService){
  return () => provider.getDataFromJSON('../assets/config/data.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShowcaseDarthAguadoComponent,
    ShowcaseDarthJoinPipeComponent,
    ShowcaseDarthSppinerComponent,
    ShowcaseDarthToastComponent,
    ShowcaseClickoutsideComponent,
    SideMenuComponent,
    ShowcaseDarthDeopdownComponent,
    ShowcaseDarthLoadIframeComponent,
    ShowcaseDarthConfigComponent,
    ShowcaseDarthDetailComponent,
    ShowcaseDarthBlockListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DarthAguadoModule,
    DarthLibraryModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    DarthConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [DarthConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
