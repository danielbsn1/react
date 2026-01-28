import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirsterComponentes from './componente/FirsterComponentes.jsx'
import logo from './assets/logo.png'
import Data from './componente/data.jsx'
import ListaRender from './componente/ListaRender.jsx'
import CarDetails from './componente/cardetails.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <h1>Fundamentos</h1>
        <img src="./assets/logo.png" alt="logo" />
        <FirsterComponentes />
        <Data />
        <ListaRender />
        <CarDetails brand="Ford" km={100000} color="Vermelho" />
    </div>
    </>
  )
}
 
export default App
