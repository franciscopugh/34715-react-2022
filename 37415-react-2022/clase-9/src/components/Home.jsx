import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
const Home = () => {
    const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("./json/productos.json")
    .then(response => response.json())
    .then(data => {
      const productCard = data.map((producto, indice) => 
        <div className="card" key={indice} style={{width: '18rem', margin:"3px"}}>
          <img src={"./img/" + producto.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">Marca: {producto.marca}</p>
              <p className="card-text">Modelo: {producto.modelo}</p>
              <p className="card-text">Precio: ${producto.precio}</p>
              <p className="card-text">Stock: {producto.stock}</p>
              <button className='btn btn-dark'><Link className='nav-link' to={"/productos/" + producto.id}>Ver Productos</Link></button>
        </div>
      </div>
      
      )

      setProductos(productCard)
    })
  }, []);


  return (
    <div className="row">
     
      {productos}
    </div>  
    
  );
  
}

export default Home;