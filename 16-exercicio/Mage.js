const Character = require("./Character");

class Mage extends Character {
    constructor (name, life, attack, defense, magic) {
        super(name, life, attack, defense)
        this.magic = magic
    }

    attackTarget(character) {
        const damage = (this.attack + this.magic) - character.defense
        console.log(`${this.name} attacked and dealt ${damage} to ${character.name}`)
        character.life -= damage

        return damage
    }

    heal(character) {
        if (this.name !== character.name) {
            const healPoint = this.magic * 2
            character.life += healPoint
            console.log(`${this.name} increased ${character.name}'s health by ${healPoint}`)

            return healPoint
        } else {
            console.log("You can't increase your own life")
        }
    }
}

module.exports = Mage