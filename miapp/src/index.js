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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//comandos para la instalacioón de storybook
1.-debes tener instalado npm y Node.js
2.-poner el terminal el siguiente codigo: npx create-react-app "nombredelproyecto"
3.-entramos a la carpeta del nombre del proyecto creado "miapp" y lo abrimos con code .
4.-entramos otra vez en la terminal y ponemos: npx -p @storybook/cli sb init.
5.- para verlo en el navegador ponemos: npm run storybook.
