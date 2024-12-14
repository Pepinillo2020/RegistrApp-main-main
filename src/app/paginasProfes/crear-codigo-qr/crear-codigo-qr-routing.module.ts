import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCodigoQRPage } from './crear-codigo-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCodigoQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCodigoQRPageRoutingModule {}
