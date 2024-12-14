import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-slide-in-animation',
  templateUrl: './slide-in-animation.page.html',
  styleUrls: ['./slide-in-animation.page.scss'],
})
export class SlideInAnimationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export function slideInAnimationDerAIzq(animationCtrl: AnimationController): Animation {
  return animationCtrl.create()
  .addElement(document.querySelector('ion-router-outlet')!)
  .duration(700)
  .easing('ease-in-out')
  .fromTo('transform', 'translateX(100%)', 'translateX(0%)');
}

export function slideInAnimationAbajArriba(animationCtrl: AnimationController): Animation{
  return animationCtrl.create()
  .addElement(document.querySelector('ion-router-outlet')!)
  .duration(700)
  .easing('ease-in-out')
  .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
}

export function slideInAnimationArribaAbajo(animationCtrl: AnimationController): Animation{
  return animationCtrl.create()
  .addElement(document.querySelector('ion-router-outlet')!)
  .duration(700)
  .easing('ease-in-out')
  .fromTo('transform', 'translateY(-100%)', 'translateY(0%)');
}