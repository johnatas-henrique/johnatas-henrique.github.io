import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PortfolioProvider } from './context/Portfolio';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// serviceWorker.unregister();
