module.exports = class Installment {
    constructor(value, number, situation = 'pending') {
        this.value = value
        this.number = number
        this.situation = situation
    }
}