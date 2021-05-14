import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( // 1. O react chama a funçao render, que busca o App que foi importado acima
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') // 2. e renderizar na tela, onde tem o Id = root, vai pro arquivo
                                  // App.js =>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
