import User from './Clases.js'

let edad = 39
var nombre = "Francisco"
const sueldo = 0

console.log(nombre)

const user1 = new User("King Francis III", "f@f.com", 1234)
const user2 = new User("Maria la del barrio", "maria@maria.com", 12345)
const user3 = new User("Juana de Arco", "j@j.com", "inglaterra")

const users = [user1, user2, user3]

console.table(users)
