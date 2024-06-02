const Book = require("../Book")

module.exports = function registerBook(title, author, isbn, yearPub, library) {
    const book = new Book(title, author, isbn, yearPub)
    library.registerBook(book)

    return book
}