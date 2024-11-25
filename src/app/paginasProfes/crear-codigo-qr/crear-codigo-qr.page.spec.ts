import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearCodigoQRPage } from './crear-codigo-qr.page';

describe('CrearCodigoQRPage', () => {
  let component: CrearCodigoQRPage;
  let fixture: ComponentFixture<CrearCodigoQRPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCodigoQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
