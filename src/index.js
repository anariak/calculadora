import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Calculator';

ReactDOM.render(
  <React.StrictMode>
    <Calculator initialValue={0}/>
  </React.StrictMode>,
  document.getElementById('root')
);