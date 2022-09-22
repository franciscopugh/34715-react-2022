import React, {useState, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
const DetalleProducto = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);
    const {carrito, agregarProductoCarrito} =  useContext(CarritoContext);
    
    const agregarAlCarrito = (producto, cantidad) => {
        let indice = carrito.findIndex(proc => proc.id == producto[0])
        const productoCarrito = {id: producto[0], cantidad: cantidad}

        if(indice != -1) {
            carrito[indice] = productoCarrito
        } else {
            agregarProductoCarrito(productoCarrito)
        }
        
        console.log(carrito)
    }

    const cantidadProducto = (operacion) => {
        if(operacion == "+") {
            if(cantidad < producto[1].stock) {
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
       <h5 className={`card-title ${producto.categoria}`}>{producto[1].nombre}</h5>
                    <p className="card-text">Marca: {producto[1].marca} </p>
                    <p className="card-text">Modelo: {producto[1].modelo} </p>
                    <p className="card-text">Precio: ${producto[1].precio} </p>
                    <p className="card-text">Stock: {producto[1].stock} </p>
                    <p>
                       {cantidad}
                    </p>
                    <button className='btn btn-light' onClick={() => cantidadProducto("+")}> <i className="far fa-sun"></i></button>
                    <button className='btn btn-dark' onClick={() => cantidadProducto("-")}>-</button>
                    
                    <button className='btn btn-success' onClick={() => agregarAlCarrito(producto, cantidad)}>Comprar</button>
        
       </>
        
        
            
        
    );
}

export default DetalleProducto;
