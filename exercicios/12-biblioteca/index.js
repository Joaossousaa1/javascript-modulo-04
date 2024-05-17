const Author = require("./Author");
const Library = require("./Library");
const User = require("./User");

const author1 = new Author("John Smith");
const author2 = new Author("Alice Johnson");

const book1 = author1.createBook("The Art of Programming");
const book2 = author2.createBook("Data Structures and Algorithms");

const user1 = new User("Emma Brown");
const user2 = new User("Michael Davis");

const library = new Library();

library.addBook(book1);
library.addBook(book2);

library.listBooks()

library.lendBook(book1, user1); // User1 pega emprestado "The Art of Programming"
// library.lendBook(book2, user2); // User2 pega emprestado "Data Structures and Algorithms"

console.log()
library.listBooks(); // "The Art of Programming" não deve mais estar na lista de livros disponíveis