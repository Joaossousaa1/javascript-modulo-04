class Character {
    constructor (name, life, attack, defense) {
        this.name = name
        this.life = life
        this.attack = attack
        this.defense = defense 
    }

    attackTarget(character) {
        const damage = this.attack - character.defense
        console.log(`${this.name} attacked and dealt ${damage} to ${character.name}`)
        character.life -= damage

        return damage
    }
}

module.exports = Character