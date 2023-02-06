import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <CounterApp value={10} />
  </React.StrictMode>,
);
