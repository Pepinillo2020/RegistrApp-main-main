import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { slideInAnimationDerAIzq } from 'src/app/animations/slide-in-animation/slide-in-animation.page';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-tab-alumnos',
  templateUrl: './tab-alumnos.page.html',
  styleUrls: ['./tab-alumnos.page.scss'],
})
export class TabAlumnosPage implements OnInit {

  nombreUsuario: string = '';

  constructor(
    private animationCtrl: AnimationController,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.mostrarNombreUsuario();
  }

  async ionViewDidEnter(){ //NO CAMBIAR NOMBRE ionViewDidEnter es un hook, no un método. Si lo cambias deja de funcionar la animación
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
