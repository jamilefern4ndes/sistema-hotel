// quartos cadastrados no indexHTML
const quartosCadastrados = document.querySelectorAll('.quarto')
const botoes             = document.querySelectorAll('.btn')

// array com os quartos
const numeroDeQuartos = 6
const quartos = Array.from({ length: numeroDeQuartos }, (_, i) => ({
    n: i + 1,
    situacao: "vago",
    hospede: "",
    cpf: "",
    checkin: "",
    checkout: ""
}))


function atualizaQuarto(){
    for (let i = 0; i < quartos.length; i++) {
    const quartoVerifica = quartos[i]

    if (quartoVerifica.situacao === 'ocupado') {
        quartosCadastrados[i].classList.add('ocupado')
        quartosCadastrados[i].addEventListener('click', () => {
            console.log('Fazer Check-out no quarto: 0' + quartoVerifica.n)
            fazerCheckOut(i)
        })

    } else {
        quartosCadastrados[i].classList.add('livre')

        quartosCadastrados[i].addEventListener('click', () => {
            console.log('Fazer Check-in no quarto: 0' + quartoVerifica.n)
            fazerCheckIn(i)
        })
    }
}
}

function fazerCheckIn(indiceQuarto) {
    quartos[indiceQuarto].situacao = "ocupado"
    quartos[indiceQuarto].cpf = "325.678.218-80"
    quartos[indiceQuarto].hospede = "Renato Aragão"
    quartos[indiceQuarto].checkin = "21/04/2024"

    console.log(quartos[indiceQuarto])
    botoes[indiceQuarto].innerHTML = 'CHECK-OUT'
    quartosCadastrados[indiceQuarto].classList.remove('livre')
    quartosCadastrados[indiceQuarto].classList.add('ocupado')
    atualizaQuarto()
}

function fazerCheckOut(indiceQuarto) {
    quartos[indiceQuarto].situacao = "vago"
    quartos[indiceQuarto].cpf = ""
    quartos[indiceQuarto].hospede = ""
    quartos[indiceQuarto].checkin = ""

    console.log(quartos[indiceQuarto])
    botoes[indiceQuarto].innerHTML = 'CHECK-IN'
    quartosCadastrados[indiceQuarto].classList.remove('ocupado')
    quartosCadastrados[indiceQuarto].classList.add('livre')
    atualizaQuarto()
}

atualizaQuarto()