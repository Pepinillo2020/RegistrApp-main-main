import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { AnimationController } from '@ionic/angular';
import { wrapperAnimation } from '../animations/wraper-animation/wraper-animation.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login:any={
    Usuario:"",
    Password:""
  }

  private token = 'tokenFalso123'

  field:string="";

  constructor(public toastController: ToastController, private router:Router, private authService: AuthService, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000,
        position: 'top'
      }
    );
    toast.present();
  }

  validateModel(model:any){
    for(var [key, value] of Object.entries(model)){
      if (value=="") {
        this.field=key;
        return false;
      }
    }
    return true;
  }
  
  validarLargoUsuario(dato: string){
    if(dato.length>=3 && dato.length<=8){
      return true
    }
    return false;
  }

  validarLargoPass(dato: string){
    if(dato.length>=8){
      return true
    }
    return false;
  }

  iniciarSesion() {
    if (this.validateModel(this.login)) {
      if (this.validarLargoUsuario(this.login.Usuario)) {
        if (this.validarLargoPass(this.login.Password)) {
          // Aquí llamamos al AuthService para intentar iniciar sesión
          this.authService.login(this.login.Usuario, this.login.Password).subscribe(success => {
            if (success) {
              this.presentToast("Bienvenido " + this.login.Usuario);
              const role = this.authService.getRole();
              // Redirigir según el rol
              if (role === 'profesor') {
                this.router.navigate(['/tab-prof']); // Redirige a tab de profesor
              } else if (role === 'alumno') {
                this.router.navigate(['/tab-alumnos']); // Redirige a tab de alumno
              } else {
                this.presentToast("Rol no reconocido.");
              }
            } else {
              this.presentToast("Credenciales inválidas.");
              this.login.Password = ""; // Limpiar el campo de contraseña
            }
          }, error => {
            console.error("Error en la autenticación", error);
            this.presentToast("Error en el servidor. Intente más tarde.");
          });
        } else {
          this.presentToast("La contraseña debe ser de largo 8");
          this.login.Password = "";
        }
      } else {
        this.presentToast("El largo del usuario debe ser entre 3 y 8 caracteres");
        this.login.Usuario = "";
      }
    } else {
      this.presentToast("Falta: " + this.field);
    }
  }

  //ANIMACION
  async ionViewDidEnter(){
    const animation = wrapperAnimation(this.animationCtrl)
    await animation.play();
  }
}
