const registerUserFunction = require("./functions/registerUser.js")
const registerBookFunction = require("./functions/registerBook.js")
const Library = require("./Library");

//Iniciando a biblioteca
const library = new Library()

//Criando livros e registrando-os
const book1 = registerBookFunction('Harry Potter and the Globet of Fire', 'J.K Rowling','9788893819930', '2000', library)
const book2 = registerBookFunction('Atomics Habits', 'James Clear', '9783442178582', '2018', library)

//Criando usuários e registrando-os
const jonh = registerUserFunction('John', 'itaitinga-CE', '(85) 99151-4835', library)
const hay = registerUserFunction('Hayssa', 'fortaleza-CE', '(85) 99103-3523', library)

//Teste dos módulos de Library
library.lendBook(jonh, book1)
console.table(Library.userList)
