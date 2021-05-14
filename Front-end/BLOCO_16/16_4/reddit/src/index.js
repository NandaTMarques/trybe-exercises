import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './screen/search-on-reddit';
import store from './store/index.store';


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
