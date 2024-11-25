import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideInAnimationPage } from './slide-in-animation.page';

describe('SlideInAnimationPage', () => {
  let component: SlideInAnimationPage;
  let fixture: ComponentFixture<SlideInAnimationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideInAnimationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
