import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import React from 'react';
import Login from './Components/Login/Login.jsx';
import FormRegister from './Components/FormRegister/FormRegister.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from '../src/UI/Pages/NotFound/NotFound';
import MainPage from './UI/Pages/MainPage';
import Reports from './Components/Reports/Reports.jsx';
import PriceAverage from './Components/PriceAverage/PriceAverage.jsx';
import BannerPropaganda from './Components/Banner/BannerPropaganda';
import BrandButton from './Components/BrandButton/BrandButton';
import CardListProduct from './Components/CardListProduct/CardListProduct';
import CardTrendProduct from './Components/CardTrendProduct/CardTrendProduct';
import CarouselMainPage from './Components/CarouselMainPage/CarouselMainPage';
import CarouselProducts from './Components/CarouselProducts/CarouselProducts';
import CathegoryNavAside from './Components/CathegoryNavAside/CathegoryNavAside';
import DiscountList from './Components/DiscountList/DiscountList';
import SearchResultProducts from './Components/SearchResultProducts/SearchResultProducts';
import ProdutosPesquisados from './Components/ProdutosPesquisados/ProdutosPesquisados';


export default function Routes() {
    return (
        <Router>
            <Switch>
            
                <Route path="/Login" component={Login} />
                <Route path="/FormRegister" component={FormRegister} />
                <Route path="/Reports" component={Reports} />
                <Route path="/MainPage" component={MainPage} />
                <Route path="/PriceAverage" component={PriceAverage} />
                <Route path="/BannerPropaganda" component={BannerPropaganda} />
                <Route path="/BrandButton" component={BrandButton} />
                <Route path="/CardListProduct" component={CardListProduct} />
                <Route path="/CardTrendProduct" component={CardTrendProduct} />
                <Route path="/CarouselMainPage" component={CarouselMainPage} />
                <Route path="/CarouselProducts" component={CarouselProducts} />
                <Route path="/DiscountList" component={DiscountList} />
                <Route path="/CathegoryNavAside" component={CathegoryNavAside} />
                <Route path="/SearchResultProducts" component={SearchResultProducts} />
                <Route path="/ProdutosPesquisados" component={ProdutosPesquisados} />
                <Route path="*" component={NotFound} />

                
            </Switch>
        </Router>
    )
} 



