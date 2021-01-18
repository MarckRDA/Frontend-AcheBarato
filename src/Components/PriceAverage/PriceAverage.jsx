import { Card } from "react-bootstrap";
import PriceCharts from "./Charts/PriceCharts.jsx"
import { CardCharts, CardChartsBody, CardInformationProduct, TitleProduct } from "./PriceAverage";
import CardResultProducts from "../CardResultProducts/CardResultProducts.jsx";
import Menu from "../Menu";
import { MenuAside } from '../PriceAverage/PriceAverage';
import Footer from '../Footer/Footer.jsx';
import CarouselProducts from "../CarouselProducts/CarouselProducts.jsx";


const PriceAverage = () => {
  return (
    <>
      <body class="price-average">
        <div class="menu">
          <Menu />
I       <div>
  <div>
  <CarouselProducts trendingProducts={[
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
  </div>
            <aside class="animate-right">
              <MenuAside />
            </aside>
          </div>
          <Footer />
        </div>
      
       
      </body>
      
      
    </>
  );
};

export default PriceAverage;

