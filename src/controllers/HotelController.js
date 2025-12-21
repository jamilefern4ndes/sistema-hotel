import { Quartos } from "../models/Quartos.js";
import { QuartosView } from "../views/QuartosView.js";
import { Hospede } from "../models/Hospede.js";
import { CheckInView } from "../views/CheckInView.js";
import { Checkin } from "../models/Checkin.js";

export class HotelController {
    constructor() {
        this._quartos = null;
        this._quartosView = null;
        this._checkInView = null;
        this._hospedes = [];
    }

    add(quantidade, containerQuartos, containerForm) {
        this._quartos = new Quartos(quantidade);

        this._quartosView = new QuartosView(containerQuartos, (quarto) => {
            this.abrirFormularioCheckIn(quarto);
        });
        this._quartosView.render(this._quartos.getQuartos());

        this._checkInView = new CheckInView(containerForm, (dados) => {
            this.checkIn(dados);
        });
        containerForm.style.display = "none";
    }

    abrirFormularioCheckIn(quarto) {
        if (quarto.situacao === "vago") {
            const formContainer = this._checkInView._container;
            formContainer.style.display = "flex";

            this._checkInView.updateQuartos(this._quartos.getQuartos());
            formContainer.querySelector("#numero-quarto").value = quarto.numero;
        }
    }

    checkIn(dados) {
        const quarto = this._quartos.getQuartos().find(q => q.numero == dados.numeroQuarto);
        if (!quarto || quarto.situacao === "ocupado") {
            alert("Quarto não disponível para check-in!");
            return;
        }

        // cria objeto Checkin
        const checkin = new Checkin(
            dados.nome,
            dados.documento,
            dados.telefone,
            dados.numeroQuarto,
            dados.checkinDate
        );

        // cria hóspede a partir do checkin
        const hospede = new Hospede(
            checkin.nome,
            checkin.documento,
            checkin.numeroQuarto,
            checkin.checkinDate,
            checkin.checkoutDate
        );

        this._hospedes.push(hospede);

        // atualiza quarto
        quarto.situacao = "ocupado";
        quarto.acao_disponivel = "CHECK-OUT";
        quarto.hospede = hospede;

        this._quartosView.update(quarto);
        this._checkInView.updateQuartos(this._quartos.getQuartos());

        this._checkInView._container.style.display = "none";
        alert(`Check-in realizado com sucesso para ${hospede.nome} no quarto ${hospede.numeroQuarto}`);

        this._checkInView._limpar();
    }
}