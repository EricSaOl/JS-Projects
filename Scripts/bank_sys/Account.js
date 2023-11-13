const Transfer = require ('./Transfer')
const Deposit = require ('./Deposit')
const Loan = require ('./Loan')

class Account{
    #balence 
    
    constructor(owner){
        this.#balence = 0
        this.transfers = []
        this.deposits = []
        this.loans = []
        this.owner = owner
    }
    newPlusTransfer(origenUser, quantity, targetUser){
            this.#balence += quantity
            this.transfers.push(new Transfer(origenUser, quantity, targetUser))
    }
    newMinusTransfer(origenUser, quantity, targetUser){
            this.#balence -= quantity
            this.transfers.push(new Transfer(origenUser, quantity, targetUser))
    }
    newDeposit(quantity){
                this.#balence += quantity
                this.deposits.push(new Deposit(quantity) )
    }
    newLoan(loanValue, installment){
        this.loans.push(new Loan(loanValue, installment) )
        this.#balence += loanValue
    }
    get getBalence(){
        return this.#balence
    }
    get getTranfers(){
        return this.transfers
    }
    get getDeposits(){
        return this.deposits
    }
     get getLoans(){
        return this.loans
    }
}

module.exports = Account