import { HotelController } from './controllers/HotelController.js'

const hotelControlador = new HotelController()

const modalSettings = document.querySelector('.settings') 
const inputQuartos = document.querySelector('#quantidadeQuartos')
const btnCriaQuartos = document.querySelector("#btnConfirmar")

btnCriaQuartos.addEventListener("click", (e) => {
    e.preventDefault()

    const numQuartos = inputQuartos.value
    hotelControlador.add(numQuartos, document.querySelector('.quartos-container'), document.querySelector('.form-container'))
    modalSettings.style.display = 'none'
})

