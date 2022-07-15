import { useNavigate, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../reducers/login/userSlice";
import { useEffect } from "react";

function ProtectLoginPage() {
    let state = useSelector(selectUser);
    let isLogged = state.isLogged;
    let navigate = useNavigate();


    if (isLogged === false) {
        return <Outlet />
    }

    return <Navigate to="../dashboard" replace={true}/>

}

export default ProtectLoginPage;