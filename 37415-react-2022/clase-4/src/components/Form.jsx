import React from 'react';

const Form = ({boton}) => {
    return (
        <>
            <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder="" />
                {boton}
            </form>
        </>
    );
}

export default Form;