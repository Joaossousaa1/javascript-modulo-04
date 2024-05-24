const Character = require("./Character");

class Thief extends Character {
    constructor (name, life, attack, defense) {
        super(name, life, attack, defense)
    }

    attackTarget(character) {
        const damage = (this.attack * 2) - character.defense
        console.log(`${this.name} attacked and dealt ${damage} to ${character.name}`)
        character.life = character.life - damage

        return damage
    }
}

module.exports = Thief