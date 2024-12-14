import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VerHistorialClasePageRoutingModule } from './ver-historial-clase-routing.module';
import { VerHistorialClasePage } from './ver-historial-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerHistorialClasePageRoutingModule
  ],
  declarations: [VerHistorialClasePage]
})
export class VerHistorialClasePageModule {}
