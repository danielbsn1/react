import { useState } from "react";


const HookUseState = () => {

    let userName = "joao"
    const [name, setName] = useState("matheus");

    const changeNames = () => {
      
        setName("maria");

    const [age, setAge] = useState (18);


    };

    return (
        <div>
            <h2>useState</h2>
            <p>variavel :{userName} </p>
            <p>userState:{setName}</p>
            <p>variaveli: {name}</p>
            <button onClick={changeNames}>Mudar o nomes</button>
            <form >
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>

                <output>{age}</output>

                <input type="submit" value="enviar"/>

                <input type="reset" value="limpar"/>

                <input type="button" value="botao"/>

            </form>
        </div>
    );
};

export default HookUseState;