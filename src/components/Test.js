import { userEffect, useState } from "react";

function Test() {
    const [count, setCount] = useState(1);
    const [preco, setPreco] = useState({
        "preco": 154.00
    });
    
    
    return (
        <div>
            <h1> R$ {preco.preco * count} </h1>
            <button onClick={() => { setCount(count +1) }}> ++ </button>
            <button onClick={() => { setCount(count -1) }}> -- </button>
        </div>
    )
}


export default Test;