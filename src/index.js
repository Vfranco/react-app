import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/* const element = React.createElement('p', null, 'Hola Mundo React!');
const MyElement = () => <p>Hola Mundo JSX!</p>

const Li = ({ children, estado, cedula }) => {
  return (
    <li>{children} {estado}</li>
  )
}

const MyUnOrderedList = () =>
  <ul>
    <Li estado={'Franco'} cedula={'92549942'}>Victor</Li>
    <Li estado={'Rios'}>Katia</Li>
    <Li estado={'Franco'}>Sara</Li>
  </ul>

ReactDOM.render(<MyUnOrderedList />, document.getElementById('root')); */

reportWebVitals();
