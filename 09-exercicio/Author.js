const Post = require("./Post");

class Author {
    constructor (name) {
        this.name = name;
        this.listPosts = []
    }

    writePost(title) {
        const post = new Post(title, this)
        this.listPosts.push(post)

        return post
    }
}

module.exports = Author