const Comment = require("./Comment");

class Post {
    constructor (title, author) {
        this.title = title;
        this.author = author;
        this.comments = []
        this.createdAt = new Date();
    }

    addComment(username, content) {
        this.comments.push(new Comment(username, content))
    }
}

module.exports = Post