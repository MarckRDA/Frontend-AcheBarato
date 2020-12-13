import React from "react";
import CarouselProdutos from "../../CarouselProdutos";
import CarouselMainPage from '../StatelessComponents/CarouselMainPage/CarouselMainPage';
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import BannerPropaganda from "../StatelessComponents/Banner/BannerPropaganda";

function MainPage() {
  return (
    <div>
      <NavigationBar
        variant="dark"
        optionsMenu={["maros", "dashbs", "hbahab"]}
      />
      <BannerPropaganda />
      <CarouselMainPage/>
      <CarouselProdutos />
    </div>
  );
}

export default MainPage;
