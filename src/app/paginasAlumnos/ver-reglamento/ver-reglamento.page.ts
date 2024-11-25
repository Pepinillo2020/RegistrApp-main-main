import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { slideInAnimationAbajArriba } from 'src/app/animations/slide-in-animation/slide-in-animation.page';

@Component({
  selector: 'app-ver-reglamento',
  templateUrl: './ver-reglamento.page.html',
  styleUrls: ['./ver-reglamento.page.scss'],
})
export class VerReglamentoPage implements OnInit {

  constructor(private animationCtrl: AnimationController) { }

  pdfSrc = "./../assets/reglamento.pdf"
  zoom: number = 1;

  ngOnInit() {
  }

  substractZoom(){
    if (this.zoom > 0){
      this.zoom -= 0.5;
    }
  }

  addZoom(){
    this.zoom += 0.5;
  }

  //ANIMACION

  async ionViewDidEnter(){
    const animation = slideInAnimationAbajArriba(this.animationCtrl)
    await animation.play();
  }
}
