const Animal = require("./Animal");

module.exports = class Lion extends Animal {
    constructor (name, age) {
        super(name, 'Lion', age)
    }
    makeSound() {
         console.log(`The ${this.name} made a sound.`)
    }

    toFeed() {
        if (this.hunger) {
            this.hunger = false
            console.log(`${this.name} was fed.`)
        } else {
            console.log(`${this.name} is already fed.`)
        }
    }
}