import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { slideInAnimationAbajArriba } from 'src/app/animations/slide-in-animation/slide-in-animation.page';

@Component({
  selector: 'app-crear-codigo-qr',
  templateUrl: './crear-codigo-qr.page.html',
  styleUrls: ['./crear-codigo-qr.page.scss'],
})
export class CrearCodigoQRPage implements OnInit {

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  async ionViewDidEnter(){ //NO CAMBIAR NOMBRE ionViewDidEnter es un hook, no un método. Si lo cambias deja de funcionar la animación
    const animation = slideInAnimationAbajArriba(this.animationCtrl);
    await animation.play();
  }
}
