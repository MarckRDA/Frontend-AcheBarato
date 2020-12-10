import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './MainPage';
import NavegacaoLateral from './NavegacaoLateral';
import Carrousel from './Carrousel';
import ProdutosPesquisados from './ProdutosPesquisados';
import ProdutoEscolhido from './ProdutoEscolhido';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import SeachPage from './SeachPage';
import CarouselProdutos from './CarouselProdutos';
import NotFoundView from './NotFound';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
      <Route path="/App" exact={true} component={App} />
      <Route path="/MainPage" exact={true} component={MainPage} />
      <Route path="/NavegacaoLateral" component={NavegacaoLateral} />
      <Route path="/PrimarySearchAppBar" component={PrimarySearchAppBar} />
      <Route path="/ProdutoEscolhido" component={ProdutoEscolhido} />
      <Route path="/ProdutosPesquisados" component={ProdutosPesquisados} />
      <Route path="/SeachPage" component={SeachPage} />
      <Route path="/Carrousel" component={Carrousel}/>
      <Route path="/CarouselProdutos" components={CarouselProdutos}/>
      <Route path='*' component={NotFound} />

      

  </Switch>
</ BrowserRouter>

, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
