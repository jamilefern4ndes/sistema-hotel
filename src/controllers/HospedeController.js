
import { Hospede } from "../models/Hospede.js";

export class HospedeController{
    constructor(){
        //depois trabalhar com os input
        this._inputNome = document.querySelector('#nome')
        this._inputCpf = document.querySelector('#cpf')
        this._inputNumeroQuarto = document.querySelector('#numeroQuarto')
        this._inputCheckIn = document.querySelector('#checkIn')
        this._inputCheckOut = "-"


    }
    add(e){
        e.preventDefault()

        this._novoCheckIn()
        //console.log(this._novoCheckIn())
    }
    _novoCheckIn(){
        return new Hospede(
            //depois usar o .value
            this._inputNome.value,
            this._inputCpf.value,
            this._inputNumeroQuarto.value,
            this._inputCheckIn.value,
            this._inputCheckOut
        )
    }

}


