import { useEffect } from "react";
import { useAuthContext } from "../context/Context";

const Logout = ()=>{
    const {logout} = useAuthContext();
        useEffect(()=> logout())
        return null;
}

export default Logout;