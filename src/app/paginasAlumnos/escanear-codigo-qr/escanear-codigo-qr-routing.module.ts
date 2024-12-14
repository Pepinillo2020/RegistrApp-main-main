import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscanearCodigoQRPage } from './escanear-codigo-qr.page';

const routes: Routes = [
  {
    path: '',
    component: EscanearCodigoQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscanearCodigoQRPageRoutingModule {}
