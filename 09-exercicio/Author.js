const Post = require("./Post");

class Author {
    constructor (name) {
<<<<<<< HEAD
        this.name = name
        this.posts = []
    }

    writePost(tile, body) {
        const post = new Post(tile, body, this)
        this.posts.push(post)
=======
        this.name = name;
        this.listPosts = []
    }

    writePost(title) {
        const post = new Post(title, this)
        this.listPosts.push(post)
>>>>>>> 7483aa94a552c89481f3f8d3a26a88993a6f7db4

        return post
    }
}

module.exports = Author