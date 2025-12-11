export class QuartosView {

    constructor(container) {
        this.container = container
    }

    update(listaDeQuartos) {
        this.container.innerHTML = ""

        listaDeQuartos.forEach(quarto => {
            this.container.appendChild(quarto)
        })
    }
}
