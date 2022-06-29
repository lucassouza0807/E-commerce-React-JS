import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Main.js';
import Login from './components/Login.js';
import Cadastro from './components/Cadastro.js';
import { Route, Routes, Link, BrowserRouter, useLocation } from "react-router-dom";
import Produtos from "./components/Produtos.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./images/logo.png";
import { Counter } from "./scripts/Counter.js";
import Test from "./components/Test";

import {
  faCartShopping,
  faMagnifyingGlass,
  faUserCircle,
  faBars
} from '@fortawesome/free-solid-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [cartQty, setCartQty] = useState(5);

  return (
    <BrowserRouter>
      <div className='md:visible bg-blue-500 0 h-[150px] md:h-[150px] lg:h-[150px] flex flex-row items-center align-center justify-center shadow-lg'>
        <div className='small-device md:invisible pl-[2rem] fixed left-[10px]'>
          <button> <FontAwesomeIcon className='text-white h-[2rem]' icon={faBars} /></button>
        </div>
        <div className='invisible md:visible flex flex-row items-center logo mr-[2rem]'>
          <Link to="/"> <img className='h-[5rem]' src={logo} /> </Link>
        </div>
        <div className="search-box items-center mr-[40px]">
          <form className="md:visible form_search flex flex-row">
            <input className="w-[200px] md:w-[20rem] lg:w-[35rem] h-[3rem] text-lg" type='text' name="query" autoComplete='on' />
            <button className="btn bg-red-500 h-[3rem]"> <FontAwesomeIcon className="h-[20px] text-white" icon={faMagnifyingGlass}> </FontAwesomeIcon></button>
          </form>
        </div>
        <div className="invisible md:visible md:flex md:flex-row md:items-center relative md:top-[8px] mr-[3rem]">
          <FontAwesomeIcon className='relative top-[-8px] text-white h-[2rem] mr-[1rem]' icon={faUserCircle} />
          <p className="w-[7rem] h-[5rem] text-sm text-white relative"> Faça seu <strong> <Link to="/login"> Login </Link> </strong> ou faça seu<strong>  <Link to="/cadastro"> Cadastro </Link> </strong> </p>
        </div>
        <div className="cart md:visible flex flex-row justify-center mr-[2rem]">
          <Link to="/carrinho"> <FontAwesomeIcon className='invisible md:visible h-[1.8rem] text-white' icon={faCartShopping} /> </Link>
          <span id="counter" className="count text-center font-bold text-white"> {cartQty} </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center bg-red-500 mr-[5px] text-white font-bold p-1">
        <Link to="/hardware/produtos"><h1 className="mr-[3rem]" > Todos os hardwares </h1></Link>
        <Link to="/hardware/placa-de-video"><h1 className="mr-[3rem]"> Placas de video </h1></Link>
        <Link to="/hardware/processadores"><h1 className="mr-[3rem]"> Processadores </h1></Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="hardware/produtos" element={<Produtos />} />
        <Route path="/teste" element={<Test />} />
      </Routes>
      <footer className='fixed bottom-[0] text-center h-[100px] bg-gray-200 w-[100%]'>
        <h1> <strong> This is a footer </strong> </h1>
      </footer>
    </BrowserRouter>
  )
}

root.render(
  <App />
);