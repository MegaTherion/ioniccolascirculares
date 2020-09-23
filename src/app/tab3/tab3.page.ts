import { Component } from '@angular/core';
import { ListaOrdenada } from '../classes/lista-ordenada';
import { Arbol } from '../classes/arbol';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  arbol: Arbol;

  constructor() {
    this.arbol = new Arbol();
    this.arbol.insertar(7);
    this.arbol.insertar(4);
    this.arbol.insertar(5);
    this.arbol.insertar(9);
    this.arbol.insertar(8);
    this.arbol.insertar(11);
  }

  verArbol() {
    // this.arbol.recorridoAmplitud();
  }
}
