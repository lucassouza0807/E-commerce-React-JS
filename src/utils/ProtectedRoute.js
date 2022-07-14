import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../reducers/login/userSlice";
import { useEffect, useState } from "react";

function ProtectedRoute() {
    let state = useSelector(selectUser)
    let logged = useState();
    let navigate = useNavigate();
    let outLet = useOutlet();

    let isLogged = state.isLogged;

    useEffect(() => {
        if (isLogged === false) {
            return navigate("../login", { replace: true })
        }
    }, [isLogged])

    if (isLogged === true) {
        return (
            <Outlet />
        )
    }
}

export default ProtectedRoute;
