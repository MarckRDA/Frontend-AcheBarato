import { Card} from "react-bootstrap";
import PriceCharts from "./Charts/PriceCharts.jsx"
import {CardCharts,CardChartsBody, CardInformationProduct,TitleProduct} from "./PriceAverage";
import TechnicalInformation from "../TecnicalInformation/TechnicalInformation.jsx";
import CathegoryNavAside from "../CathegoryNavAside/CathegoryNavAside";
const PriceAverage = () => {
  return (
    <>
      <Card>
        <Card.Header>
          <h3 class="container">Search History</h3>
        </Card.Header>
      </Card>
      
      <CardCharts>
        <CardChartsBody>
          <TitleProduct>Price Variation</TitleProduct>
          <PriceCharts />
        </CardChartsBody>
      </CardCharts>

      <CardInformationProduct>
        <CardChartsBody>
        <span class="title-product">Product</span>
          <TechnicalInformation />
        </CardChartsBody>
      </CardInformationProduct>
    </>
  );
};

export default PriceAverage;