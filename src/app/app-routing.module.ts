import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowcaseClickoutsideComponent } from './componetes/showcase/showcase-clickoutside/showcase-clickoutside.component';
import { ShowcaseDarthBlockListComponent } from './componetes/showcase/showcase-darth-block-list/showcase-darth-block-list.component';
import { ShowcaseDarthConfigComponent } from './componetes/showcase/showcase-darth-config/showcase-darth-config.component';
import { ShowcaseDarthDeopdownComponent } from './componetes/showcase/showcase-darth-deopdown/showcase-darth-deopdown.component';
import { ShowcaseDarthDetailComponent } from './componetes/showcase/showcase-darth-detail/showcase-darth-detail.component';
import { ShowcaseDarthJoinPipeComponent } from './componetes/showcase/showcase-darth-join-pipe/showcase-darth-join-pipe.component';
import { ShowcaseDarthLoadIframeComponent } from './componetes/showcase/showcase-darth-load-iframe/showcase-darth-load-iframe.component';
import { ShowcaseDarthSppinerComponent } from './componetes/showcase/showcase-darth-sppiner/showcase-darth-sppiner.component';
import { ShowcaseDarthToastComponent } from './componetes/showcase/showcase-darth-toast/showcase-darth-toast.component';
import { ShowcaseDarthAguadoComponent } from './componetes/showcase/showcase-darthAguado/showcase-darthAguado.component';
import { TurnComponent } from './componetes/turns/turn/turn.component';


const routes: Routes = [
  
  {
    path: 'turn', 
    loadChildren: () => import('../app/componetes/turns/turns.module').then(m => m.TurnsModule)
  },
  {
    path: 'darthAguado',
    component: ShowcaseDarthAguadoComponent
  },
  {
    path: 'darth-join',
    component: ShowcaseDarthJoinPipeComponent
  },
  {
    path: 'darth-spinner',
    component: ShowcaseDarthSppinerComponent
  },
  {
    path: 'darth-toast',
    component: ShowcaseDarthToastComponent
  },
  {
    path: 'darth-outside',
    component: ShowcaseClickoutsideComponent
  },
  {
    path: 'darth-dropdown',
    component: ShowcaseDarthDeopdownComponent
  },
  {
    path: 'darth-load-iframe',
    component: ShowcaseDarthLoadIframeComponent
  },
  {
    path: 'darth-config',
    component: ShowcaseDarthConfigComponent
  },
  {
    path: 'darth-datail',
    component: ShowcaseDarthDetailComponent
  },
  {
    path: 'darth-block-list',
    component: ShowcaseDarthBlockListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
