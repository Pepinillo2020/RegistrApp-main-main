import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { slideInAnimationAbajArriba } from 'src/app/animations/slide-in-animation/slide-in-animation.page';

@Component({
  selector: 'app-ver-reglamento',
  templateUrl: './ver-reglamento.page.html',
  styleUrls: ['./ver-reglamento.page.scss'],
})
export class VerReglamentoPage implements OnInit {

  constructor(private animationCtrl: AnimationController) { }

  pdfSrc = "./../assets/reglamento.pdf"
  currentPage = 1;
  totalPages = 27;
  zoom: number = 1;

  ngOnInit() {
  }

  substractZoom(){
    if (this.zoom > 0){
      this.zoom -= 0.5;
    }
  }

  addZoom(){
    this.zoom += 0.5;
  }

  nextPage(){
    if (this.currentPage < this.totalPages){
      this.currentPage++
    }
  }

  prevPage(){
    if (this.currentPage > 1) {
      this.currentPage--
    }
  }

  //ANIMACION

  async ionViewDidEnter(){
    const animation = slideInAnimationAbajArriba(this.animationCtrl)
    await animation.play();
  }
}
