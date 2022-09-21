import "dotenv/config"

console.log(process.env.API_KEY)

function cargarBaseDeDatos() {
    fetch('./productos.json')
    .then(response => response.body)
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))
}
// Initialize Firebase

cargarBaseDeDatos()