import { IncurridoRoutingModule } from './incurrido-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncurridoComponent } from './incurrido.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [IncurridoComponent],
  imports: [CommonModule, RouterModule, IncurridoRoutingModule,
    IonicModule.forRoot()],
  exports: [IncurridoComponent]
})
export class IncurridoModule { }
