class Comments{
    constructor(userName, comment){
        this.comments = comment
        this.userName = userName
        this.createdAt = new Date()
    }
    
}

module.exports = Comments