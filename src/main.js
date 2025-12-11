import { HospedeController } from "./controllers/HospedeController.js"
import { QuartoController } from "./controllers/QuartoController.js"

// quantidade de quartos
const inputQuartos = document.querySelector('#quantidadeQuartos')
const controladorQuartos = new QuartoController()

inputQuartos.addEventListener("change", (e) => controladorQuartos.add(e))
inputQuartos.addEventListener("input", (e) => controladorQuartos.add(e))

// cadastro de hóspede
const formulario = document.querySelector(".check-in")
const controladorHospede = new HospedeController()

formulario.addEventListener("submit", (e) => controladorHospede.add(e))

// ocutar form inicial
document.querySelector('#btnConfirmar').addEventListener("click", ()=>(document.querySelector(".settings").style.display = 'none'))
