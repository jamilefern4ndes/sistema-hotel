import { Quartos } from "../models/Quartos.js";
import { QuartosView } from "../views/QuartosView.js";

export class QuartoController {

    constructor() {
        this.view = new QuartosView(document.querySelector(".quartos-cadastrados"));
    }

    add(e,) {
        e.preventDefault();

        const quantidade = e.target.value
        const quartosModel = new Quartos(quantidade);

        const lista = quartosModel.criarQuartos(); // ← pega os DIVs criados

        this.view.update(lista); // ← envia para a view

        this.configuraQuartos(e.target.value)
    }

    configuraQuartos(valor){

    }
}
