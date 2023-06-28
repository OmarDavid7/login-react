import { Link } from "react-router-dom";
import { LOGOUT } from "../routes/Path";

const Profile = ()=>{
    return(
        <>
        <div>
            <h1>Mi Ruta Privada</h1>
            <Link to={LOGOUT}>Cerrar Sesión</Link>
        </div>
        </>
    )
}

export default Profile;