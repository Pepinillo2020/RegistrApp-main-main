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
      {
        path: 'ver-clases',
        loadChildren: () => import('../ver-clases/ver-historial.module').then( m => m.VerHistorialPageModule)
      },
      {
        path: 'ver-historial-clase',
        loadChildren: () => import('../ver-historial-clase/ver-historial-clase.module').then( m => m.VerHistorialClasePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAlumnosPageRoutingModule {}
