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
            quarto.classList.add("quarto", this._quartos[i].situacao);

            quarto.textContent = `Quarto ${i + 1}`
            this._lista.push(quarto)
        }
        return this._lista
    }

}
