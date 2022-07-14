import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../reducers/login/userSlice";
import { useEffect } from "react";

function ProtectLoginPage() {
    let state = useSelector(selectUser);
    let isLogged = state.isLogged;
    let navigate = useNavigate();

    useEffect(() => {
        if(isLogged === true) {
            navigate("../dashboard");
        }
    }, [isLogged])

    return (
        <Outlet />
    )
}

export default ProtectLoginPage;