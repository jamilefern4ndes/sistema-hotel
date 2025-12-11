export class Quartos {
    constructor(quantidade) {
        this._quantidade = parseInt(quantidade)
        this._lista = []

        this._quartos = Array.from({ length: quantidade }, (_, i) => ({
            situacao: "vago",
            acao_disponivel: "CHECK-IN"
        }))
    }

    criarQuartos() {
        for (let i = 0; i < this._quantidade; i++) {
            const quarto = document.createElement("div")
            quarto.classList.add("quarto", this._quartos[i].situacao)

            const acao = document.createElement("div")
            acao.classList.add("btn")
            

            quarto.dataset.index = i
            quarto.textContent = `Quarto ${i + 1}`
            acao.textContent = `${this._quartos[i].acao_disponivel}`

            // traferir para o view paraatualizar 
            quarto.appendChild(acao)
            this._lista.push(quarto)
        }
        return this._lista
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
