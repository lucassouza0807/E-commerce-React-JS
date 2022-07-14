import { useState, useEffect } from "react";
import { baseURL, timeout, headers } from "../api/api_config.js";

function Produtos() {
  const axios = require("axios").default;

  const [produtos, setProdutos] = useState(JSON.parse(window.localStorage.getItem("produtos")));

  const instance = axios.create({
    "baseURL": baseURL,
    "timeout": timeout,
    "headers": headers
  })

  const sort = [
    "Selecione",
    "Preço crescente",
    "Preço decrescente",
    "Fabricante",
  ];
  
  useEffect(() => {
    instance
      .get("/api/produtos")
      .then((response) => {
        window.localStorage.setItem("produtos", JSON.stringify(response.data.data));
        console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="produtos container">
      <div className="filtro flex flex-col items-center justify-left rounded">
        <h1 className="text-gray-500 font-bold"> Hardwares </h1>
        <div className="font-bold w-[95%] flex flex-col text-left">
          <h2 className="mb-[0.1rem]"> Categoria </h2>
          <form className="flex flex-col items-left justify-left text-right">
            {produtos.map((produto, key) => (
              <div key={key} className="flex flex-row items-center justify-right p-2">
                <input type="checkbox" className="filter h-[35px] bg-green mr-[0.8rem]" />
                <p className=""> {produto.categoria} </p>
              </div>
            ))}
          </form>
        </div>
      </div>
      <div className="sort flex flex-row items-center justify-right p-[1rem]">
        <div className="flex flex-row">
          <h3 className="font-bold mr-[10px]"> Ordenar </h3>
          <select id="option" >
            {sort.map((option, key) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <hr />
      </div>
      <div className="p relative flex flex-row p-[10px] flex-wrap-reverse">
        {produtos.map((produto, key) => (
          <span className="w-[20%] m-[5px] h-[400px] rounded pb-[15px] border-2 border-gray-100 shadow-lg" key={key}>
            <div className="flex items-center justify-center">
              <img className="h-[9rem]" src={produto.imagem_path} />
            </div>
            <div className="text-center">
              <h1 className="font-bold"> {produto.produto_nome} </h1>
              <p className="mb-[20px]"> {produto.produto_descricao} </p>
            </div>
            <div className="flex items-center justify-center relative">
              <button className="bg-red-500 w-[95%] h-[35px] text-white font-bold rounded ">
                Adicionar o carrinho
              </button>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
