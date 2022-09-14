import React, {useState} from 'react';

const Form = () => {
    const dataFormulario = React.useRef()

    /*const [valores, setValores] = useState({
        user: "",
        password: "",
        email: ""
    });*/


    function consultarForm(e) {
        e.preventDefault()
        console.log(dataFormulario.current)
        const formData = new FormData(dataFormulario.current)

        console.log(Object.fromEntries(formData))
    }

    function cambioInputs(e) {
            const {value} = e.target
            
    }
    return (
        <>
            <form onSubmit={consultarForm} ref={dataFormulario}>
        <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email'/>
    
    </div>
    <div className="mb-3">
            <label htmlFor="usuario" className="form-label">User</label>
            <input type="text" className="form-control" id="user" name="user" />
    </div>
    <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password'/>
    </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </>
    );
}

export default Form;
