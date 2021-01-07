import React from "react";
import CarouselProdutos from "../../Components/CarouselProducts/CarouselProducts";
import CarouselMainPage from '../../Components/CarouselMainPage/CarouselMainPage';
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import BannerPropaganda from "../../Components/Banner/BannerPropaganda";
import './MainPageStyles/MainPageStyles.css';

function MainPage() {
  return (
    <div >
      <NavigationBar
        variant="dark"
        optionsMenu={["maros", "dashbs", "hbahab"]}
      />
      <BannerPropaganda />
      <CarouselMainPage/>
      <CarouselProdutos trendingProducts={[
    { name: "cyberpunk", description: "xsxs", category:"eletronicos" },
    { name: "shbah", description: "dsjbasj", category:"eletronicos" },
    { name: "ssjnjn", description: "kmdskmd", category:"eletronicos" },
    { name: "hbahasa", description: "dkdmskmd", category:"eletronicos" },
    { name: "hbahasa", description: "dkdmskmd", category:"roupas" },
    { name: "hbahasa", description: "dkdmskmd", category:"roupas" },
    { name: "hbahasa", description: "dkdmskmd", category:"roupas" },
    { name: "hbahasa", description: "dkdmskmd", category:"roupas" },
    { name: "hbahasa", description: "dkdmskmd", category:"computadores" },
    { name: "hbahasa", description: "dkdmskmd", category:"computadores" },
    { name: "hbahasa", description: "dkdmskmd", category:"computadores" },
    { name: "hbahasa", description: "dkdmskmd", category:"computadores" }
  ]}/>
    </div>
  );
}

export default MainPage;
