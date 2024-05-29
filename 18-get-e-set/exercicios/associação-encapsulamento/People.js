const Address = require("./Address")

module.exports = class People {
    #name
    #address

    constructor (name, street, city, cep) {
        this.#name = name
        this.#address = new Address(street, city, cep)
    }

    get name() {
        return this.#name
    }

    set name(newName) {
        this.#name = newName
    }

    get address() {
        return this.#address
    }

    set address(newAddress) {
        this.#address = newAddress
    }
}