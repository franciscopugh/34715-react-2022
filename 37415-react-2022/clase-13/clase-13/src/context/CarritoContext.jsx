import React, {createContext, useState} from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProductoCarrito = (producto) => {
        const auxCarrito = carrito
        auxCarrito.push(producto)
        setCarrito(auxCarrito)
    }

    const quitarProductoCarrito = (producto) => {
        const auxCarrito = carrito
        let indice = auxCarrito.findIndex(prod => prod.id === producto.id)
        auxCarrito.splice(indice, 1)
        setCarrito(auxCarrito)
    }
    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProductoCarrito, quitarProductoCarrito}}>
                    {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export { CarritoContext, CarritoProvider};
