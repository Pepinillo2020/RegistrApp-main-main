import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerHistorialClasePage } from './ver-historial-clase.page';

describe('VerHistorialClasePage', () => {
  let component: VerHistorialClasePage;
  let fixture: ComponentFixture<VerHistorialClasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerHistorialClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
