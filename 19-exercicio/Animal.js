module.exports = class Animal {
    #name
    #species
    #age
    #hunger

    constructor(name, species, age) {
        this.#name = name
        this.#species = species
        this.#age = age
        this.#hunger = true
    }

    get name() {
        return this.#name;
    }

    set  name(name) {
        this.#name = name;
    }

    get species() {
        return this.#species;
    }

    set  species(species) {
        this.#species = species;
    }

    get age() {
        return this.#age;
    }

    set age(age) {
        this.#age = age;
    }

    get hunger() {
        return this.#hunger 
    }

    set hunger(status) {
        this.#hunger = status
    }

    makeSound() {
        throw Error ('makeSound() method must be implemented.')
    }

    toFeed() {
        throw Error ('toFeed() method must be implemented.')
    }

    status() {
        return this.#hunger ? 'Are you hungry' : 'Not hungry'
    }
}