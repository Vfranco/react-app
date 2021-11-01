//import logo from './logo.svg';
import './App.css';

const estiloTwo = {
  boxShadow : '0 5px 3px rgba(0,0,0,0.1)'
}

const estilo = (bg = '#333') => ({
  backgroundColor : bg,
  color: '#fff',
  padding : '10px 15px'
})

const Li = ({children}) => {
  return(
    <li className="clase-li" style={{...estiloTwo, ...estilo()}}>{children}</li>
  )
}

//Esta es la declaracion de un componente
const App = () => {
  //Siempre debe retornar algo, asi sea vacio
  //const valor = 'triste'; // Un equivalente a interpolación
  return (
    <ul className="clase-css">
      <Li estado="feliz">Valor de li</Li>
    </ul>
  );
}

export default App;
