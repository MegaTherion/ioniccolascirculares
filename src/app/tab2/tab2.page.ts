import { Component } from '@angular/core';
import { Pila } from '../classes/pila';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  infija = '';
  postfija = '';
  pila: Pila;
  resultado: string = '';

  constructor() {
    this.pila = new Pila();
  }

  // char A[10]; // Arreglo de caracteres en lenguaje C
  // for (int i = 0; i<10; i++) {
  //   A[i]
  // }

  agregarApostfija(car: string) {
    this.postfija = this.postfija + car;
  }

  convertirApostfija() {
    this.postfija = '';
    // recorrer caracter a caracter la variable 'infija'
    for (let i = 0; i < this.infija.length; i++) {
      const c = this.infija.charAt(i);
      console.log(c);
      switch (c) {
        case '(':
          this.pila.insertar(c);
          break;
        case ')':
          while (this.pila.verUltimo() !== '(') {
            const extraido = this.pila.extraer();
            this.agregarApostfija(extraido);
          }
          this.pila.extraer();
          break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
          while (!this.pila.vacia() && this.prioridad(c) <= this.prioridad(this.pila.verUltimo())) {
            const extraido = this.pila.extraer();
            this.agregarApostfija(extraido);
          }
          this.pila.insertar(c);
          break;

        default:
          this.agregarApostfija(c);
      }
    }
    // Vaciar los operadores que quedaron en la pila
    while (!this.pila.vacia()) {
      this.agregarApostfija(this.pila.extraer());
    }
  }

  evaluarPostfija() {
    let op1: number;
    let op2: number;
    let res: number;
    for (let i = 0; i < this.postfija.length; i++) {
      const c = this.postfija.charAt(i);
      switch (c) {
        case '+':
          op2 = this.cadenaAnumero( this.pila.extraer() );
          op1 = this.cadenaAnumero( this.pila.extraer() );
          res = op1 + op2;
          this.pila.insertar('' + res);
          break;
        case '-':
          op2 = this.cadenaAnumero( this.pila.extraer() );
          op1 = this.cadenaAnumero( this.pila.extraer() );
          res = op1 - op2;
          this.pila.insertar('' + res);
          break;
        case '*':
          op2 = this.cadenaAnumero( this.pila.extraer() );
          op1 = this.cadenaAnumero( this.pila.extraer() );
          res = op1 * op2;
          this.pila.insertar('' + res);
          break;
        case '/':
          op2 = this.cadenaAnumero( this.pila.extraer() );
          op1 = this.cadenaAnumero( this.pila.extraer() );
          res = op1 / op2;
          this.pila.insertar('' + res);
          break;
        case '^':
          op2 = this.cadenaAnumero( this.pila.extraer() );
          op1 = this.cadenaAnumero( this.pila.extraer() );
          res = Math.pow(op1, op2);
          this.pila.insertar('' + res);
          break;
        default:
          this.pila.insertar(c);
      }
      this.pila.ver();
    }
    this.resultado = this.pila.extraer();
  }

  cadenaAnumero(cad: string): number {
    return +cad;
  }

  prioridad(operador: string): number {
    switch (operador) {
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 2;
      case '^':
        return 3;
      case '(':
        return 0;
      default:
        return -1;
    }
  }

}
