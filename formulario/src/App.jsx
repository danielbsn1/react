import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './componentes/MyForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Formulario em react</h1>
        <MyForm  userName="matheus" email="matheus@gmail"/>

      </div>
        
    </>
  )
}

export default App
