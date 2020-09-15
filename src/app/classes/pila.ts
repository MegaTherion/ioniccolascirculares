export class Pila {

    v: Array<string> = new Array<string>(5);
    cima: number;

    constructor() {
      this.cima = -1;
    }

    vacia(): boolean {
      return (this.cima === -1);
    }

    llena(): boolean {
      return (this.cima === 4);
    }

    insertar(dato: string) {
      if (this.llena()) {
        return;
      }
      // console.log(this.dato);
      this.cima++;
      this.v[this.cima] = dato;
    }

    ver() {
      let i: number;
      for (i = 0; i <= this.cima; i++) {
        console.log(this.v[i]);
      }
    }

    extraer(): string {
      if (this.vacia()) {
        return '';
      }
      const aux = this.v[this.cima];
      this.v[this.cima] = '';
      this.cima--;
      return aux;
    }

    // Para ver el último elemento colocado (o el primero que se extraerá)
    verUltimo(): string {
        if (this.vacia()) {
            return '';
        }
        return this.v[this.cima];
    }
}
