// array com os quartos 
const numeroDeQuartos = 6 
const quartos = Array.from({ length: numeroDeQuartos }, (_, i) => ({ 
    n: i + 1, situacao: "vago", hospede: "", cpf: "", checkin: "", checkout: "", acao: "CHECK-IN" 
}))
//criar os quartos dinamicamente 
const quartosCadastrados = [] 
const areaQuartos = document.querySelector('.quartos-cadastrados') 
for(let i = 0; i<quartos.length; i++){ 
    const quarto = document.createElement('div')
    const p = document.createElement('p')
    const btnAcao = document.createElement('button')
    quarto.setAttribute('class', 'quarto')
    btnAcao.setAttribute('class', 'btn checkin')

    p.textContent = `QUARTO 0${quartos[i].n}`
    btnAcao.textContent = quartos[i].acao

    areaQuartos.appendChild(quarto)
    quartosCadastrados.push(quarto)
    quarto.appendChild(p)
    quarto.appendChild(btnAcao)

    if (quartos[i].situacao === 'ocupado') {
        quartosCadastrados[i].classList.add('ocupado')
        quartosCadastrados[i].addEventListener('click', () => {fazerCheckOut(i)})

    }else {
        quartosCadastrados[i].classList.add('vago')
        quartosCadastrados[i].addEventListener('click', () => {abrirForm(i)})
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

    quartosCadastrados[indiceQuarto].classList.remove('vago')
    quartosCadastrados[indiceQuarto].classList.add('ocupado')
    document.querySelector('.modal').style.display = 'none'

}
function fazerCheckOut(indiceQuarto) {
    quartos[indiceQuarto].situacao = "vago" 
    quartos[indiceQuarto].cpf = "" 
    quartos[indiceQuarto].hospede = "" 
    quartos[indiceQuarto].checkin = "" 
    quartos[indiceQuarto].acao = "CHECK-IN"
    quartosCadastrados[indiceQuarto].classList.remove('ocupado')
    quartosCadastrados[indiceQuarto].classList.add('livre')
}

atualizaQuarto()
