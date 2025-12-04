
import { HospedeController } from "./api/controllers/HospedeController.js"
import { QuartoController } from "./api/controllers/QuartoController.js"

// quantidade de quartos
const inputQuartos = document.querySelector('#quantidadeQuartos')
let novoQuarto = new QuartoController()
inputQuartos.onchange = (e) => { novoQuarto.add(e) }

// cadastrar novo hóspede
const novoCheckIn = document.querySelector(".check-in")
let novoHospede = new HospedeController()
novoCheckIn.onsubmit = (e) => { novoHospede.add(e) }