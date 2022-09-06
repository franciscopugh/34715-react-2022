import React, {useState} from 'react';

const DetalleProducto = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);
    
    const agregarAlCarrito = (producto, cantidad) => {
        const productoCarrito = {id: producto.id, cantidad: cantidad}
        console.log(productoCarrito)
    }

    const cantidadProducto = (operacion) => {
        if(operacion == "+") {
            if(cantidad < producto.stock) {
                setCantidad(cantidad + 1)
            }
        } else {
            if(cantidad > 1) {
                setCantidad(cantidad - 1)
            }
        }
    }

    return (
        <>
            <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Marca: {producto.marca} </p>
                    <p className="card-text">Modelo: {producto.modelo} </p>
                    <p className="card-text">Precio: ${producto.precio} </p>
                    <p className="card-text">Stock: {producto.stock} </p>
                    <p>
                       {cantidad}
                    </p>
                    <button className='btn btn-light' onClick={() => cantidadProducto("+")}> +</button>
                    <button className='btn btn-dark' onClick={() => cantidadProducto("-")}>-</button>
                    
                    <button className='btn btn-success' onClick={() => agregarAlCarrito(producto, cantidad)}>Comprar</button>
        </>
    );
}

export default DetalleProducto;
