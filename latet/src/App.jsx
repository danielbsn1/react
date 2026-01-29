import { Children, Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirsterComponentes from './componente/FirsterComponentes.jsx'
import logo from './assets/logo.png'
import Data from './componente/data.jsx'
import ListaRender from './componente/ListaRender.jsx'
import CarDetails from './componente/CarDetails.jsx'
import './componente/fragment.jsx'
import container from './componente/container.jsx'
import ExecutionFunction from './componente/ExecuteFunction.jsx'
import Message from './componente/message.jsx'
import ChangeMessagem from './componente/ChangeMessagem.jsx'



function App() {
  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <>
      <div>
        <h1>Fundamentos</h1>
        <img src="./assets/logo.png" alt="logo" />
        <FirsterComponentes />
        <Data />
        <ListaRender />
        <CarDetails brand="Ford" km={100000} color="Vermelho" />
        <Fragment>
          <div>
            <h2>temos 2 elementos pai</h2>
          </div>
          <div>
            <h2>mas sem adicionar mais nós na DOM</h2>
          </div>
        </Fragment>
        <container>
          <div>
            <h1>Este é o container</h1>
            <p>Esse é o conteúdo</p>
          </div>
        </container>
        <ExecutionFunction myFunction={showMessage} />
        <Message msg={message} />
        <ChangeMessagem handleMessage={handleMessage} />
    </div>
    </>
  )
}
 
export default App
