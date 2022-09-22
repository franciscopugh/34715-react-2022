import React from 'react';
import { Link } from 'react-router-dom';
const Listado = () => {
    return (
        <>
        <ul className="navbar-nav me-auto">
      <li className="nav-item">
          <Link className='nav-link' to="/contacto"><button className='btn btn-dark'>Contacto</button></Link>
      </li>
      <li className="nav-item">
          <Link className='nav-link' to="/about"><button className='btn btn-dark'>About</button></Link>
      </li>
      <li className="nav-item">
                            <Link className='nav-link' to="/carrito"><button className='btn btn-dark'>Carrito</button></Link>
        </li>
        </ul>
        
        </>
    );
}

export default Listado;
