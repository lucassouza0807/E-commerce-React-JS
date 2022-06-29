import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [dadosLogin, setDaddosLogin] = useState({
        "email": "",
        "senha": "",

    });

    function handleChange(event) {
        let key = event.target.id;
        let value = event.target.value;

        setDaddosLogin(dadosLogin => ({
            ...dadosLogin,
            [key]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();


    }

    return (
        <div className="container border-1 sm:w-[80vw] md:w-[70vw] lg:w-[700px] h-[600px] rounded relative top-3 shadow-lg pb-1 items-center">
            <div className="bg-blue-300 mb-4 rounded-t text-white p-5 font-bold">
                <h1>Faça seu Login</h1>
            </div>
            <form className="flex flex-col pl-4 pr-4 text-lg" onSubmit={handleSubmit}>
                <input id="email" className="mb-3 border-b-2 border-blue-100 pl-3 rounded h-10 outline-none" type="text" placeholder="email" />
                <input id="senha" className="mb-9 border-b-2 border-blue-100 pl-3 rounded h-10 outline-none" type="text" placeholder="senha" />
                <div className="recuperacao flex flex-row justify-right text-gray-500">
                    <p className='mr-3 mb-3' ><Link to="forgot_password"> Esqueci minha senha </Link> </p>
                    <p className="mb-9" ><Link to="forgot_user"> Esqueci meu usuario </Link> </p>
                </div>
                <button className="bg-blue-300 w-[100%] rounded text-white font-bold h-10 hover:bg-indigo-300 hover:scale-105" type="submit"> Login </button>
            </form>
        </div>
    )
}

export default Login; 