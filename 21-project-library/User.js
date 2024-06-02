const Library = require("./Library")

module.exports = class User {
    constructor(username, adress, phone) {
        this.username = username
        this.adress = adress
        this.phone = phone
        this.id = Library.userList.length
    }

    borrow(book) {
    }

    returnBook(book) {

    }

    consultHistory() {

    }
}