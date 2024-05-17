class User {
    constructor (fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(emailConfirm, passwordConfirm) {
        if (emailConfirm === this.email && passwordConfirm === this.password) {
            console.log(`Successful login.`)
        } else {
            console.log(`Login unsuccessful.`)
        }
    }
}

const jhon = new User('João Otávio', 'joao@gmail.com', '1234')
console.log(jhon)
jhon.login('joao@gmail.com', '1234')

