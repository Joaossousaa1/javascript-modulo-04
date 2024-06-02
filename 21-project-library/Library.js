module.exports = class Library {
    static listBooks = []
    static loanList = []
    static userList = []

    registerBook(book) {
        const indexNameBook = Library.listBooks.indexOf(book, 0)

        if (indexNameBook !== -1) {
            throw Error(`It was not possible to add the ${book.title} book to the library.`)
        } else {
            console.log(`The ${book.title} book has been successfully registered.`)
            Library.listBooks.push(book)
        }
    }

    registerUser(user) {
        const indexUserName = Library.userList.indexOf(user, 0)

        if (indexUserName !== -1) {
            throw Error(`It was not possible to add the ${user.username} user to the library.`)
        } else {
            console.log(`The ${user.username} user has been successfully registered.`)
            Library.userList.push(user)
        }
    }

    lendBook(user, book) { //Empresta um livro
        const indexNameBook = Library.listBooks.indexOf(book, 0)
        const indexUserName = Library.userList.indexOf(user, 0)

        if (indexNameBook !== -1 && indexUserName !== -1) {
            console.log(`${book.title} loaned to ${user.username}`)
            Library.listBooks.splice(indexNameBook, 1)
            Library.loanList.push(book)
        } else {
            throw Error('Book not found or user not found.')
        }
    }

    returnBook(user, book) { //Devolve um livro emprestado.
        const indexNameBook = Library.loanList.indexOf(book, 0)
        const indexUserName = Library.userList.indexOf(user, 0)
    
        if (indexNameBook !== -1 && indexUserName !== -1) {
            console.log(`Returning the book: ${book.title}`)
            Library.loanList.splice(indexNameBook, 1)
            Library.listBooks.push(book)
        } else {
            throw Error('Book not found or user not found.')
        }
    }

    consultBook(book) { //Mostra os dados do livro.
        if (typeof book === 'string') {

        } else if (typeof book === 'number') {

        } else {
            throw Error(`Enter the book name or isbn.`)
        }
    }

    checktUserHistory(user) { //Mostra o histórico de um usuário específico.

    }

    seeRegisteredUsers() { //Mostra os usuários cadastrados.
        console.log(`User list`)
        return Library.userList.map(user => console.table(user))
    }
}