import { useState, useEffect } from "react";
import {
  getSearchedProducts, 
  postUserPreferences
} from "../../services/api.js";
import { useLocation } from "react-router";
import useAuth from '../../Context/hooks/useAuth';
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

//  const { isAuthenticated } = useAuth();


  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let urlParams = useQuery();

  const search = urlParams.get("search");

  async function loadProducts() {
    const response = await getSearchedProducts({
      search,
      minPrice,
      maxPrice,
      ordering,
    });
    setProducts(response.data.data);
    setIsLoaded(true);
  }
 
  useEffect(() => {

    loadProducts();
  }, [minPrice, maxPrice, ordering]);

  // useEffect(() => {
  //   function getUserPreference() {
  //     postUserPreferences( search );
  //   }
    
  //   if (isAuthenticated) {
  //     getUserPreference(search);
  //   }

  // });

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
            <Col
              xl={10}
              xs={10}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            >
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
