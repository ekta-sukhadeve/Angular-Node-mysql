import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpageRoutingModule } from './staticpage-routing.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    StaticpageRoutingModule
  ]
})
export class StaticpageModule { }
