import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { NavBarComponent } from '../app/componetes/nav-bar/nav-bar.component';

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
import { counterReducer } from './contador/store/contador.reducers';
import { environment } from 'src/environments/environment';
import { CourseModule } from './course/course.module';
import { CounterComponent } from './contador/counter/counter.component';
import { DarthAguadoModule } from 'darthAguado';
//ngrx module
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';


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
    ShowcaseDarthBlockListComponent,
    CounterComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DarthAguadoModule,
    DarthLibraryModule,
    FormsModule,
    CourseModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      count: counterReducer
    })
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
