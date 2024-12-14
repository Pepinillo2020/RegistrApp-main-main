import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { slideInAnimationAbajArriba } from 'src/app/animations/slide-in-animation/slide-in-animation.page';
import { QrCodeService } from 'src/app/compartido/qr-code.service';

@Component({
  selector: 'app-crear-codigo-qr',
  templateUrl: './crear-codigo-qr.page.html',
  styleUrls: ['./crear-codigo-qr.page.scss'],
})
export class CrearCodigoQRPage implements OnInit {

  qrCodeUrl: string | null = null;

  constructor(
    private animationCtrl: AnimationController,
    private qrCodeService: QrCodeService,
  ) { }

  ngOnInit() {
    this.qrCodeUrl = this.qrCodeService.getQRCodeUrl();
    console.log(this.qrCodeUrl);
  }

  async ionViewDidEnter(){ //NO CAMBIAR NOMBRE ionViewDidEnter es un hook, no un método. Si lo cambias deja de funcionar la animación
    const animation = slideInAnimationAbajArriba(this.animationCtrl);
    await animation.play();
  }
}
