import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './About';
import Contacto from './Contacto';
import Productos from './Productos';
import Home from './Home';
import Navbar from './Navbar';
import './App.css'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/productos' element={<Productos/>}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path="*" element={<h1>Error 404</h1>}></Route>
        </Routes>   
      </BrowserRouter>
    </>
  );
}

export default App;
