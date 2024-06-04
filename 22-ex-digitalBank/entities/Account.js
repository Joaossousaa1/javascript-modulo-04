const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

module.exports = class Account {
    #balance

    constructor(user) {
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance() {
        return this.#balance
    }

    newDeposit(deposit) {
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    newLoan(loan) {
        this.#balance += loan
        this.loans.push(loan)
    }

    makeTransfer(transfer) {
        if (transfer.toUser.email === this.owner.email) {
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        } else if (transfer.fromUser.email === this.owner.email){
            this.#balance += transfer.value
            this.transfers.push(transfer)
        }
    }
}