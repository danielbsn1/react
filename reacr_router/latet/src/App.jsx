import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from "./componentes/NavBar";

function App() {
  return (
    <>
     <div className='App'>
      <Navbar />
      < Outlet />

     </div>
    </>
  )
}

export default App
