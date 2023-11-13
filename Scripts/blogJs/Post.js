const Comments = require("./Comment.js")

class Post{
    constructor(title,body,author){
        this.title = title
        this.body = body
        this.author = author
        this.comment = []
        this.createdAt = new Date()
    }
    addComments(userName, content){
        this.comment.push(new Comments(userName, content))
    }
}

module.exports = Post