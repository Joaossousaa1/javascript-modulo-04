const Book = require("./Book")

class Author {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // Método para criar um novo livro
    createBook(title) {
        const newBook = new Book(title, this);
        this.books.push(newBook);
        return newBook;
    }
}


module.exports = Author