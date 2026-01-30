import {useState, useEffect} from 'react'

//custom hook

const  [data, setData] = useState (null)

useEffect (() => {

    const fetData = async () => {
        const res = await fetch ('http://localhost:3000/products')
        const data = await res.json()
        setData(JSON)
    };

      fetchData();
}, [url]);

return {data};
