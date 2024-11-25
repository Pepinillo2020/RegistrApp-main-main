import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerReglamentoPage } from './ver-reglamento.page';

describe('VerReglamentoPage', () => {
  let component: VerReglamentoPage;
  let fixture: ComponentFixture<VerReglamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerReglamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
