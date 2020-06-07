import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './components/init/init.component';
import { InitRoutingModule } from './init.module.routing';

@NgModule({
  declarations: [InitComponent],
  imports: [
    CommonModule,
    InitRoutingModule
  ]
})
export class InitModule { }
