import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerReglamentoPage } from './ver-reglamento.page';

const routes: Routes = [
  {
    path: '',
    component: VerReglamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerReglamentoPageRoutingModule {}
