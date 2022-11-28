import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnComponent } from './turn/turn.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: TurnComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TurnRoutingModule { }
