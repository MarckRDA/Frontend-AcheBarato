import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './MainPage';
import NavegacaoLateral from './NavegacaoLateral';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
      <Route path="/App" exact={true} component={App} />
      <Route path="/MainPage" exact={true} component={MainPage} />
      <Route path="/NavegacaoLateral" component={NavegacaoLateral} />
      <Route path="/PrimarySearchAppBar" component={Primary} />
      <Route path="/NavegacaoLateral" component={NavegacaoLateral} />
      <Route path="/NavegacaoLateral" component={NavegacaoLateral} />
      <Route path="/NavegacaoLateral" component={NavegacaoLateral} />

  </Switch>
</ BrowserRouter>

, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
