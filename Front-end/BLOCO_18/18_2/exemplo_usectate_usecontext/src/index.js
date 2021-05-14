import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppFunction';
import Provider from './Provider'; //adiciono o Provider à aplicação

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
