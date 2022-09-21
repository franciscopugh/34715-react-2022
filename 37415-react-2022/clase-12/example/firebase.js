import "dotenv/config"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY, //process.env.REACT_APP_API_KEY
  authDomain: "react-34715.firebaseapp.com",
  projectId: "react-34715",
  storageBucket: "react-34715.appspot.com",
  messagingSenderId: "809042373287",
  appId: "1:809042373287:web:203012f80afc30fbad0982",
  measurementId: "G-5M9H4WJGTJ"
};

function cargarBaseDeDatos() {
    fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);


cargarBaseDeDatos()