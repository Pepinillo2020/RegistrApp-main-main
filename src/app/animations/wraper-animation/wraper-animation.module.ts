import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WraperAnimationPageRoutingModule } from './wraper-animation-routing.module';

import { WraperAnimationPage } from './wraper-animation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WraperAnimationPageRoutingModule
  ],
  declarations: [WraperAnimationPage]
})
export class WraperAnimationPageModule {}
