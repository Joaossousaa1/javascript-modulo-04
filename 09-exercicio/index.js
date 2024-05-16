const Author = require("./Author");

const jhon = new Author('Jhon')
const post = jhon.writePost('Assunto')
post.addComment('lucas', 'Comment 1')

console.log(jhon)
console.log(post)