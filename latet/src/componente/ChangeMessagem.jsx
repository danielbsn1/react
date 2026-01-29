const ChangeMessagem = ({handleMessage}) => {
    const messages = [
        "Olá, tudo bem?",];

        return (
            <div>
                <button onClick={() => handleMessage(messages[0])}>Enviar mensagem</button>
                <button onClick={() => handleMessage(messages[1])}></button>
                 <button onClick={() => handleMessage(messages[2])}></button>
            </div>
        );
}
export default ChangeMessagem;