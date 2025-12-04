// Quartos.js
export class Quartos {
    constructor(valor) {
        this._quantidadeQuartos = parseInt(valor)
    }

    _criaQuartos() {
        for (let i = 0; i < this._quantidadeQuartos; i++) {
            const quarto = document.createElement("div")
            quarto.classList.add("quarto")
            console.log(`quarto ${i} criado`)
        }
    }
}