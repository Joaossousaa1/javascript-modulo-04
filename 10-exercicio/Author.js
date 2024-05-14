class Author {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.listPosts = []
    }

    addPostList(post) {
        this.listPosts.push(post)
    }
}