class Node {
    constructor(valor) {
        this.valor = valor
        this.anterior = null
        this.proximo = null
    } 
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    inserirInicio(v) {
        let novo = new Node(v)
        if(!this.head) {
            this.head = this.tail = novo
        } else {
            novo.proximo = this.head
            this.head.anterior = novo
            this.head = novo
        }

        this.length++
    }

    inserirFim(v) {
        let novo = new Node(v)
        if(!this.head) {
            this.head = this.tail = novo
        } else {
            this.tail.proximo = novo
            novo.anterior = this.tail
            this.tail = novo
        }

        this.length++
    }

    inserirEm(indice, valor) { // inserir em uma posição específica
        if(indice < 0 || indice > this.length) throw new Error("Índice inválido")
        if(indice === 0) return this.inserirInicio(valor)
        if(indice === this.length) return this.inserirFim(valor)
        
        let atual = this.head
        for(let i = 0; i < indice; i++) {
            atual = atual.proximo
        }

        let novo = new Node(v)
        let noAnterior = atual.anterior

        noAnterior.proximo = novo
        novo.anterior = noAnterior
        novo.proximo = atual
        atual.anterior = novo

        this.length++
    }

    removerEm(indice) { // remover de uma posição específica
        if(indice < 0 || indice >= this.length) throw new Error("Índice inválido")
        if(indice === 0) {
            let noRemovido = this.head
            this.head = this.head.proximo
            if(this.head) this.head.anterior = null
            else this.tail = null
            this.length--
            return noRemovido.valor
        }
        if(indice === this.length - 1) {
            let noRemovido = this.tail
            this.tail = this.tail.anterior
            if(this.tail) this.tail.proximo = null
            else this.head = null
            this.length--
            return noRemovido.valor
        }

        let atual = this.head
        for(let i = 0; i < indice; i++) {
            atual = atual.proximo
        }

        let noAnterior = atual.anterior
        let noProximo = atual.proximo

        noAnterior.proximo = noProximo
        if(noProximo) noProximo.anterior = noAnterior

        this.length--
    }

    imprimirFrente() {

    }

    imprimirAtras() {

    }
}