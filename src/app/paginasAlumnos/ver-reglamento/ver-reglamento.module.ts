import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerReglamentoPageRoutingModule } from './ver-reglamento-routing.module';

import { VerReglamentoPage } from './ver-reglamento.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerReglamentoPageRoutingModule,
    PdfViewerModule,
  ],
  declarations: [VerReglamentoPage]
})
export class VerReglamentoPageModule {}
