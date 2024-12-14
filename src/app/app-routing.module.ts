import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service'; // Cambia AuthGuardService a AuthGuard

const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
      path: 'reset-password',
      loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
    },
    {
      path: 'tab-prof',
      loadChildren: () => import('./paginasProfes/tab-prof/tab-prof.module').then(m => m.TabProfPageModule),
      canActivate: [AuthGuard],
      data: { expectedRole: 'profesor' }
    },
    {
      path: 'tab-alumnos',
      loadChildren: () => import('./paginasAlumnos/tab-alumnos/tab-alumnos.module').then(m => m.TabAlumnosPageModule),
      canActivate: [AuthGuard],
      data: { expectedRole: 'alumno' }
    },
    {
      path: 'clases',
      loadChildren: () => import('./paginasProfes/clases/clases.module').then(m => m.ClasesPageModule),
      canActivate: [AuthGuard],
      data: { expectedRole: 'profesor' }
    },
    {
      path: 'editar-clase/:id',
      loadChildren: () => import('./paginasProfes/editar-clase/editar-clase.module').then(m => m.EditarClasePageModule),
      canActivate: [AuthGuard],
      data: { expectedRole: 'profesor' }
    },
    {
      path: 'slide-in-animation',
      loadChildren: () => import('./animations/slide-in-animation/slide-in-animation.module').then( m => m.SlideInAnimationPageModule)
    },
    {
      path: 'wraper-animation',
      loadChildren: () => import('./animations/wraper-animation/wraper-animation.module').then( m => m.WraperAnimationPageModule)
    },
    {
      path: '**',
      loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundPageModule)
    },
  ];
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
