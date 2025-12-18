export class Quartos {
    constructor(quantidade) {
        this.quantidade = parseInt(quantidade)
        this.criarQuartos()
    }

    criarQuartos(){
        this._quartos = Array.from({ length: this.quantidade }, (_, i) => ({
            numero: i+1,
            situacao: "vago",
            acao_disponivel: "CHECK-IN"
        }))

    }
    getQuartos() {
        return this._quartos;
    }

}