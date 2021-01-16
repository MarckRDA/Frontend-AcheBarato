import { Card } from "react-bootstrap";
import PriceCharts from "./Charts/PriceCharts.jsx"
import { CardCharts, CardChartsBody, CardInformationProduct, TitleProduct } from "./PriceAverage";
import TechnicalInformation from "../TecnicalInformation/TechnicalInformation.jsx";
import SearchResultProducts from "../SearchResultProducts/SearchResultProducts";
import Menu from "../Menu";
import VerticalTabs from '../AsideMenu/VerticalTabs';

const PriceAverage = () => {
  return (
    <>

      <Menu />
      <CardCharts>
        <VerticalTabs />
        <CardChartsBody>
          <TitleProduct>Price Variation</TitleProduct>
          {/* <PriceCharts /> */}
        </CardChartsBody>
      </CardCharts>
      {/* fazer pagina de produtos com menu estilizado */}
      <CardInformationProduct>
        <CardChartsBody>
          <span class="title-product">Product</span>
          {/* <TechnicalInformation /> */}
        </CardChartsBody>
      </CardInformationProduct>
      <CardInformationProduct>
        <CardChartsBody>
          <span class="title-product">Product</span>
          {/* <SearchResultProducts /> */}
        </CardChartsBody>
      </CardInformationProduct>
      
    </>
  );
};

export default PriceAverage;

