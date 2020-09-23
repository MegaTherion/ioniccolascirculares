export class Nodo {
    dato: string;
    enlace: Nodo;
    constructor(dato: string) {
        this.dato = dato;
        this.enlace = null;
    }
}

export class ListaOrdenada {
    inicio: Nodo;

    constructor() {
        this.inicio = null;
    }

    insertar(dato: string) {
        // Debe insertar un nodo en la lista, en el lugar correcto
        // de tal forma que al visualizar la lista, los datos estén ordenados
        const nuevo = new Nodo(dato);
        let act: Nodo;
        let ant: Nodo;
        act = ant = this.inicio;
        while (act != null && dato > act.dato) {
            ant = act;
            act = act.enlace;
        }
        if (act === ant) {
            nuevo.enlace = this.inicio;
            this.inicio = nuevo;
        } else {
            ant.enlace = nuevo;
            nuevo.enlace = act;
        }
    }

    ver() {
        console.log('------ VISUALIZANDO LISTA ORDENADA ------');
        let act = this.inicio;
        while (act != null) {
            console.log(act.dato);
            act = act.enlace;
        }
    }
}


