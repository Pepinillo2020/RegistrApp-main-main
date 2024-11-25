import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerHistorialPage } from './ver-historial.page';

describe('VerHistorialPage', () => {
  let component: VerHistorialPage;
  let fixture: ComponentFixture<VerHistorialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerHistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
