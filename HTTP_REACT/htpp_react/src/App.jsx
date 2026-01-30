import { useState } from 'react'
import './App.css'
import productsData from '../data/db.json'

function App() {
  const [products] = useState(productsData.products)

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> — <span>R$ {p.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
