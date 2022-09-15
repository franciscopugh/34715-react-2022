import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { DarkModeProvider } from '../context/DarkModeContext';
import './App.css'
import Home from './Home';
import Producto from './Producto';


const App = () => {
  return(
    <>
    <DarkModeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productos/:id" element={<Producto/>}></Route>
      </Routes>
    </BrowserRouter>
    </DarkModeProvider>

   
    </>
  )
   
   
}

export default App;