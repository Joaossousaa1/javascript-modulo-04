const Post = require('./Post.js')

const blog = new Post('comment 1', 'comment 2')
console.log(blog)
blog.addComment('Comment 3')
console.log(blog)
