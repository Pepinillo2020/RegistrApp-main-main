import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearCodigoQRPageRoutingModule } from './escanear-codigo-qr-routing.module';

import { EscanearCodigoQRPage } from './escanear-codigo-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearCodigoQRPageRoutingModule
  ],
  declarations: [EscanearCodigoQRPage]
})
export class EscanearCodigoQRPageModule {}
