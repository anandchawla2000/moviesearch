import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Appprovider} from './Components/context';
import './CSS/index.css';
import './CSS/media.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appprovider>
    <App />
    </Appprovider>
  </React.StrictMode>
);

