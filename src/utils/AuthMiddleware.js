import { Outlet, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../reducers/login/userSlice";

function AuthMiddleware() {
    let state = useSelector(selectUser)

    let isLogged = state.isLogged;

    if(isLogged === true) {
        return <Outlet />

    } else if(isLogged === false) { 
        return <Navigate to="../login" replace={true} />
    }
}

export default AuthMiddleware;
