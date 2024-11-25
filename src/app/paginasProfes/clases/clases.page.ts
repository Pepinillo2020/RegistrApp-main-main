import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models/class.model';
import { AnimationController } from '@ionic/angular';
import { slideInAnimationAbajArriba } from 'src/app/animations/slide-in-animation/slide-in-animation.page';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {
  classes: Class[] = [];

  constructor(private classService: ClassService, private animationCtrl: AnimationController) {}

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses() {
    this.classService.getClasses().subscribe(data => {
      this.classes = data;
    });
  }

  deleteClass(id: string) {
    this.classService.deleteClass(id).subscribe(() => {
      this.loadClasses();
    });
  }

  async ionViewDidEnter(){ //NO CAMBIAR NOMBRE ionViewDidEnter es un hook, no un método. Si lo cambias deja de funcionar la animación
    const animation = slideInAnimationAbajArriba(this.animationCtrl);
    await animation.play();
  }
}
