import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarClasePage } from './editar-clase.page';

describe('EditarClasePage', () => {
  let component: EditarClasePage;
  let fixture: ComponentFixture<EditarClasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
