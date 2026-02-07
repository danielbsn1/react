import { useEffect, useState } from "react";

const HookUseEffect = () => {
   
    useEffect(() => {
        console.log('useEffect');
        
    }, []);

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };



    return (
        <div>
            <h2>useEffect</h2>
            <p>number: {Number}</p>
            <button onClick={changeSomething}>Executar</button>
        </div>
    )
};

export default HookUseEffect;