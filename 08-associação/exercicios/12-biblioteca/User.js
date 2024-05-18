class User {
    constructor(name) {
        this.name = name;
        this.booksBorrowed = [];
    }

    // Método para pegar emprestado um livro
    borrowBook(book) {
        this.booksBorrowed.push(book);
    }

    // Método para listar os livros que o usuário pegou emprestado
    listBorrowedBooks() {
        console.log(`Books borrowed by ${this.name}:`);
        this.booksBorrowed.forEach(book => {
            console.log(`${book.title} by ${book.author.name}`);
        });
    }
}

module.exports = User