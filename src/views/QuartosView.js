// QuartosView.js
export class QuartosView {
    constructor(container) {
        this.container = container
        this.container.addEventListener("click", (e) => {
            const card = e.target.closest(".quarto")
            if (card) {
                const indice = parseInt(card.dataset.index)
                this.onQuartoClick?.(indice, card)
            }
        })
    }

    update(listaDeQuartos) {
        this.container.innerHTML = ""
        listaDeQuartos.forEach(quarto => {
            this.container.appendChild(quarto)
        })
    }
}
