import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlideInAnimationPageRoutingModule } from './slide-in-animation-routing.module';

import { SlideInAnimationPage } from './slide-in-animation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideInAnimationPageRoutingModule
  ],
  declarations: [SlideInAnimationPage]
})
export class SlideInAnimationPageModule {}
