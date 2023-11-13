const Post = require("./Post.js")

class Author{
    constructor(author){
        this.author = author
        this.posts = []
        }
    addPost(title, body){
        const post = new Post(title,body, this)
        this.posts.push(post)
        return post
    }
}

module.exports = Author