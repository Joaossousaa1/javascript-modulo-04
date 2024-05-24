const Character = require("./Character");

class Warrior extends Character {
    constructor (name, life, attack, defense, shield, position) {
        super(name, life, attack, defense)
        this.shield = shield
        this.position = position
      
    }

    attackTarget(character) {
        if (this.position === 'Attack') {
            super.attackTarget(character)
        } else {
            console.log(`You cannot attack, your position is defense.`)
        }
    }

    changePosition() {
        if (this.position === 'Attack') {
            this.position = 'Defense'
            this.defense += this.shield             
        } else {
            this.position = 'Attack'
            this.defense -= this.shield
        }
       
    }
}

module.exports = Warrior