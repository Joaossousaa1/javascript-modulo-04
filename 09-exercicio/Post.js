const Comment = require("./Comment");

class Post {
<<<<<<< HEAD
    constructor (title, body, author) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.comments = []
        this.createdAt = new Date();        
    }

    addComment(username, content) {
        this.comments.push(new Comment(username, content));
=======
    constructor (title, author) {
        this.title = title;
        this.author = author;
        this.comments = []
        this.createdAt = new Date();
    }

    addComment(username, content) {
        this.comments.push(new Comment(username, content))
>>>>>>> 7483aa94a552c89481f3f8d3a26a88993a6f7db4
    }
} 

module.exports = Post