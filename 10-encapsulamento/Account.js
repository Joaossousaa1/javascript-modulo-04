class Account {
    #password
    #balance = 10
    constructor (user) {
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'joaossousaa31@gmail.com',
    password: 3108
}

console.log(new Account(user).getBalance('joaossousaa31@gmail.com', 3108))
