import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from '../../services/class.service';
import { AnimationController } from '@ionic/angular';
import { slideInAnimationArribaAbajo } from 'src/app/animations/slide-in-animation/slide-in-animation.page';
import { HttpClient } from '@angular/common/http';
import { QrCodeService } from 'src/app/compartido/qr-code.service';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.page.html',
  styleUrls: ['./crear-clase.page.scss'],
})
export class CrearClasePage implements OnInit {
  classForm: FormGroup;
  codigoQRGenerado: string | null = null;

  constructor(
    private fb: FormBuilder,
    private classService: ClassService,
    private router: Router,
    private animationCtrl: AnimationController,
    private http: HttpClient,
    private qrCodeService: QrCodeService,
  ) {
    this.classForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      asistencia: []
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.classForm.valid) {
      this.classService.createClass(this.classForm.value).subscribe((claseCreada) => {
        this.generarCodigoQR(claseCreada.id)
        this.router.navigate(['tab-prof/crear-codigo-qr']);
      });
    }
  }

  generarCodigoQR(classId: string){
    const url = `https://quickchart.io/qr?text=${classId}&size=200`;
    this.codigoQRGenerado = url;

    this.qrCodeService.setQRCodeUrl(url);
    }

  async ionViewDidEnter(){ //NO CAMBIAR NOMBRE ionViewDidEnter es un hook, no un método. Si lo cambias deja de funcionar la animación
    const animation = slideInAnimationArribaAbajo(this.animationCtrl);
    await animation.play();
  }
}
