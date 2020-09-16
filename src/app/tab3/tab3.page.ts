import { Component } from '@angular/core';
import { ListaOrdenada } from '../classes/lista-ordenada';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  lista: ListaOrdenada;

  constructor() {
    this.lista = new ListaOrdenada();
  }

  verLista() {
    this.lista.insertar('4');
    this.lista.insertar('Xiaomi');
    this.lista.insertar('Samsung');
    this.lista.ver();
  }
}
