import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabProfPageRoutingModule } from './tab-prof-routing.module';

import { TabProfPage } from './tab-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabProfPageRoutingModule
  ],
  declarations: [TabProfPage]
})
export class TabProfPageModule {}
