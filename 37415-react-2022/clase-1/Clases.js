class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    loguearse() {
        console.log(`El usuario ${this.username} esta logueado`)
    }
}

class Juego {
    constructor(nombre, precio) {
        this.nombre= nombre
        this.precio = precio
    }

}
/*
export function sumar() {
    console.log("Suma")
}*/
export default User