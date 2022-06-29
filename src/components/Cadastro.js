import retroConsolesImage from "../images/retro-consoles.jpeg";
import avatar from "../images/avatar.svg";
import { useState, useContext } from "react";
import mostrarCampoDeSenha from "../scripts/mostrarCampoDeSenha.js";
import $ from "jquery";
import mask from "../scripts/mask";

function Cadastro() {
    const [dadosCadastro, setDadosCadastro] = useState({
        "nome": "",
        "email": "",
        "cpf": "",
        "senha": ""
    });

    const [mensagensDeValidacao, setMensagensDeValidacao] = useState({
        "senhas_diferentes": "",
        "email_duplicado": "",
        "cpf_duplicado": "",
        "campos_obrigatorios": "",
        "tam_minimo_senha": ""
    });

    function handleChange(event) {
        let key = event.target.id;
        let value = event.target.value;

        setDadosCadastro(dadosCadastro => ({
            ...dadosCadastro,
            [key]: value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();

        let senha = document.getElementById("senha").value;
        let senha_confirm = document.getElementById("conf_senha").value;

        if (senha.length < 8) {
            setMensagensDeValidacao({ "tam_minimo_senha": "A senha deve ter no minino 8 digitos!" });
        }

        if (senha !== senha_confirm) {
            setMensagensDeValidacao({ "senhas_diferentes": "As senhas não conferem!" });
        }
    };

    return (
        <div className="container border-1 sm:w-[80vw] md:w-[70vw] lg:w-[700px] h-[600px] rounded relative top-3 shadow-lg pb-1 items-center">
            <div className="bg-blue-300 mb-4 rounded-t text-white p-5 font-bold">
                <h1>Cadastre-se e entre para o mundo dos games!</h1>
            </div>
            <form className="flex flex-col pl-4 pr-4 text-lg" onSubmit={handleSubmit}>
                <input id="nome" className="mb-3 border-b-2 border-blue-100 pl-3 rounded h-10 outline-none" type="text" placeholder="Nome" onChange={handleChange} required />
                <input id="email" className="mb-3 border-b-2 border-blue-100 pl-3 rounded h-10 outline-none" type="text" placeholder="E-Mail" onChange={handleChange} required />
                <input id="cpf" className="mb-3 border-b-2 border-blue-100 pl-3 rounded h-10 outline-none" type="text" placeholder="CPF" onChange={handleChange} required />
                <input id="senha" className="mb-3 border-b-2 border-blue-100 pl-3 rounded h-10 outline-none" type="password" placeholder="senha" onChange={handleChange} required />
                <input id="conf_senha" className="mb-3 border-b-2 border-blue-100 pl-3 rounded h-10 outline-none" type="password" placeholder="Confirme sua senha" onChange={handleChange} required />
                <div className="flex flex-row">
                    <input onClick={mostrarCampoDeSenha} id="check" type="checkbox" className="mr-3" />
                    <p id="papa" className="mb-6 mt-3"> Mostrar senha </p>
                </div>
                <script src="../scripts/mask.js" />
                <button className="bg-red-600 w-[100%] rounded text-white font-bold h-10 hover:scale-105" type="submit"> Cadastre-se </button>
                {mensagensDeValidacao.senhas_diferentes &&
                    <span className="mt-4 text-center h-[35px] bg-yellow-200 rounded"> {mensagensDeValidacao.senhas_diferentes} </span>
                }
                {mensagensDeValidacao.campos_obrigatorios &&
                    <span className="mt-4 text-center h-[35px] bg-yellow-200 rounded"> {mensagensDeValidacao.campos_obrigatorios} </span>
                }
                {mensagensDeValidacao.tam_minimo_senha &&
                    <span className="mt-4 text-center h-[35px] bg-yellow-200 rounded"> {mensagensDeValidacao.tam_minimo_senha} </span>
                }
            </form>
        </div>
    )
}

export default Cadastro;