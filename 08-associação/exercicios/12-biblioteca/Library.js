class Library {
    constructor () {
        this.books = []
    }

    addBook(book) {
        this.books.push(book)
    }

    listBooks() {
        console.log("Books in the library:");
        this.books.forEach(book => {
            console.log(`${book.title} by ${book.author.name}`);
        });
    }

    lendBook(book, user) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1); // Remover o livro da lista de livros disponíveis
            user.borrowBook(book); // Adicionar o livro à lista de livros emprestados do usuário
            console.log(`${book.title} has been borrowed by ${user.name}`);
        } else {
            console.log("This book is not available in the library.");
        }
    }
}


module.exports = Library