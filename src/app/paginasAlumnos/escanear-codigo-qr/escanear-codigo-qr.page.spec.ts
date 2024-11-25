import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscanearCodigoQRPage } from './escanear-codigo-qr.page';

describe('EscanearCodigoQRPage', () => {
  let component: EscanearCodigoQRPage;
  let fixture: ComponentFixture<EscanearCodigoQRPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscanearCodigoQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
