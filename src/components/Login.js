import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
    const axios = require("axios").default;

    const instance = axios.create({
        baseURL: "http://127.0.0.1:8000",
        timeout: 3000,
        headers: {
            "Api-Secret": "4f3c6a0b-522e-442e-94f7-3d413956050e",
            "Access-Control-Allow-Origin": "http://localhost:8000",
            "Access-Control-Allow-Methods": "PUT, POST, DELETE, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Accept, Authorization, Content-Type",
        },
    });

    const [dadosLogin, setDadosLogin] = useState({
        "_token": "",
        "email": "",
        "senha": "",

    });
    
    window.csrf_token = "d";
    
    function handleChange(event) {
        let key = event.target.id;
        let value = event.target.value;

        setDadosLogin(dadosLogin => ({
            ...dadosLogin,
            [key]: value
        }));

    }

    const [validationMessage, setValidationMessage] = useState();

    function handleSubmit(event) {
        event.preventDefault();

        instance.post("/api/login", dadosLogin)
            .then((response) => {
                window.localStorage.setItem("token", response.data.access_token);
                setValidationMessage({ "mensagem": response.data.mensagem });

            })
            .catch((error) => {
                console.log(error);
                setValidationMessage({ "mensagem": error.response.data.mensagem });
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
                <button className="bg-blue-300 w-[100%] rounded text-white font-bold h-10 hover:bg-indigo-300 hover:scale-105 mb-[3rem]" type="submit"> Login </button>
            </form>
            {validationMessage &&
                <div className="container flex flex-row items-center bg-yellow-100 font-bold w-[70%] items-center justify-center h-[3rem] rounded">
                    <span className='text-center'> {validationMessage.mensagem} </span>
                </div>}
        </div>
    )
}

export default Login; 