import { Link } from "react-router-dom";
import { LOGIN } from "../routes/Path";

const Home = ()=>{
    return(
        <>
        <div>
            <h1>Let's get the party started</h1>
            <Link to={LOGIN}>Iniciar Sesión</Link>
        </div>
        </>
    )
}

export default Home;