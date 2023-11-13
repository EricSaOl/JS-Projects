const App = require ('./App')

//Criação de usuários para o sistema
App.newUser("Jõao Paulo", "john@gmail.com")
App.newUser("Paulo Antônio", "paul@hotmail.com")
App.newUser("Carlos Alberto", "carlos@yahoo.com")
App.newUser("Marina Alamo", "maryanne@gmail.com")
App.newUser("Laura Sampaio", "laurasamp@hotmail.com")
//Cada usuário recebe um saldo de 1000 por meio de depósitos
App.deposit("john@gmail.com", 1000)
App.deposit("paul@hotmail.com", 1000)
App.deposit("carlos@yahoo.com", 1000)
App.deposit("maryanne@gmail.com", 1000)
App.deposit("laurasamp@hotmail.com", 1000)
//As variaveis recebem seus respectivos usuários
const joão = (App.findUser("john@gmail.com"))
const paulo = (App.findUser("paul@hotmail.com"))
const carlos = (App.findUser("carlos@yahoo.com"))
const marina = (App.findUser("maryanne@gmail.com"))
const laura = (App.findUser("laurasamp@hotmail.com"))
//Cada usuário é mostrado no console
console.log(joão)
console.log(paulo)
console.log(carlos)
console.log(marina)
console.log(laura)

//Alteração do saldo dos usuários e posterior conferencia das alterações por meio do console
App.transfer("john@gmail.com", 1000,"paul@hotmail.com")
App.transfer("carlos@yahoo.com", 1000,"maryanne@gmail.com")
App.Loan(3000,3,"laurasamp@hotmail.com")

console.log("-------------------------------------------------------------------------------")

console.log(joão)
console.log(paulo)
console.log(carlos)
console.log(marina)
console.log(laura)

console.log("-------------------------------------------------------------------------------")

console.log(joão.account.deposits)
console.log(paulo.account.deposits)
console.log(carlos.account.deposits)
console.log(marina.account.deposits)
console.log(laura.account.deposits)

console.log("-------------------------------------------------------------------------------")

console.log(joão.account.loans)
console.log(paulo.account.loans)
console.log(carlos.account.loans)
console.log(marina.account.loans)
console.log(laura.account.loans)

console.log("-------------------------------------------------------------------------------")

console.log(joão.account.transfers)
console.log(paulo.account.transfers)
console.log(carlos.account.transfers)
console.log(marina.account.transfers)
console.log(laura.account.transfers)

console.log("-------------------------------------------------------------------------------")

console.log(joão.account.getBalence)
console.log(paulo.account.getBalence)
console.log(carlos.account.getBalence)
console.log(marina.account.getBalence)
console.log(laura.account.getBalence)