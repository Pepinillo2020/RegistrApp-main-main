import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerHistorialPage } from './ver-historial.page';

const routes: Routes = [
  {
    path: '',
    component: VerHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerHistorialPageRoutingModule {}
