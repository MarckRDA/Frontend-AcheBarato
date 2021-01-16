import React from "react";
import CarouselProdutos from "../../Components/CarouselProducts/CarouselProducts";
import CarouselMainPage from '../../Components/CarouselMainPage/CarouselMainPage';
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import BannerPropaganda from "../../Components/Banner/BannerPropaganda";
import Navbarmenu from "../../Components/Menu";
import SearchBar from "../../Components/SearchBar/SearchBar.jsx"
import {JumbotronStyled} from "./MainPageStyles/mainpagesstyles";
import Footer from '../../Components/Footer/Footer.jsx';

function MainPage() {
  return (

    <>
      <div class="menu-bar">
        <Navbarmenu />
      </div>
      {/* <BannerPropaganda /> */}
      <CarouselMainPage />
      <JumbotronStyled>
      <SearchBar/>
      </JumbotronStyled>
      
     <Footer/>
    </>
    
  );
}


export default MainPage;
