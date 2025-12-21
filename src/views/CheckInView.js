// views/CheckInView.js
export class CheckInView {
    constructor(container, onSubmit) {
        this._container = container;
        this._onSubmit = onSubmit;
        this.render();

        this.nome = this._container.querySelector("#nome");
        this.documento = this._container.querySelector("#documento");
        this.telefone = this._container.querySelector("#telefone");
        this.numeroQuarto = this._container.querySelector("#numero-quarto");
    }

    render() {
        this._container.innerHTML = `
            <h3>Check-in</h3>
            <form id="form-checkin" autocomplete="off">
                <label>Nome:</label>
                <input type="text" id="nome" required autofocus autocomplete="off">

                <label>Documento:</label>
                <input type="text" id="documento" required />

                <label>Telefone:</label>
                <input type="text" id="telefone" />

                <label>Quarto:</label>
                <select id="numero-quarto"></select>

                <button type="submit">Realizar Check-in</button>
            </form>
        `;

        const form = this._container.querySelector("#form-checkin");
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            this._onSubmit({
                nome: this.nome.value,
                documento: this.documento.value,
                telefone: this.telefone.value,
                numeroQuarto: this.numeroQuarto.value,
                checkinDate: new Date().toLocaleDateString("pt-BR") // gera data automática
            });
        });
    }

    updateQuartos(quartos) {
        const select = this._container.querySelector("#numero-quarto");
        select.innerHTML = "";
        quartos.forEach(q => {
            if (q.situacao === "vago") {
                const option = document.createElement("option");
                option.value = q.numero;
                option.textContent = `${q.numero} - ${q.situacao}`;
                select.appendChild(option);
            }
        });
    }

    _limpar() {
        this.nome.value = "";
        this.documento.value = "";
        this.telefone.value = "";
    }
}