import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { DarkModeProvider } from '../context/DarkModeContext';
import '../styles/App.css'
import Home from './content/Home';
import Navbar from './content/Navbar';
import Producto from './content/Producto';
import Contacto from './content/Contacto';
import About from './content/About';
import Carrito from './content/Carrito';

const App = () => {
  return(
    <>
    <DarkModeProvider>    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productos/:id" element={<Producto/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/carrito' element={<Carrito/>}></Route>
        <Route path="*" element={<h1>Error 404</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </DarkModeProvider>
          
    </>
  )
   
   
}

export default App;