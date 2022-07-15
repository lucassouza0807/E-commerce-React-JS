import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../reducers/login/userSlice";

import {
    faCartShopping,
    faMagnifyingGlass,
    faUserCircle,
    faBars
} from '@fortawesome/free-solid-svg-icons';

function Header() {
    let state = useSelector(selectUser);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let userName = "";

    if (state.isLogged == true) {
        userName = state.user.user
    }

    return (
        <div>
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
                {state.isLogged == false &&
                    <div className="invisible md:visible md:flex md:flex-row md:items-center relative md:top-[8px] mr-[3rem]">
                        <FontAwesomeIcon className='relative top-[-8px] text-white h-[2rem] mr-[1rem]' icon={faUserCircle} />
                        <p className="w-[7rem] h-[5rem] text-sm text-white relative"> Faça seu <strong> <Link to="/login"> Login </Link> </strong> ou faça seu<strong>  <Link to="/cadastro"> Cadastro </Link> </strong> </p>
                    </div>
                }
                {state.isLogged == true &&
                    <div className="w-[10rem] text-center flex flex-col items-center">
                        <p className="text-white font-bold mr-[10px] text-right"> Olá, {userName}</p>
                        <p className="text-white text-right text-[15px]"> <Link to="minha-conta"> MINHA CONTA </Link> | <button onClick={() => { dispatch(logout()); navigate("../", { replace: true }) }}> SAIR</button> </p>
                    </div>
                }
                {state.isLogged == true &&
                    <div className="cart md:visible flex flex-row justify-center mr-[2rem]">
                        <Link to="/carrinho"> <FontAwesomeIcon className='invisible md:visible h-[1.8rem] text-white' icon={faCartShopping} /> </Link>
                        <span id="counter" className="count text-center font-bold text-white"> {1} </span>
                    </div>
                }
            </div>
            <div className="flex flex-row w-[100%] items-center justify-center bg-red-500 mr-[5px] text-white font-bold p-1">
                <Link to="/hardware/produtos"><h1 className="mr-[3rem]" > Todos os hardwares </h1></Link>
                <Link to="/hardware/placa-de-video"><h1 className="mr-[3rem]"> Placas de video </h1></Link>
                <Link to="/hardware/processadores"><h1 className="mr-[3rem]"> Processadores </h1></Link>
            </div>
        </div>
    )
}

export default Header;