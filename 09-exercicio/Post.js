const Author = require("./Author.js");
const Comment = require("./Comment.js");

class Post {
    constructor (authorName, postName, ...comments) {
        this.authorName = new Author(authorName);
        this.postName = postName;
        this.comments = new Comment(...comments)
    }

    addComment(comment) {
        this.comments.comments.push(comment)
    }
}

module.exports = Post;