import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WraperAnimationPage } from './wraper-animation.page';

const routes: Routes = [
  {
    path: '',
    component: WraperAnimationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WraperAnimationPageRoutingModule {}
