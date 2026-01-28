const CarDetails = ({brand,km,color}) => {
    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>marca:{brand}</li>
                <li>Kilometragem{km}</li>
                <li>cor:{color}</li>
            </ul>
        </div>
    )
}
export default cardetails;