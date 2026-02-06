import { useFetch } from "../hooks/useFetch"

const url = "https://jsonplaceholder.typicode.com/users"

const Home = () => {
    const { data: items, loading, error } = useFetch(url)

    if (loading) return <div>Carregando...</div>
    if (error) return <div>Erro: {error}</div>

    return (
        <div>
            <h1>Página Inicial</h1>
            <p>Bem-vindo à página inicial!</p>
            <ul className="products">
                {items && items.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Home
