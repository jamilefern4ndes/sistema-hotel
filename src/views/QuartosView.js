// views/QuartosView.js
export class QuartosView {
    constructor(container, onQuartoClick) {
        this._container = container;
        this._onQuartoClick = onQuartoClick; // callback vindo do controller
    }

    render(quartos) {
        this._container.innerHTML = "";

        quartos.forEach(quarto => {
            const quartoDiv = document.createElement("div");
            quartoDiv.classList.add("quarto", quarto.situacao);

            quartoDiv.innerHTML = `
                <p>Quarto ${quarto.numero}</p>
                <button class="btn">${quarto.acao_disponivel}</button>
            `;

            // evento de clique na div inteira
            quartoDiv.addEventListener("click", () => {
                // chama o callback passando o quarto clicado
                this._onQuartoClick(quarto);
            });

            this._container.appendChild(quartoDiv);
        });
    }

    update(quarto) {
        // atualiza apenas um quarto específico
        const quartoDivs = this._container.querySelectorAll(".quarto");
        const quartoDiv = Array.from(quartoDivs).find(div =>
            div.querySelector("p").textContent.includes(quarto.numero)
        );

        if (quartoDiv) {
            quartoDiv.className = `quarto ${quarto.situacao}`;
            quartoDiv.querySelector("button").textContent = quarto.acao_disponivel;
        }
    }
}