import { useEffect } from "react";
import { useAuthContext } from "../context/Context";
import { Outlet } from "react-router-dom";
import { LOGIN } from "../routes/Path";
import { Navigate } from "react-router-dom";

const RutaPrivate = ()=>{
    const {isAuthenticated} = useAuthContext();

        if(!isAuthenticated){
           return <Navigate to={LOGIN}/> 
        }


    return(
        <div>
            <Outlet/>
        </div>
    )
}

export default RutaPrivate;