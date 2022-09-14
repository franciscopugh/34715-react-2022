import React, {useEffect, useState} from 'react';

const PantallaCarga = () => {

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, []);
    return (
        <>
            {loading && <h2>True</h2>}    
            
        </>)
    ;
}

export default PantallaCarga