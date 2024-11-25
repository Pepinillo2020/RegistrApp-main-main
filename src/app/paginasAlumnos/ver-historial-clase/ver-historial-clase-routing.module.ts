import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerHistorialClasePage } from './ver-historial-clase.page';

const routes: Routes = [
  {
    path: '',
    component: VerHistorialClasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerHistorialClasePageRoutingModule {}
