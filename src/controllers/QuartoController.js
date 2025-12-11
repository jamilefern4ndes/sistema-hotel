import { Quartos } from "../models/Quartos.js"
import { QuartosView } from "../views/QuartosView.js"

export class QuartoController {

    constructor() {
        this.view = new QuartosView(document.querySelector(".quartos-cadastrados"))
        this.model = null
    }

    add(e) {
        e.preventDefault()
        // cria quartos conforme número determinado no dom
        const quantidade = e.target.value
        this.model = new Quartos(quantidade)

        // envia os quartos criados para o view
        const lista = this.model.criarQuartos()
        this.view.update(lista)

        this._bindEvents(lista)
    }

    // adiciona click aos quartos
    _bindEvents(quartos) {
        quartos.forEach(card => {
            card.addEventListener("click", () => {
                //console.log("clique card")
                const indice = parseInt(card.dataset.index)
                this._administrarQuarto(indice, card)
            })
        })
    }

    _administrarQuarto(i, card){
        const quarto = this.model.update(i)
        console.log(quarto.situacao, quarto.acao_disponivel)
    }

}
