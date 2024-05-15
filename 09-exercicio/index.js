const Author = require("./Author.js");
const Post = require("./Post.js");

const joao = new Author('Jhon')
joao.addPost('The flash', 'série mt boa', 'zoom era pra solar todos eles')
joao.addPost('Arrow', 'seríe mt ruim', 'arqueiro fraco')
console.log(joao)