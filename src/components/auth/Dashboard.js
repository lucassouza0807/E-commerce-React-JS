import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../reducers/login/userSlice";

function Dashboard() {
    let state = useSelector(selectUser);
    let nome = state.user.user;
    return(
        <div className="container bg-red-300">
            <h1 className="text-center"> OLÁ, {nome} </h1>
        </div>
    )
}

export default Dashboard