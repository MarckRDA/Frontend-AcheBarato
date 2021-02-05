import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import MenuSearchBar from "../MenuSearchBar";
import MenuAside from "../MenuAside/index";
import Footer from "../Footer/Footer.jsx";
import ProdutosPesquisados from "../ProdutosPesquisados/ProdutosPesquisados";
import ReactLoading from "react-loading";

const PriceAverage = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99999);
  const [ordering, setOrdering] = useState(" ");

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let urlParams = useQuery();

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get(
        `https://localhost:5001/achebarato/products?Search=${urlParams.get(
          "search"
        )}&MinPrice=${minPrice}&MaxPrice=${maxPrice}&OrderBy=${ordering}`
      );

      setProducts(response.data);
      setIsLoaded(true);
    }

    loadProducts();
  }, [minPrice, maxPrice, ordering]);

  const handlerFilters = (minprice, maxprice, orderBy) => {
    setMinPrice(minprice);
    setOrdering(orderBy);
    setMaxPrice(maxprice);
  };

  return (
    <div class="menu ">
      <MenuSearchBar />
      <Container fluid>
        <Row style={{ marginTop: "10px" }}>
          <aside class="animate-right">
            <MenuAside onChangeFilters={handlerFilters} />
          </aside>
          {isLoaded ? (
            <ProdutosPesquisados products={products} />
          ) : (
            <Col xl={10} xs={10} style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}>
            <ReactLoading
              type="balls"
              color="#ff6633"
              height={200}
              width={200}
            />
            </Col>
          )}
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default PriceAverage;
