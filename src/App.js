import Button from "./Button";

const App = () => {
    return (
        <div>
            <h1>Hola Mundo</h1>
            <Button onClick={ () => alert('clikeado!') }>Enviar</Button>
        </div>
    )
}

export default App;