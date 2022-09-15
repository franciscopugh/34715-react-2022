import { initializeApp } from "firebase/app";
import { doc, collection, addDoc, getFirestore } from "firebase/firestore";

// Add a new document in collection "cities"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-34715.firebaseapp.com",
  projectId: "react-34715",
  storageBucket: "react-34715.appspot.com",
  messagingSenderId: "809042373287",
  appId: "1:809042373287:web:203012f80afc30fbad0982",
  measurementId: "G-5M9H4WJGTJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

async function cargarBaseDeDatos  () {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            nombre: producto.nombre,
            marca: producto.marca,
            modelo: producto.modelo,
            categoria: producto.categoria,
            precio: producto.precio,
            stock: producto.stock,
            img: ""
          });
    })
    
}

export {db,app, cargarBaseDeDatos}