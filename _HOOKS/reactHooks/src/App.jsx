import './App.css'
import { Link, Outlet } from 'react-router-dom'
import HookUseState from './componentes/HookUserStat'




function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default App