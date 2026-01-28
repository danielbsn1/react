import { useState } from "react";

const ListaRender = () => {
    const [list] = useState (["Matheus", "João", "Maria", "Ana"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 27},
        {id: 2, name: "João", age: 23},
        {id: 3, name: "Maria", age: 21},
        {id: 4, name: "Ana", age: 25}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4) ;

        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== randomNumber));
    }
    
    const [number, setNumber] = useState([1,2,3,4,5]);




    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    );
};

export default ListaRender;