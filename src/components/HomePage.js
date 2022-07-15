import React from "react";
import "../css/app.css";

function HomePage() {
    return (
        <div>
            <div className="container flex flex-row bg-red-500 mt-3 h-[3rem] pl-[25px] items-center font-bold text-lg">
                <h1 className="text-white"> Produtos gamer </h1>
            </div>
            <div className="relative container bg-gray-100 flex flex-row rounded shadow-lg">
                <div className="flex items-center">
                    <button>PREVIOS</button>
                </div>
                <div className="flex flex-row w-[700px] overflow-hidden">
                    <div className="img-1 border-2 border-black">
                        <img className="" src="../images/produtos/core-i5.png" />
                    </div>
                    <div className="flex flex-col items-center img-1 border-2 border-black">
                        <img className="" src="../images/produtos/gtx-1050-ti.png" />
                    </div>
                    <div className="img-1 border-2 border-black">
                        <img className="w-[110%]" src="../images/produtos/msi-gtx-1650.png" />
                    </div>
                    <div className="img-1 border-2 border-black">
                        <img src="../images/produtos/razer.png" />
                    </div>
                    <div className="img-1 border-2 border-black">
                        <img src="../images/produtos/razer.png" />
                    </div>
                </div>
                <div className="flex items-center">
                    <button>PREVIOS</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;