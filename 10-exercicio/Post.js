const Comment = require("./Comment");

class Post {
    constructor (theme, date, ...comments) {
        this.theme = theme;
        this.date = date;
        this.comments = comments;
    }

    addComment(name, comment) {
        this.comments.push(new Comment(name, comment))
    }
}

module.exports = Post