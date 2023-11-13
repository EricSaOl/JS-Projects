const Installment = require ('./Installment')

class Loan{
    static #fee = 1.02;
    constructor(loanValue, installments){
        this.loanValue = loanValue
        this.Installments = []
        for(let i = 1 ; i<=installments ; i++)
            this.Installments.push(new Installment((loanValue/installments) * Loan.#fee, i))
        this.date = new Date()
    }
    static get feeValue(){
        return this.#fee
    }
    
    static set newFeeValue(newFee){
        this.#fee = 1 + (newFee/100)
    }
}
module.exports = Loan


