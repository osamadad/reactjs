import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Container, Header, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick.css";
import '../node_modules/magnific-popup/dist/magnific-popup.css';
import "../node_modules/react-datepicker/dist/react-datepicker.css";
import './assets/css/animate.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/flaticon.css';
import './assets/css/default.css';
import './assets/css/style.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('miranda')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
