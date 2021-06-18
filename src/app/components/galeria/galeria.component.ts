import { Component } from '@angular/core';
import { Imagen } from '../../models/imagen';
import galeria from '../../../assets/imagenes.json';

const DEFAULT_FONT_SIZE = 12;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  imagenes: Imagen[] = galeria;
  
  fontSize: number;

  constructor(){
    this.fontSize = DEFAULT_FONT_SIZE;
  }

  decrease(){
    if (this.fontSize< 8) {
      alert('Puede dañarse la vista, aumente el tamaño o reinicielo');
      return;
    }
    this.fontSize = (this.fontSize * 0.8);
  }

  increase(){
    if (this.fontSize > 18) {
      alert('No va a ver nada, por favor reduzca el tamaño o reinicialo');
      return;
    }
    this.fontSize = (this.fontSize * 1.05);
  }

  reset(){
    this.fontSize = DEFAULT_FONT_SIZE;
  }
  
  rotate(imagen:Imagen) {
    var img = document.getElementById(imagen._id);
    
    if (!imagen.canRotate) {
      img.setAttribute("class", "card rotateImg");
      imagen.canRotate = true;
      return;
    }
    imagen.canRotate = false;
    img.setAttribute("class", "card rotateImg2");
    
  }

}

