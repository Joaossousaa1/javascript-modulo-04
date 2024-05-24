const Character = require("./Character");

class Warrior extends Character {
    constructor (name, life, attack, defense, shield, position) {
        super(name, life, attack, defense)
        this.shield = shield
        this.position = position
      
    }

    attackTarget(character) {
        if (this.position === 'Attack') {
            const damage = this.attack - character.defense
            console.log(`${this.name} attacked and dealt ${damage} to ${character.name}`)
            character.life = character.life - damage

            return damage
        } else {
            console.log(`You cannot attack, your position is defense.`)
        }
    }

    changePosition() {
        if (this.position === 'Attack') {
            this.position = 'Defense'
            this.shield += this.defense
        } else {
            this.position = 'Attack'
            this.shield = 0
        }
       
    }
}

module.exports = Warrior