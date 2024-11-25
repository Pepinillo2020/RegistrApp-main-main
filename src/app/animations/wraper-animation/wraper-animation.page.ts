import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-wraper-animation',
  templateUrl: './wraper-animation.page.html',
  styleUrls: ['./wraper-animation.page.scss'],
})
export class WraperAnimationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export function wrapperAnimation(animationCtrl: AnimationController): Animation{
  return animationCtrl.create()
  .addElement(document.querySelector('ion-router-outlet')!)
  .duration(1000)
  .easing('ease-out')
  .fromTo('opacity', 0, 1)
}
