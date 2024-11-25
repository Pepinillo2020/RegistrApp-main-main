import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { slideInAnimationDerAIzq } from 'src/app/animations/slide-in-animation/slide-in-animation.page';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-tab-prof',
  templateUrl: './tab-prof.page.html',
  styleUrls: ['./tab-prof.page.scss'],
})
export class TabProfPage implements OnInit {

  nombreUsuario: string = '';

  constructor(
    private animationCtrl: AnimationController,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.mostrarNombreUsuario();
  }

  async ionViewDidEnter(){
    const animation = slideInAnimationDerAIzq(this.animationCtrl);
    await animation.play();
  }

  mostrarNombreUsuario(){
    this.nombreUsuario = this.authService.getNombreUsuario();
  }

  cerrarSesion(){
    this.authService.logout();
  }
}
