import { useState } from "react";
import { useAuthContext } from "../context/Context";
import './login.css'

const Usuario = "WelcomeBitch"

const Login = () =>{
    const {login} = useAuthContext();
    const [palabramagica, setPalabraMagica] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(palabramagica === Usuario){
            login();
        }
    }

    const handleInput = (e)=>{
        setPalabraMagica(e.target.value)
    }


    return(
        <>
        <h1 className="login">Login</h1>
        <div className="contenedor">
            <form onSubmit={handleSubmit} className="form">
                <input type="text" value={palabramagica} onChange={handleInput} />
                <button type="submit" className="btn">Iniciar Sesión</button>
            </form>
        </div>
        </>
    )
}

export default Login;