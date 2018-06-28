import React from 'react';
import ReactDOM from 'react-dom';

import ClientRouter from './router/ClientRouter';
import App from './App';

ReactDOM.render(
  <App>
    <ClientRouter />
  </App>,
  document.getElementById('root'),
);
