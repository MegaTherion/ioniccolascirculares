export class ArbolNodo {
    dato: number;
    izq: ArbolNodo;
    der: ArbolNodo;
    constructor(dato: number) {
        this.dato = dato;
        this.izq = this.der = null;
    }
}
