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
    checkout: "",
    acao: "CHECK-IN"
}))


function atualizaQuarto(){
    for (let i = 0; i < quartos.length; i++) {
    botoes[i].innerHTML = quartos[i].acao

    if (quartos[i].situacao === 'ocupado') {
        quartosCadastrados[i].classList.add('ocupado')
        quartosCadastrados[i].addEventListener('click', () => {fazerCheckOut(i)})

    }else {
        quartosCadastrados[i].classList.add('livre')
        quartosCadastrados[i].addEventListener('click', () => {abrirForm(i)})
    }
    }
}
function abrirForm(i){
    document.querySelector('.modal').style.display = 'flex'
    document.querySelector('#nquarto').value = quartos[i].n
    let formulario = document.querySelector('.novo-hospede')
    formulario.addEventListener('submit', (e)=>{
        e.preventDefault()
        fazerCheckIn(i)
    })
}

function fazerCheckIn(indiceQuarto) {
    const nomeHospede = document.getElementById('nome').value
    const cpfHospede = document.getElementById('cpf').value

    quartos[indiceQuarto].situacao = "ocupado"
    quartos[indiceQuarto].cpf = cpfHospede
    quartos[indiceQuarto].hospede = nomeHospede
    quartos[indiceQuarto].checkin = "21/04/2024"
    quartos[indiceQuarto].acao = "CHECK-OUT"


    console.log(quartos[indiceQuarto])
    quartosCadastrados[indiceQuarto].classList.remove('livre')
    quartosCadastrados[indiceQuarto].classList.add('ocupado')
    atualizaQuarto()
    document.querySelector('.modal').style.display = 'none'
}


function fazerCheckOut(indiceQuarto) {
    quartos[indiceQuarto].situacao = "vago"
    quartos[indiceQuarto].cpf = ""
    quartos[indiceQuarto].hospede = ""
    quartos[indiceQuarto].checkin = ""
    quartos[indiceQuarto].acao = "CHECK-IN"

    console.log(quartos[indiceQuarto])
    quartosCadastrados[indiceQuarto].classList.remove('ocupado')
    quartosCadastrados[indiceQuarto].classList.add('livre')
    atualizaQuarto()
}

atualizaQuarto()