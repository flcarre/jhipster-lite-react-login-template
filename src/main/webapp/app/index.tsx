import React from 'react';
import ReactDOM from 'react-dom';
import { IconlyProvider } from 'react-iconly';

import App from './common/primary/app/App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <IconlyProvider set="bulk" primaryColor="blue" secondaryColor="blue" stroke="bold" size="xlarge">
      <App />
    </IconlyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
