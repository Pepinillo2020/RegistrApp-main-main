import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabProfPage } from './tab-prof.page';

describe('TabProfPage', () => {
  let component: TabProfPage;
  let fixture: ComponentFixture<TabProfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
