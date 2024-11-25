import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabAlumnosPage } from './tab-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: TabAlumnosPage,
    children: [
      {
        path: 'escanear-codigo-qr',
        loadChildren: () => import('./../../paginasAlumnos/escanear-codigo-qr/escanear-codigo-qr.module').then( m => m.EscanearCodigoQRPageModule)
      },
      {
        path: 'ver-reglamento',
        loadChildren: () => import('./../../paginasAlumnos/ver-reglamento/ver-reglamento.module').then( m => m.VerReglamentoPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAlumnosPageRoutingModule {}
