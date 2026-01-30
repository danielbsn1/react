import "./MyForm.css";
import { useState } from "react";

const MyForm = (userName, userEmail) => {
 // 3 gerenciamento de dados 
 const [name, setName] = useState();
 const [email, setEmail] = useState();
 const [bio, setBio] = useState();

 const handleName  = (e) => {
    setName(e.target.value);
 };
   console.log (name, userEmail);

   // 5 envio de form
   const handleSubmit = (e) => {
    e.preventDefault();

    console.log ("enviando o form");

    // 7 limpar form
      setName("");
      setEmail("");



   };
   

  return <div>
    {/* 1 criação de form */}
    { /* 5 envio  de form */}
    <form onSubmit={handleSubmit}>
        <div>
           <label label htmlFor="name">Name:</label>
           <input type="text" name="name" placeholder="Digite seu nome "
            onChange={handleName}
            // 6 controle de input
            value={name || ""}
            />

        </div>
        {/* 2 label envolvendo input */}
        <label >
            <span>E-mail</span>
            <input type="email" name="email" placeholder="Digite seu email" onChange={e => setEmail (e.target.value)}  />
        </label>
        <input type="submit" value="enviar" />
    </form>
  </div>
};

  export default MyForm;
