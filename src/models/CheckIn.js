// models/Checkin.js
export class Checkin {
    constructor(nome, documento, telefone, numeroQuarto, checkinDate, checkoutDate = "-") {
        this._nome = nome;
        this._documento = documento;
        this._telefone = telefone;
        this._numeroQuarto = numeroQuarto;
        this._checkinDate = checkinDate;
        this._checkoutDate = checkoutDate;
    }

    // getters
    get nome() {
        return this._nome; 
    }
    get documento() {
        return this._documento; 
    }
    get telefone() {
        return this._telefone; 
    }
    get numeroQuarto() {
        return this._numeroQuarto; 
    }
    get checkinDate() {
        return this._checkinDate; 
    }
    get checkoutDate() {
        return this._checkoutDate; 
    }

    // setters
    set nome(valor) {
        this._nome = valor; 
    }
    set documento(valor) {
        this._documento = valor; 
    }
    set telefone(valor) {
        this._telefone = valor; 
    }
    set numeroQuarto(valor) {
        this._numeroQuarto = valor; 
    }
    set checkinDate(valor) {
        this._checkinDate = valor; 
    }
    set checkoutDate(valor) { 
        this._checkoutDate = valor; 
    }
}