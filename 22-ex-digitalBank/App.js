const Account = require("./entities/Account")
const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

module.exports = class App {
    static #users = []

    
    static findUser(email) {
        const findUser = App.#users.find(user => user.email === email)
        return findUser ?? null
    }
    
    static createUser(name, email) {
        const findUser = App.findUser(email)
        if (!findUser) {
            const user = new User(name, email)
            App.#users.push(user)
        }
    }

    static deposit(email, value) {
        const user = App.findUser(email)
        if (user) {
            console.log(`achou o ${user.name}`)
            const deposit = new Deposit(value)
            user.account.newDeposit(deposit)
        }
    }

    static transfer(toUserEmail, fromUserEmail, value) {
        const toUser = App.findUser(toUserEmail)
        const fromUser = App.findUser(fromUserEmail)
        if (toUser && fromUser) {
            const transfer = new Transfer(fromUser, toUser, value)
            fromUser.account.makeTransfer(transfer)
            toUser.account.makeTransfer(transfer)
        }
    }

    static takeLoan(email, value, installment) {
        const user = App.findUser(email)
        if (user) {
            const loan = new Loan(value, installment)
            user.account.newLoan(loan)
        }
    }

    static changeLoanFee(percetage) {
        Loan.fee = percetage / 100
    }
}