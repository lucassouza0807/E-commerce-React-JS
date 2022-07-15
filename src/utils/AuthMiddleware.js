import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../reducers/login/userSlice";

function AuthMiddleware() {
    let state = useSelector(selectUser)

    let isLogged = state.isLogged;

    if (isLogged === true) {
        return <Outlet />

    }

    return <Navigate to="../login" replace={true} />
}

export default AuthMiddleware;
