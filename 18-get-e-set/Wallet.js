class Wallet {
    #amount
    #username
    constructor () {
        this.#amount = 199.19 
    }

    get amount() {
        return this.#amount
    }

    set username(newUsername) {
        if (typeof newUsername === 'string') {
            this.#username = newUsername
        } else {
            throw Error('username must be a string')
        }
    }

    get username() {
        return this.#username
    }
}

const myWallet = new Wallet()
myWallet.username = 1
console.log(myWallet.username)
