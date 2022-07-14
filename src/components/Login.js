import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changeUser } from '../reducers/login/userSlice';
import { baseURL, timeout, headers } from "../api/api_config.js";

function Login() {
    const axios = require("axios").default;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const instance = axios.create({
        "baseURL": baseURL,
        "timeout": timeout,
        "headers": headers
    });

    const [dadosLogin, setDadosLogin] = useState({
        "email": "",
        "senha": "",

    });

    function handleChange(event) {
        let key = event.target.id;
        let value = event.target.value;

        setDadosLogin(dadosLogin => ({
            ...dadosLogin,
            [key]: value
        }));

    }

    const [validationMessage, setValidationMessage] = useState({});

    function handleSubmit(event) {
        event.preventDefault();

        instance.post("/api/login", dadosLogin)
            .then((response) => {
                let payload = "";
                if (response.data.error_code == 1) {
                    payload = {
                        "token": response.data.token,
                        "cliente_id": response.data.cliente_id,
                        "user": response.data.nome
                    }

                    dispatch(changeUser(payload));
                    navigate("../dashboard", { replace: true });
                }

                let error_type = response.data.error_type;
                
                switch (error_type) {
                    case "email":
                        setValidationMessage({
                            "email_error": response.data.mensagem
                        }, []);
                        break;

                    case "senha":
                        setValidationMessage({
                            "senha_error": response.data.mensagem
                        }, []);
                        break;
                }
            

            })
            .catch((error) => {
                console.log(error);
                setValidationMessage({ "mensagem": error.data.mensagem });
                
                console.log(error);
            }, [])
    }

    return (
        <div className="container border-1 sm:w-[80vw] md:w-[70vw] lg:w-[700px] h-[600px] rounded relative top-3 shadow-lg pb-1 items-center">
            <div className="bg-blue-300 mb-4 rounded-t text-white p-5 font-bold">
                <h1>Faça seu Login</h1>
            </div>
            <form className="flex flex-col pl-4 pr-4 text-lg justify-center" onSubmit={handleSubmit}>
                <input id="email" className="mb-3 border-b-2 border-blue-100 pl-3 rounded h-10 outline-none" type="text" placeholder="email" onChange={handleChange} />
                <input id="senha" className="mb-9 border-b-2 border-blue-100 pl-3 rounded h-10 outline-none" type="text" placeholder="senha" onChange={handleChange} />
                <div className="recuperacao flex flex-row justify-right text-gray-500">
                    <p className='mr-3 mb-3' ><Link to="forgot_password"> Esqueci minha senha </Link> </p>
                    <p className="mb-9" ><Link to="forgot_user"> Esqueci meu usuario </Link> </p>
                </div>
                <button className="bg-red-500 w-[100%] rounded text-white font-bold h-10 hover:bg-indigo-300 hover:scale-105 mb-[3rem]" type="submit"> Login </button>
            </form>
            {validationMessage.email_error &&
                <div className="container bg-yellow-100 flex flex-row items-center font-bold w-[70%] items-center justify-center h-[3rem] rounded">
                    <span className='text-center text-black-100'> {validationMessage.email_error} </span>
                </div>
            }
            {validationMessage.senha_error &&
                <div className="container bg-red-100 flex flex-row items-center font-bold w-[70%] items-center justify-center h-[3rem] rounded">
                    <span className='text-center text-red-500'> {validationMessage.senha_error} </span>
                </div>
            }
        </div>
    )
}

export default Login; 