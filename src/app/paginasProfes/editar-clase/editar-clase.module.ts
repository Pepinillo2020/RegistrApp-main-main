import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarClasePageRoutingModule } from './editar-clase-routing.module';

import { EditarClasePage } from './editar-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditarClasePageRoutingModule
  ],
  declarations: [EditarClasePage]
})
export class EditarClasePageModule {}
