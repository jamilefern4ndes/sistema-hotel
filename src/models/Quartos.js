export class Quartos {
    constructor(quantidade) {
        this._quantidade = parseInt(quantidade)
        this._lista = []

        //configurar aparência dos quartos depois
        this._quartos = Array.from({ length: valor }, (_, i) => ({
            n: i + 1,
            situacao: "vago"
        }))
    }

    criarQuartos() {

        for (let i = 0; i < this._quantidade; i++) {
            const div = document.createElement("div")
            div.classList.add("quarto");
            div.textContent = `Quarto ${i + 1}`
            this._lista.push(div)
        }

        return this._lista
    }
}
