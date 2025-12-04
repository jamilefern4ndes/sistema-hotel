export class Hospede{
    constructor(nome, cpf, numeroQuarto, checkin, checkout){
        this._nome = nome
        this._cpf = cpf
        this._numeroQuarto = numeroQuarto
        this._checkin = checkin 
        this._checkout = checkout 
    } 
    
    //métodos get e set
    get nome() {
        return this._nome
    }
    get cpf() {
        return this._cpf
    }
    get numeroQuarto() {
        return this._numeroQuarto
    }
    get checkin() {
        return this._checkin
    }
    get checkout() {
        return this._checkout
    }

    set nome(valor){
        this._nome = valor
    }
    set cpf(valor){
        this._cpf = valor
    }
    set numeroQuarto(valor){
        this._numeroQuarto = valor
    }
    set checkin(valor){
        this._checkin = valor
    }
    set checkout(valor){
        this._checkout = valor
    }
}