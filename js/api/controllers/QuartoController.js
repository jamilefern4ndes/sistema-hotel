
import { Quartos } from "../models/Quartos.js"

export class QuartoController {
    constructor() {
        this._quartos = null
    }

    add(e) {
        e.preventDefault()
        
        const valor = e.target.value
        this._quartos = new Quartos(valor)
        this._quartos._criaQuartos()
    }
}