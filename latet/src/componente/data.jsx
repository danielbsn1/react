import { useState } from "react";

const Data = () => {
    let somedata =10;

    const [anotherNumber, setAnotherNumber] = useState(20);

    return (
        <div>
            <div>
            <p>{anotherNumber}</p>
            <button onClick={() => setAnotherNumber ( 25)}>Mudar variavel </button>
            </div>
        </div>
    );
};

export default Data;