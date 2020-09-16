export class Pila {

    v: Array<string>;
    cima: number;
    tam: number; // Tamaño de la pila

    constructor(n: number) {
      this.v = new Array<string>(n);
      this.tam = n;
      this.cima = -1;
    }

    vacia(): boolean {
      return (this.cima === -1);
    }

    llena(): boolean {
      return (this.cima === this.tam - 1);
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
      console.log(this.v);
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
