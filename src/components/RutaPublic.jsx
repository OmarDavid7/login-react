import { Outlet } from "react-router-dom";
import { useAuthContext } from "../context/Context";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { PROFILE } from "../routes/Path";

const RutaPublica = ()=>{
    const {isAuthenticated} = useAuthContext();

    if(isAuthenticated){
       return <Navigate to={PROFILE}/>
    }

    return(
        <div>
            <Outlet/>
        </div>
    )
}

export default RutaPublica;