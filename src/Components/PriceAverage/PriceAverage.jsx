import { useState} from "react";
import axios from "axios";
import {useEffectOnce} from 'react-use';
import {useLocation} from 'react-router';
import { Container, Row } from "react-bootstrap";
import MenuSearchBar from "../MenuSearchBar";
import MenuAside  from "../MenuAside/index";
import Footer from "../Footer/Footer.jsx";
import ProdutosPesquisados from "../ProdutosPesquisados/ProdutosPesquisados";
import usePriceFilter from "../../Context/hooks/usePriceFilter";

const PriceAverage = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { priceMin } = usePriceFilter();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let urlParams = useQuery();

  useEffectOnce(() => {
    async function loadProducts() {
      const response = await axios.get(
        `https://localhost:5001/achebarato/products?Search=${urlParams.get('search')}&MinPrice=${priceMin}`
      );

      setProducts(response.data);
      setIsLoaded(true);
    }

    loadProducts();
  });
  
 
 
  return (
    <div class="menu ">
      <MenuSearchBar />
      <Container  fluid>
        <Row style={{marginTop:'10px'}}>
          <aside class="animate-right">
            <MenuAside/>
          </aside>
          {isLoaded ? <ProdutosPesquisados
            products={products}
          /> : <h1>Loading</h1>}
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default PriceAverage;
