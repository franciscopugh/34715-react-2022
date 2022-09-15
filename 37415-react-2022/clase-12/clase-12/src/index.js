import './firebase/index.firebase.js'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {CarritoProvider } from './context/CarritoContext';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CarritoProvider>
            <App />
    </CarritoProvider>  
  

    
  
);