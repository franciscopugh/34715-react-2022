import {React, useState} from 'react';
import './App.css';
import Navbar from './Navbar';

const App = () => {
    /*
    Esto no se puede hacer

    const boton1 = document.getElementById("boton1")

    boton1.addEventListener("click", () => {
        console.log("Hola")
    })*/

    const [cont, setCont] = useState(0);

    function contador(operacion) {
        if(operacion == "+") {
            setCont(cont + 1)
        } else {
            setCont(cont - 1)
        }
    }

    return (
        <>
            <Navbar/>
            <p>
                Contador: {cont} 
            </p>
            <button className='btn btn-primary' onClick={() => contador("+")}>
                +
            </button>
            <button className='btn btn-secondary' onClick={() => contador("-")}>
                -
            </button>
        </>
    );
}

export default App;
