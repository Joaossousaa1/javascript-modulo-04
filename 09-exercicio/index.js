<<<<<<< HEAD
const Author = require("./Author.js");

const jhon = new Author('Jhon')

const post = jhon.writePost('Title', 'Lorem')

post.addComment('Lucas', 'comment 1')
post.addComment('Cleber', 'lorem...')
=======
const Author = require("./Author");

const jhon = new Author('Jhon')
const post = jhon.writePost('Assunto')
post.addComment('lucas', 'Comment 1')
>>>>>>> 7483aa94a552c89481f3f8d3a26a88993a6f7db4

console.log(jhon)
console.log(post)