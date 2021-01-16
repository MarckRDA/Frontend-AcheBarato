import { Card } from "react-bootstrap";
import PriceCharts from "./Charts/PriceCharts.jsx"
import { CardCharts, CardChartsBody, CardInformationProduct, TitleProduct } from "./PriceAverage";
import TechnicalInformation from "../TecnicalInformation/TechnicalInformation.jsx";
import SearchResultProducts from "../SearchResultProducts/SearchResultProducts";
import Menu from "../Menu";
import {MenuAside} from '../PriceAverage/PriceAverage';


const PriceAverage = () => {
  return (
    <>

      <Menu/>
      <div>
        <MenuAside/>
      </div>
    </>
  );
};

export default PriceAverage;

