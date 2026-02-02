import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
