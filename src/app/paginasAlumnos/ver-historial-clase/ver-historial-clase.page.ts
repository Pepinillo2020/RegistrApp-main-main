import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { Attendance } from 'src/app/models/attendance.model';
import { slideInAnimationDerAIzq } from 'src/app/animations/slide-in-animation/slide-in-animation.page';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-ver-historial-clase',
  templateUrl: './ver-historial-clase.page.html',
  styleUrls: ['./ver-historial-clase.page.scss'],
})
export class VerHistorialClasePage implements OnInit {
  attendances: Attendance[] = [];
  classId: string = '948c'; // El ID de la clase. Este debería ser dinámico dependiendo de la clase que seleccionó el alumno
  studentId: string = '12345'; // Reemplaza esto con el ID real del alumno (esto debería provenir de un servicio de autenticación o similar)

  constructor(
    private animationCtrl: AnimationController,
    private attendanceService: AttendanceService,

  ) {}

  ngOnInit() {
    this.cargarHistorial();
  }

  async ionViewDidEnter() {
    const animation = slideInAnimationDerAIzq(this.animationCtrl);
    await animation.play();
  }

  cargarHistorial() {
    this.attendanceService.getAttendanceByClassId(this.classId).subscribe((data) => {
      // Filtramos las asistencias para que solo se muestren las que corresponden al alumno actual
      this.attendances = data.filter(attendance => attendance.studentId === this.studentId);

      // Si no hay asistencias para este alumno, mostrar un mensaje
      if (this.attendances.length === 0) {
        console.log('No hay registros de asistencia para este alumno.');
      }
    });
  }
}
