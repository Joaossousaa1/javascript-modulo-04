const Author = require("./Author")
const User = require("./User")

const jhon = new Author('Jhon')
const post = jhon.writePost('Title', 'Description')

const user = new User('Octavio', 'email', 310881921) 
const confirm = user.confirmAccount(user.username, 'email', 310881921) // Fazer a autenticação da conta.

if (confirm) {
    post.addComment(user.username, 'Comment')//Sou vou poder add o comentário se a conta for criada.
    console.log(jhon)
    console.log(post)
} else {
    console.log(`${user.username} needs to confirm account.`)
}
