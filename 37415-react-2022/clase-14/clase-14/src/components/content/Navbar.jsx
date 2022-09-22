import React from 'react';
import Listado from '../layouts/Listado';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
          
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
        <Link className='nav-link' to="/"><button className='btn btn-dark'>Home</button></Link>
      
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Listado/>
    </div>
    <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <button className='btn btn-dark'>Dark Mode</button>
      </li>
    </ul>
  </div>
</nav>

        </>
    );
}

export default Navbar;
