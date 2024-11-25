import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models/class.model';
import { AnimationController, AlertController } from '@ionic/angular';
import { slideInAnimationAbajArriba } from 'src/app/animations/slide-in-animation/slide-in-animation.page';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {
  classes: Class[] = [];

  constructor(
    private classService: ClassService, 
    private animationCtrl: AnimationController, 
    private alertController: AlertController // Importamos el AlertController
  ) {}

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses() {
    this.classService.getClasses().subscribe(data => {
      this.classes = data;
    });
  }

  // Método para confirmar la eliminación de una clase
  async confirmDelete(classId: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar esta clase?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteClass(classId); // Llama al método para eliminar la clase
          }
        }
      ]
    });

    await alert.present();
  }

  // Método para eliminar una clase
  deleteClass(id: string) {
    this.classService.deleteClass(id).subscribe(() => {
      this.loadClasses();
    });
  }

  // Método que se ejecuta cuando la vista entra (hook de Ionic)
  async ionViewDidEnter() { 
    const animation = slideInAnimationAbajArriba(this.animationCtrl);
    await animation.play();
  }
}
