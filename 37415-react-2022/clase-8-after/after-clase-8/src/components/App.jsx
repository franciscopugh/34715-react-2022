import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home';
import Producto from './Producto';

const App = () => {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productos/:id" element={<Producto/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
   
   
}

export default App;
