const Installment = require("./Installment")

module.exports = class Loan {
    static #fee = 3 / 100

    constructor(value, installment, date = new Date()) {
        this.value = value
        this.installment = [] // Guardar todas as parcelas
        for (let i = 1; i <= installment; i++) { // Faz um loop para adicionar cada parcela no array
            this.installment.push(new Installment((value * Loan.#fee) / installment, i))
        }
        this.date = date
    }

    
    static get fee() {
        return Loan.#fee
    }

    static set fee(percentage) {
        Loan.#fee = 1 + (percentage / 100)
    }
}