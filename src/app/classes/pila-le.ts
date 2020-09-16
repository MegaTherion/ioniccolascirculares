export class Nodo {
    dato: string;
    enlace: Nodo;
    constructor(dato: string) {
        this.dato = dato;
        this.enlace = null;
    }
}

export class PilaLe {
    inicio: Nodo;

    constructor() {
        this.inicio = null;
    }
    vacia(): boolean {
        return (this.inicio == null);
    }
    insertar(dato: string) {
        const nuevo = new Nodo(dato);
        nuevo.enlace = this.inicio;
        this.inicio = nuevo;
    }
    extraer(): string {
        if (this.vacia()) {
            return '';
        }
        const aux = this.inicio.dato;
        this.inicio = this.inicio.enlace;
        return aux;
    }
    verUltimo(): string {
        if (this.vacia()) {
            return '';
        }
        return this.inicio.dato;
    }
    ver() {
        let act = this.inicio;
        while (act != null) {
            console.log(act.dato);
            act = act.enlace;
        }
    }

}

