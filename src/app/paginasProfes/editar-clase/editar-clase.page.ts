import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassService } from 'src/app/services/class.service';
import { Class } from 'src/app/models/class.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editar-clase',
  templateUrl: './editar-clase.page.html'
})
export class EditarClasePage implements OnInit {
  classForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required]
  });
  
  // Ahora el ID puede ser una cadena de texto (alfanumérico)
  classId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private classService: ClassService,
    private alertController: AlertController // Importa el AlertController aquí
  ) {}

  ngOnInit() {
    // Obtener el ID como cadena de texto (puede tener letras y números)
    this.classId = this.route.snapshot.paramMap.get('id');
  
    if (!this.classId) {
      console.error('No se encontró el ID de la clase en la URL');
      return;
    }
    
    // Obtener los datos de la clase y precargar el formulario
    this.classService.getClass(this.classId).subscribe((clase: Class) => {
      this.classForm.patchValue({
        title: clase.title,
        description: clase.description,
        date: clase.date
      });
    }, (error) => {
      console.error('Error al obtener la clase:', error);
    });
  }

  // Método para confirmar la edición de la clase
  async confirmEdit() {
    const alert = await this.alertController.create({
      header: 'Confirmar Edición',
      message: '¿Estás seguro de que deseas editar esta clase?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Edición cancelada');
          }
        },
        {
          text: 'Editar',
          handler: () => {
            this.submitEdit(); // Llama al método para realizar la edición
          }
        }
      ]
    });

    await alert.present();
  }

  // Método para manejar el envío del formulario (ahora llamado internamente)
  private submitEdit() {
    if (this.classId && this.classForm.valid) {
      const updatedClass: Class = {
        id: this.classId,  // El ID sigue siendo alfanumérico
        title: this.classForm.get('title')?.value,
        description: this.classForm.get('description')?.value,
        date: this.classForm.get('date')?.value,
      };
  
      this.classService.updateClass(this.classId, updatedClass).subscribe({
        next: (response) => {
          console.log('Clase actualizada:', response);
          // Redirigir o mostrar un mensaje de éxito
        },
        error: (error) => {
          console.error('Error al actualizar la clase:', error);
        }
      });
    } else {
      console.error('El formulario no es válido.');
    }
  }

  // Método para manejar el clic del botón de edición
  onSubmit() {
    this.confirmEdit(); // Mostrar el diálogo de confirmación antes de editar
  }
}
