import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';

import App from './app';

ReactDOM.render(
  <Provider store={ store }>
    <div className='wrapper'>
      <App />
    </div> 
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
