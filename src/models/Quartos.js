export class Quartos {
    constructor(quantidade) {
        this._quantidade = parseInt(quantidade)
        this._lista = []

        this._quartos = Array.from({ length: quantidade }, (_, i) => ({
            numero: 0,
            situacao: "vago",
            acao_disponivel: "CHECK-IN"
        }))
    }

    criarQuartos() {
        return this._quartos.map((quarto, i) => {
            const card = document.createElement("div")
            card.classList.add("quarto", quarto.situacao)

            const acao = document.createElement("div")
            acao.classList.add("btn")

            card.dataset.index = i
            quarto.numero = i+1
            card.textContent = `Quarto ${quarto.numero}`
            acao.textContent = quarto.acao_disponivel

            card.appendChild(acao)
            return card
        })
    }

 
    update(indice){
        const quarto = this._quartos[indice]
        if (quarto.situacao === "vago") {
            quarto.situacao = "ocupado"
            quarto.acao_disponivel = "CHECK-OUT"
        } else {
            quarto.situacao = "vago"
            quarto.acao_disponivel = "CHECK-IN"
        }
        return quarto
    }

}