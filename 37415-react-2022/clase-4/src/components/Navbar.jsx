import React from 'react';
import Form from './Form'
import Boton from './Boton';

const Navbar = () => {
  console.log()
  const user = {nombre: "Francisco", direccion: "Calle Falsa 123"}
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarColor02">
      
      <Form boton={<Boton/>}/>
     {/*<Form contBuscar="Sucursales"/>*/}
    </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;