import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncurridoComponent } from './incurrido.component';

const routes: Routes = [{ path: '', component: IncurridoComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IncurridoRoutingModule { }
