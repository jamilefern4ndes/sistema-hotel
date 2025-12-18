import { Quartos } from "../models/Quartos.js"
import { QuartosView } from "../views/QuartosView.js"
import { Hospede } from "../models/Hospede.js"
import { CheckInView } from "../views/CheckInView.js"

export class HotelController {
    constructor() {
        this._quartos = null
        this._quartosView = null
        this._checkInView = null
        this._hospedes = []
    }

    add(quantidade, containerQuartos, containerForm) {
        this._quartos = new Quartos(quantidade)

        this._quartosView = new QuartosView(containerQuartos, (quarto) => {
            this.abrirFormularioCheckIn(quarto)
        })
        this._quartosView.render(this._quartos.getQuartos())

        // cria a view do formulário oculta
        this._checkInView = new CheckInView(containerForm, (dados) => {
            this.checkIn(dados)
        });
        containerForm.style.display = "none"
    }

    abrirFormularioCheckIn(quarto) {
        if (quarto.situacao === "vago") {
            // mostra o formulário apenas se o quarto estiver vago
            const formContainer = this._checkInView._container;
            formContainer.style.display = "flex"

            this._checkInView.updateQuartos(this._quartos.getQuartos());
            formContainer.querySelector("#numero-quarto").value = quarto.numero
        }
    }

    checkIn({ nome, cpf, numeroQuarto, checkin, checkout = "-" }) {
        const quarto = this._quartos.getQuartos().find(q => q.numero == numeroQuarto)

        // trabalhar com checkout depois
        // if (!quarto || quarto.situacao === "ocupado") {
        //     alert("Quarto não disponível para check-in!");
        //     return;
        // }
        const hospede = new Hospede(nome, cpf, numeroQuarto, checkin, checkout)
        this._hospedes.push(hospede)

        quarto.situacao = "ocupado"
        quarto.acao_disponivel = "CHECK-OUT"
        quarto.hospede = hospede

        this._quartosView.update(quarto)
        this._checkInView.updateQuartos(this._quartos.getQuartos())

        this._checkInView._container.style.display = "none"
        alert(`Check-in realizado com sucesso para ${hospede.nome} no quarto ${hospede.numeroQuarto}`)

        this._checkInView._limpar()
    } 
}