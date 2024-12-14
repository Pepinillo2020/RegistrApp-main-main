import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabProfPage } from './tab-prof.page';

const routes: Routes = [
  {
    path: '',
    component: TabProfPage,
    children: [
      {
        path: 'crear-codigo-qr',
        loadChildren: () => import('./../../paginasProfes/crear-codigo-qr/crear-codigo-qr.module').then( m => m.CrearCodigoQRPageModule)
      },
      {
        path: 'crear-clase',
        loadChildren: () => import('./../../paginasProfes/crear-clase/crear-clase.module').then( m => m.CrearClasePageModule)
      },
      {
        path: 'clases',
        loadChildren: () => import('./../../paginasProfes/clases/clases.module').then( m => m.ClasesPageModule)
      },
      {
        path: 'editar-clase/:id',  // Ruta para editar la clase
        loadChildren: () => import('./../../paginasProfes/editar-clase/editar-clase.module').then(m => m.EditarClasePageModule)
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabProfPageRoutingModule {}
