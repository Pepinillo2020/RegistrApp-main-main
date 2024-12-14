import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabAlumnosPageRoutingModule } from './tab-alumnos-routing.module';

import { TabAlumnosPage } from './tab-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabAlumnosPageRoutingModule
  ],
  declarations: [TabAlumnosPage]
})
export class TabAlumnosPageModule {}
