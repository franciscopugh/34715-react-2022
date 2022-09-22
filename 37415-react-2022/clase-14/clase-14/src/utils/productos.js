import { getProductos, getProducto} from "./firebase"
import { Link } from "react-router-dom"
import { async } from "@firebase/util"

export const consultarDB = async () => {
    const productos = await getProductos()
    console.log(productos.docs)
    const items =  productos.docs.map(producto => [producto.id, producto.data()]) //Transformacion en array
    console.log(items)
    const productCard = items.map((producto, indice) => 
    <div className="card" key={indice} style={{width: '18rem', margin:"3px"}}>
      <img src={producto[1].img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{producto[1].nombre}</h5>
          <p className="card-text">Marca: {producto[1].marca}</p>
          <p className="card-text">Modelo: {producto[1].modelo}</p>
          <p className="card-text">Precio: ${producto[1].precio}</p>
          <p className="card-text">Stock: {producto[1].stock}</p>
          <button className='btn btn-light'><Link className='nav-link' to={"/productos/" + producto[0]}>Ver Producto</Link></button>
    </div>
  </div>
  )
  console.log(productCard)
  return productCard
}

export const mostrarProductos = (carrito) => {
  let array = []
  const car = carrito.map((element) => consultarProducto(element.id))
  
  car.forEach(element => {
    element.then(data => array.push(data.data()))
  });
 
  return array
 
}

export const consultarProducto = async (id) => {
    const producto = await getProducto(id)
    return producto
}

