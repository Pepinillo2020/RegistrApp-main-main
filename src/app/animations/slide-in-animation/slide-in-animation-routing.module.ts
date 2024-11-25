import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideInAnimationPage } from './slide-in-animation.page';

const routes: Routes = [
  {
    path: '',
    component: SlideInAnimationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlideInAnimationPageRoutingModule {}
