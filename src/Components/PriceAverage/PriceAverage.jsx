import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from 'react-router';
import { Container, Row } from "react-bootstrap";
import MenuSearchBar from "../MenuSearchBar";
import { MenuAside } from "../PriceAverage/PriceAverage";
import Footer from "../Footer/Footer.jsx";
import ProdutosPesquisados from "../ProdutosPesquisados/ProdutosPesquisados";

const PriceAverage = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let {search} = useParams();

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get(
        `https://localhost:5001/achebarato/products?Search=${search}`
      );

      setProducts(response.data);
      setIsLoaded(true);
    }

    loadProducts();
  }, []);

 
  return (
    <div class="menu ">
      <MenuSearchBar />I{" "}
      <Container fluid>
        <Row>
          <aside class="animate-right">
            <MenuAside />
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
