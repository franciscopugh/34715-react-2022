import {React, useState, useEffect} from 'react';

const productos = [
    {id: 1, nombre: "Papas Fritas", marca: "Papa feliz", precio: 120, stock: 20}, 
    {id: 2, nombre: "Lentejas", marca: "Lentejin", precio: 100, stock: 25},
    {id: 3,nombre: "Fideos", marca: "Fidein", precio: 80, stock: 30},
    {id: 4,nombre: "Hamburguesas", marca: "Pato", precio: 300, stock: 22}
]

function consultarPromesa(confirmacion) {

    return new Promise ((res,rej) => {
            if(confirmacion) {
                res(productos)
            } else {
                rej("Acceso denegado")
            }
    })

}

const Productos = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
        .then(data => {
        const productosJSX = data.map((producto, indice) => 
            <div className="card border-primary mb-3" key={indice} style={{maxWidth: '15rem', margin: '5px'}}>
                <div className="card-header">{producto.nombre}</div>
                    <div className="card-body">
                        <p className="card-text">Marca: {producto.marca}</p>
                        <p className="card-text">Precio: ${producto.precio}</p>
                        <p className="card-text">Stock: {producto.stock}</p>
                </div>
            </div>
            )

            console.log(productosJSX)
        
            setProductos(productosJSX)
        })
        .catch(error => {
            console.error(error)
        })
    }, []);
    

    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default Productos;

/*
*/