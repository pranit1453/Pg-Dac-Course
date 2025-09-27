import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Factorial from './factorial';
import Calculator from './calculator';
import CalOpeartion from './cal';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Factorial number={5} />
   <Calculator num1={25} num2={5}/>
   <CalOpeartion num1={35} num2={5} Operation="divide"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
