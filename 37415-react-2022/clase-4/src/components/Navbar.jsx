import React from 'react';
import Form from './Form'
import img from '../../public/img/1.jpg'
const Navbar = () => {
  console.log()
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <img src={img} alt="" />
      <Form contBuscar="Productos"/>
     {/*<Form contBuscar="Sucursales"/>*/}
    </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;

/*
*/