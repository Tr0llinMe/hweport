import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/js/dist/collapse'; 
import 'bootstrap/js/dist/dropdown';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
