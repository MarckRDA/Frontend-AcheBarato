import { Card } from "react-bootstrap";
import PriceCharts from "./Charts/PriceCharts.jsx"
import { CardCharts, CardChartsBody, CardInformationProduct, TitleProduct } from "./PriceAverage";
import CardResultProducts from "../CardResultProducts/CardResultProducts.jsx";
import Menu from "../Menu";
import { MenuAside } from '../PriceAverage/PriceAverage';
import Footer from '../Footer/Footer.jsx';


const PriceAverage = () => {
  return (
    <>
      <body class="price-average">
        <div class="menu">
          <Menu />
I       <div>
            <aside class="animate-right">
              <MenuAside />
            </aside>
          </div>
          <Footer />
        </div>
        <div class="technical-info">
          <article>
            <CardResultProducts/>
          </article>
        </div>
      </body>
      
    </>
  );
};

export default PriceAverage;

