module.exports = class Book {
    constructor(title, author, isbn, yearPub) {
        this.title = title
        this.author = author
        this.isbn = isbn
        this.yearPub = yearPub
        this.status = 'Available'
    }

    toLoan() {

    }

    giveBack() {

    }

    checkAvailability() {

    }
}