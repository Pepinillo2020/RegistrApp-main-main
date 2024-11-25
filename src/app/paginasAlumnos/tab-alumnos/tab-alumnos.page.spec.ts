import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabAlumnosPage } from './tab-alumnos.page';

describe('TabAlumnosPage', () => {
  let component: TabAlumnosPage;
  let fixture: ComponentFixture<TabAlumnosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
