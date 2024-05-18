class User {
    #email
    #password
    constructor (username, email, password) {
        this.username = username
        this.#email = email
        this.#password = password
    }

    confirmAccount(username, email, password) {
        if (this.#authenticate(username, email, password)) {
            console.log(`Created account.`)
            return true
        } else {
            console.log(`Not created account.`)
            return false
        }
    }

    #authenticate(username, email, password) {
        return this.username === username && this.#email === email && this.#password === password
    }
}

module.exports = User