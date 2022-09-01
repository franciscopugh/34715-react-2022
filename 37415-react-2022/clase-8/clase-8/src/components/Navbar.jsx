import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    
               
        <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className='nav-link' to="/"><button className='btn btn-dark'>Home</button></Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link' to="/productos">Productos</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link' to="/contacto">Contacto</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link' to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;
