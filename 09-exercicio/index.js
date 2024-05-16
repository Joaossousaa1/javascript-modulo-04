const Author = require("./Author.js");

const jhon = new Author('Jhon')

const post = jhon.writePost('Title', 'Lorem')

post.addComment('Lucas', 'bom demais')
post.addComment('Cleber', 'ruim demais')

console.log(jhon)
console.log(post)