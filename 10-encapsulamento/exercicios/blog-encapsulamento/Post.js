const Comment = require("./Comment")

class Post {
    constructor (title, description, author) {
        this.title = title
        this.description = description
        this.author = author
        this.comments = []
    }

    addComment(username, content) {
        this.comments.push(new Comment(username, content))
    }
}

module.exports = Post