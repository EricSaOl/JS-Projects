const Author = require("./Author")

const john = new Author("John Doe")
const post = john.addPost("Aracnideos", "Lorem epson sic...")
post.addComments("Éric", "Muito bom!")
post.addComments("Lucas", "Mediano")

console.log(john)
console.log(post)