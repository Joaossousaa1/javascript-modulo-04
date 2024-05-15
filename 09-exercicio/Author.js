const Post = require('./Post.js')
const Comment = require("./Comment.js")

class Author {
    constructor (authorName) {
        this.authorName = authorName
    }

    addPost(postName, ...comments) {
        this.postName = postName
        this.comments = comments
        this.listPosts = []
        this.listPosts.push(this.postName, this.comments)
    }
}

module.exports = Author