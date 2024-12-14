import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCodigoQRPageRoutingModule } from './crear-codigo-qr-routing.module';

import { CrearCodigoQRPage } from './crear-codigo-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCodigoQRPageRoutingModule
  ],
  declarations: [CrearCodigoQRPage]
})
export class CrearCodigoQRPageModule {}
