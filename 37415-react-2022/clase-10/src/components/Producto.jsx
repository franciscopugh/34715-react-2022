import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';
import { DarkModeContext } from '../context/DarkModeContext';
const Producto = () => {
    const [producto, setProductoCard] = useState([]);
    const {darkMode, toggleDarkMode} =  useContext(DarkModeContext);
    const {id} = useParams()
    useEffect(() => {
        fetch("../json/productos.json")
        .then(response => response.json())
        .then(data => {
            const producto1 = data.find(producto => producto.id == id)
            setProductoCard(producto1)
        })
     
    }, []);

   

    return (
        
       
         <div className={darkMode ? 'darkMode card mb-3' : 'lightMode card mb-3'} style={{maxWidth: '540px'}}>
             <button className={darkMode ? 'btn btn-light' : 'btn btn-dark'} onClick={() => toggleDarkMode()}>Cambiar Modo</button>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"../img/"+ producto.img} className="img-fluid rounded-start" alt="..." />
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <DetalleProducto producto={producto}/>
                    
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Producto;