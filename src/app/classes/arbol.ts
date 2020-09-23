class Nodo {
    dato: number;
    der: Nodo;
    izq: Nodo;
    constructor(dato: number) {
        this.dato = dato;
        this.der = null;
        this.izq = null;
    }
}
class PilaNodo {
    v: Array<Nodo> = new Array<Nodo>();
    constructor() {}
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
        return this.v.pop();
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
    recorridoPreordenRecursivo2(n: Nodo) {
        if (n !== null) {
            console.log(n.dato);
            this.recorridoPreordenRecursivo2(n.izq);
            this.recorridoPreordenRecursivo2(n.der);
        }
    }
    recorridoPreordenRecursivo() {
        this.recorridoPreordenRecursivo2(this.raiz);
    }
    recorridoInordenRecursivo2(n: Nodo) {
        this.recorridoInordenRecursivo2(n.izq);
        console.log(n.dato);
        this.recorridoInordenRecursivo2(n.der);
    }
    recorridoInordenRecursivo() {
        this.recorridoInordenRecursivo2(this.raiz);
    }
    recorridoPreordenNoRecursivo() {
        let act: Nodo;
        act = this.raiz;
        const pila = new PilaNodo();
        while (act !== null || !pila.vacia()) {
            if (act !== null) {
                console.log(act.dato);
                pila.insertar(act.der);
                act = act.izq;
            }
            else {
                act = pila.extraer();
            }
        }
    }
    recorridoInordenNoRecursivo2(n: Nodo) {
        // Implementar el recorrido inorden no recursivo
        // 1. act = raiz
        // 2. si act no es null
        //    2.1 colocar el nodo act a la pila
        //    2.2 act = act.izq
        //    2.3 repetir desde (2) hasta que act sea null
        // 3. si act es null y la pila no esta vacia
        //     3.1 extraer un nodo de la pila y asignar a act
        //     3.2 mostrar el valor de act
        //     3.3 act  = act.der
        // 4 Si act no es null o la pila no esta vacia ir a (2)
    }
    recorridoInordenNoRecursivo() {
        this.recorridoInordenNoRecursivo2(this.raiz);
    }
    insertar(dato: number) {
        this.raiz = this.insertar2(this.raiz, dato);
    }
    insertar2(nodo: Nodo, dato: number) {
        if (nodo === null) {
            return new Nodo(dato);
        }
        else if (dato > nodo.dato) {
            nodo.der = this.insertar2(nodo.der, dato);
            return nodo;
        }
        else {
            nodo.izq = this.insertar2(nodo.izq, dato);
            return nodo;
        }
    }
}
