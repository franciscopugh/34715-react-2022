import React, {useState, useContext, useEffect} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { mostrarProductos } from '../../utils/productos';

const Carrito = () => {
    const {carrito, agregarProductoCarrito} =  useContext(CarritoContext);
    const [state, setstate] = useState([]);
    useEffect(() => {
      const productos = mostrarProductos(carrito)
      console.log(productos)
        productos.map((producto, indice) => 
            <div className="card" key={indice} style={{width: '18rem', margin:"3px"}}>
                <img src={producto.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Marca: {producto.marca}</p>
          <p className="card-text">Modelo: {producto.modelo}</p>
          <p className="card-text">Precio: ${producto.precio}</p>
          <p className="card-text">Stock: {producto.stock}</p>
          <button className='btn btn-light'>Comprar</button>
      </div>
    </div>)
    setstate(productos)
    }, []);
    
      
    if(state.length != 0) {
          return (
            <>
              {state}
            </>
          )
        }
        
          
        
        
    
}

export default Carrito;
