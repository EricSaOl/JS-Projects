const User = require ('./User')


class App{
    static #users = []
    static findUser(email){
        const user = this.#users.find(user=> user.email === email)
        return user ?? null
    }
    static newUser(name, email){
        const userExists = App.findUser(email)
        if(!userExists){
            this.#users.push(new User(name, email))
        }else
        console.log(`Usuário com esse email, ja existe.`)
    }
    static deposit(email, quantity){
        const depositUser = App.findUser(email)
        if(depositUser)
            depositUser.account.newDeposit(quantity)
        else
            console.log("Falha no depósito.")
        
    }
    static transfer(origenUser, quantity, targetUser){
        const origenUserVar = App.findUser(origenUser)
        const targetUserVar = App.findUser(targetUser)
        origenUserVar.account.newPlusTransfer(origenUser, quantity, targetUser)
        targetUserVar.account.newMinusTransfer(origenUser,quantity, targetUser)
    }
    static Loan(loanValue, installment, email){
        const loanUser = App.findUser(email)
        loanUser.account.newLoan(loanValue, installment)

    }
}

module.exports = App