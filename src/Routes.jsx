import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import Login from "./Components/Login/Login.jsx";
import SignUp from "./Components/FormRegister/SignUp.jsx";
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFound from "../src/UI/Pages/NotFound/NotFound";
import MainPage from "./UI/Pages/MainPage";
import Reports from "./Components/Reports/Reports.jsx";
import PriceAverage from "./Components/PriceAverage/PriceAverage.jsx";
import BannerPropaganda from "./Components/Banner/BannerPropaganda";
import BrandButton from "./Components/BrandButton/BrandButton";
import CardListProduct from "./Components/CardListProduct/CardListProduct";
import CardTrendProduct from "./Components/CardTrendProduct/CardTrendProduct";
import CarouselMainPage from "./Components/CarouselMainPage/CarouselMainPage";
import CarouselProducts from "./Components/CarouselProducts/CarouselProducts";

import DiscountList from "./Components/DiscountList/DiscountList";
import SearchResultProducts from "./Components/SearchResultProducts/SearchResultProducts";
import ProdutoEscolhido from "./UI/Pages/ProdutoEscolhido";
import ProdutosPesquisados from "./Components/ProdutosPesquisados/ProdutosPesquisados";
import PriceCharts from "./Components/PriceAverage/Charts/PriceCharts.jsx";
import MainPageProfile from "./Components/PageProfile/MainPageProfile.jsx";
import App from "./App";

export default function Routes() {
  return (
    //configurando a autenticação para obter as rotas
    <BrowserRouter>
      <Switch>
    
        <Route exact path="/" component={MainPage} />
        <Route path="/Login" component={Login} />

        <Route path="/SignUp" component={SignUp} />
        <Route path="/Reports" component={Reports} />
        <Route path="/MainPage" component={MainPage} />
        {/* <Route exact path="/PriceAverage/:id" children={<PriceAverage/>}/> */}
        
        <Route path="/PriceAverage"><PriceAverage /></Route>
        <Route
          path="/ProdutoEscolhido/:id"
          children={<ProdutoEscolhido />}
        />
        <Route path="/BannerPropaganda" component={BannerPropaganda} />
        <Route path="/BrandButton" component={BrandButton} />
        <Route path="/CardListProduct" component={CardListProduct} />
        <Route path="/CardTrendProduct" component={CardTrendProduct} />
        <Route path="/CarouselMainPage" component={CarouselMainPage} />
        <Route path="/CarouselProducts" component={CarouselProducts} />
        <Route path="/DiscountList" component={DiscountList} />
        <Route path="/SearchResultProducts" component={SearchResultProducts} />
        <Route path="/ProdutosPesquisados" component={ProdutosPesquisados} />
        <Route path="/MainPageProfile" component={MainPageProfile} />

        <Route path="/PriceCharts" component={PriceCharts} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
