import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { slideInAnimationDerAIzq } from 'src/app/animations/slide-in-animation/slide-in-animation.page';

@Component({
  selector: 'app-tab-prof',
  templateUrl: './tab-prof.page.html',
  styleUrls: ['./tab-prof.page.scss'],
})
export class TabProfPage implements OnInit {

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  async ionViewDidEnter(){
    const animation = slideInAnimationDerAIzq(this.animationCtrl);
    await animation.play();
  }
}
