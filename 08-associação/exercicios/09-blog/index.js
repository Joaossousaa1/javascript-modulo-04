const Author = require("./Author.js");

const jhon = new Author('Jhon')
const post = jhon.writePost('Title', 'Lorem')

post.addComment('Lucas', 'comment 1')
post.addComment('Cleber', 'lorem...')

console.log(jhon)
console.log(post)