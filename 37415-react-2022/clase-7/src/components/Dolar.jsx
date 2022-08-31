import React, {useState, useEffect} from 'react';
import './Dolar.css'

const Dolar = () => {
    const [dolar, setDolar] = useState({});
    useEffect(() => {
       fetch('https://criptoya.com/api/dolar')
       .then(response => response.json())
       .then(({solidario, mep, blue}) => {
            //console.log(Object.values({solidario, mep, blue}))
            //console.log(Object.keys({solidario, mep, blue}))
            setDolar(Object.entries({solidario, mep, blue}).map((dolar,    indice) => 
            <div key={indice} className="divDolar">
                <p>Dolar {dolar[0]}: ${dolar[1]}</p>
            </div>
            ))
        }) 
    },[{}]);
    return (
        <>
            {dolar}
        </>
    );
}

export default Dolar;
