import { NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
// import {  } from "@angular/material/toolbar";

const myModules = [
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  imports: [...myModules],
  exports: [...myModules]
})
export class MaterialModule { }
