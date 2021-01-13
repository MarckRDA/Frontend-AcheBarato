import React from "react";
import CarouselProdutos from "../../Components/CarouselProducts/CarouselProducts";
import CarouselMainPage from '../../Components/CarouselMainPage/CarouselMainPage';
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import BannerPropaganda from "../../Components/Banner/BannerPropaganda";
import Navbarmenu from "../../Components/Menu";
import SearchBar from "../../Components/SearchBar/SearchBar.jsx"
import {JumbotronStyled} from "./MainPageStyles/mainpagesstyles";

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
      <CarouselProdutos trendingProducts={[
        { name: "cyberpunk", description: "xsxs", category: "eletronicos" },
        { name: "shbah", description: "dsjbasj", category: "eletronicos" },
        { name: "ssjnjn", description: "kmdskmd", category: "eletronicos" },
        { name: "hbahasa", description: "dkdmskmd", category: "eletronicos" },
        { name: "hbahasa", description: "dkdmskmd", category: "roupas" },
        { name: "hbahasa", description: "dkdmskmd", category: "roupas" },
        { name: "hbahasa", description: "dkdmskmd", category: "roupas" },
        { name: "hbahasa", description: "dkdmskmd", category: "roupas" },
        { name: "hbahasa", description: "dkdmskmd", category: "computadores" },
        { name: "hbahasa", description: "dkdmskmd", category: "computadores" },
        { name: "hbahasa", description: "dkdmskmd", category: "computadores" },
        { name: "hbahasa", description: "dkdmskmd", category: "computadores" }
      ]} />
    </>
  );
}

export default MainPage;
