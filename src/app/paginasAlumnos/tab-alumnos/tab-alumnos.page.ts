import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { slideInAnimationDerAIzq } from 'src/app/animations/slide-in-animation/slide-in-animation.page';
import { ClassService } from 'src/app/services/class.service';
import { AttendanceService } from 'src/app/services/attendance.service';
import { Class } from 'src/app/models/class.model';
import { Attendance } from 'src/app/models/attendance.model';

@Component({
  selector: 'app-tab-alumnos',
  templateUrl: './tab-alumnos.page.html',
  styleUrls: ['./tab-alumnos.page.scss'],
})
export class TabAlumnosPage implements OnInit {
  classes: Class[] = [];
  studentId: string = '12345'; // Supongamos que tenemos el ID del estudiante actual

  constructor(
    private animationCtrl: AnimationController,
    private classService: ClassService,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit() {
    this.obtenerClases();
  }

  async ionViewDidEnter() {
    const animation = slideInAnimationDerAIzq(this.animationCtrl);
    await animation.play();
  }

  obtenerClases() {
    this.classService.getClasses().subscribe((data) => {
      this.classes = data;
    });
  }

  registrarAsistencia(clase: Class) {
    const attendance: Attendance = {
      id: '', // Puedes generar un ID único aquí o dejar que el backend lo haga
      classId: clase.id,
      studentId: this.studentId,
      timestamp: new Date().toISOString() // Formato ISO para la marca de tiempo
    };

    this.attendanceService.registerAttendance(attendance).subscribe(() => {
      alert(`Asistencia registrada para la clase: ${clase.title}`);
    });
  }
}
