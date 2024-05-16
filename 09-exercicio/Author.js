const Post = require('./Post.js')
const Comment = require("./Comment.js")

class Author {
    constructor (name) {
        this.name = name
        this.posts = []
    }

    writePost(tile, body) {
        const post = new Post(tile, body, this)
        this.posts.push(post)

        return post
    }
}

module.exports = Author