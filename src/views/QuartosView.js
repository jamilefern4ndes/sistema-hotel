export class QuartosView {

    constructor(container) {
        this.container = container; // container do DOM onde os quartos vão aparecer
    }

    update(listaDeQuartos) {
        this.container.innerHTML = ""; // limpa antes de renderizar

        listaDeQuartos.forEach(quarto => {
            this.container.appendChild(quarto);
        });
    }
}
