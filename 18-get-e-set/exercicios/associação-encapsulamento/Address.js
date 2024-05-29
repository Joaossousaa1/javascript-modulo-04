module.exports = class Address {
    #street
    #city
    #cep

    constructor (street, city, cep) {
        this.#street = street
        this.#city = city
        this.#cep = cep
    }

    get street() {
        return this.#street
    }

    set street(nameStreet) {
        this.#street = nameStreet
    }
    
    get city() {
        return this.#city
    }

    set city(nameCity) {
        this.#city = nameCity
    }

    get cep() {
        return this.#cep
    }

    set cep(numberCep) {
        this.#cep = numberCep
    }
}