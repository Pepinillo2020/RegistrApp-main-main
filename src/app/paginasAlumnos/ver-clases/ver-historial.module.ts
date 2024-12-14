import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerHistorialPageRoutingModule } from './ver-historial-routing.module';

import { VerHistorialPage } from './ver-historial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerHistorialPageRoutingModule
  ],
  declarations: [VerHistorialPage]
})
export class VerHistorialPageModule {}
