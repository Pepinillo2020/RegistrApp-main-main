import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  UsuarioDeLogin: string="";
  UsuarioComparativo: string="";
  Password: string="";

  constructor(public alertaContrasenna: AlertController, private router: Router, public newToast: ToastController) { }

  ngOnInit(){
    const state = this.router.getCurrentNavigation()?.extras.state;

    if (state && state['user']){
      this.UsuarioDeLogin = state['user']
    }

    if (state && state['password']){
      this.Password = state['password'];
      
    }else{
      this.Password = history.state.password;
    }
  }

  async presentarToast(message: string, duration?: number){
    const tostada = await this.newToast.create({
      message: message,
      duration: duration?duration: 2000,
      position: 'top'
    });
    tostada.present();
  }

  async mensajeAlertaPass(){
    const mensajePass = await this.alertaContrasenna.create({
      header: '',
      message: 'Se ha enviado un correo al email asociado a la cuenta',
      buttons: [{
        text: 'OK',
        handler: () => {this.router.navigate(['/login'])
        }
      }
    ]
    });

    await mensajePass.present();
  }

  async verificarUsuario(){
    if(this.UsuarioComparativo){
      await this.mensajeAlertaPass();
    } else {
      this.presentarToast("Debe ingresar su nombre de usuario")
    }
  }

  
/* EN ESTA SECCIÓN ESTAN EL VALIDAR USUARIO (COMPARA USUARIO INGRESADO EN ESTA PAGINA CON EL ALMACENADO) Y PRESENTAR ALERTA (PRESENTA UNA ALERTA CON LA CONTRASEÑA ASOCIADA)
  validarUsuario(dato = this.UsuarioComparativo){
    if(dato == this.UsuarioDeLogin){
      this.presentarAlerta();
      return true
    }
    return false;
  }

  async presentarAlerta(){
    const alerta = await this.alertaContrasenna.create({
      header: 'Su contraseña es:',
      message: this.Password,
      buttons: ['OK']
    });

    await alerta.present();
  }
*/
}
