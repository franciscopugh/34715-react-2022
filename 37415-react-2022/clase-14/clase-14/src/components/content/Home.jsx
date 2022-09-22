import React, {useState, useEffect, useContext} from 'react';
import { DarkModeContext } from '../../context/DarkModeContext.jsx';
import { consultarDB } from '../../utils/productos.js';
const Home = () => {
    const [productos, setProductos] = useState([]);
    const {darkMode, toggleDarkMode} =  useContext(DarkModeContext);

  useEffect(() => {
    consultarDB().then(productos => setProductos(productos))
    
  }, []);


  return (
     
      
      <div className={darkMode ? 'darkMode row' : 'row'}>
          <button className={darkMode ? 'btn btn-light' : 'btn btn-dark'} onClick={() => toggleDarkMode()}>Cambiar Modo</button>
            {productos}
        </div>
      
        
 
    
  );
  
}

export default Home;