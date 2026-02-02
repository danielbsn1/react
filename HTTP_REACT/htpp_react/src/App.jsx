import { useState } from 'react'
import './App.css'
import productsData from '../data/db.json'

function App() {
  const [products, setProducts] = useState(productsData.products)

  // 2 envio de dados
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    const URL = 'http://localhost:3000/products' 
    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price })
      })
      const data = await res.json()
      console.log('Produto criado:', data)
      setProducts((prev) => [...prev, data])
      setName('')
      setPrice('')
    } catch (error) {
      console.error('Erro ao enviar produto:', error)
    }
  }
 



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
      {/* 2 envio de dados  */}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <span>Preço</span>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <button type="submit">Adicionar</button>
        </form>

      </div>
    </div>
  )
}

export default App
