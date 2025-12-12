import { Quartos } from "../models/Quartos.js"
import { QuartosView } from "../views/QuartosView.js"


export class QuartoController {
    constructor() {
        this.view = new QuartosView(document.querySelector(".quartos-cadastrados"))
        this.model = null

        this.view.onQuartoClick = (i, card) => this._administrarQuarto(i, card)
    }

    add(e) {
        e.preventDefault()
        const quantidade = e.target.value
        this.model = new Quartos(quantidade)
        const lista = this.model.criarQuartos()
        this.view.update(lista)
    }

    _administrarQuarto(i, card) {
        const quarto = this.model.update(i)
        console.log(quarto.situacao, quarto.acao_disponivel)
        const lista = this.model.criarQuartos()
        this.view.update(lista)
    }
}
