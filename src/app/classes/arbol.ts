class Nodo {
    dato: number;
    der: Nodo;
    izq: Nodo;
    constructor(dato: number) {
        this.dato = dato;
    }
}
class ColaNodo {
    v: Array<Nodo> = new Array<Nodo>();
    constructor() {
    }
    vacia(): boolean {
        return this.v.length === 0;
    }
    insertar(n: Nodo) {
        this.v.push(n);
    }
    extraer(): Nodo {
        if (this.vacia()) {
            return null;
        }
        return this.v.shift();
    }
}
export class Arbol {
    raiz: Nodo;
    cola: ColaNodo;
    constructor() {
        this.raiz = null;
        // this.raiz = undefined;

        this.cola = new ColaNodo();
    }
    recorridoAmplitud() {
        let act = this.raiz;
        while (act !== null) {
            console.log(act.dato);
            if (act.izq !== null) {
                this.cola.insertar(act.izq);
            }
            if (act.der !== null) {
                this.cola.insertar(act.der);
            }
            act = this.cola.extraer();
        }
    }
    insertar(dato: number) {
        this.raiz = this.insertar2(this.raiz, dato);
    }
    insertar2(nodo: Nodo, dato: number) {
        if (nodo === null) {
            return new Nodo(dato);
        }
        else if (dato > nodo.dato) {
            console.log(dato);
            nodo.der = this.insertar2(nodo.der, dato);
            return nodo;
        }
        else {
            nodo.izq = this.insertar2(nodo.izq, dato);
            return nodo;
        }
    }
}
