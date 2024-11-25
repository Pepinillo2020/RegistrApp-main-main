import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WraperAnimationPage } from './wraper-animation.page';

describe('WraperAnimationPage', () => {
  let component: WraperAnimationPage;
  let fixture: ComponentFixture<WraperAnimationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WraperAnimationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
