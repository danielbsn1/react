import { useEffect, useState } from "react";

const HookUseEffect = () => {
   
    useEffect(() => {
        console.log('useEffect');
        
    }, []);

    const [count, setCount] = useState(0);

    const changeSomething = () => {
        setCount(count + 1);
    };

    //arry de pedencia com valores
    useEffect(() => {

        console.log('count foi alterado');

    }, [count]);


    // cleanup de useEffect
    useEffect(() => {

        const myFunction = setTimeout(() => {
            console.log('temporizador');
        }, 1000);

        return () => clearTimeout(myFunction);

    }, []);




    return (
        <div>
            <h2>useEffect</h2>
            <p>number: {Number}</p>
            <button onClick={changeSomething}>Executar</button>

        </div>
    )
};

export default HookUseEffect;