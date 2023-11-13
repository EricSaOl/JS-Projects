class Transfer{
    constructor(originUser, quantity, targetUser){
        this.originUser = originUser
        this.quantity = quantity
        this.targetUser = targetUser 
        this.date = new Date()
    }
}

module.exports = Transfer