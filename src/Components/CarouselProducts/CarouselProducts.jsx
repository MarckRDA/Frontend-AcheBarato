import React, { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import {
  getTrendProducts,
  // getTrendProductsByUserPreferences,
} from "../../services/api.js";
// import useAuth from "../../Context/hooks/useAuth";
import ReactLoading from "react-loading";
import CardTrendProduct from "../CardTrendProduct/CardTrendProduct";
import Carousel from "react-elastic-carousel";

function CarouselProducts() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // const [
  //   trendsProductUserPreferences,
  //   setTrendsProductUserPreferences,
  // ] = useState([]);
  // const { isAuthenticated, user } = useAuth();
  // const [isUserPreferenceLoaded, setIsUserPreferenceLoaded] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const response = await getTrendProducts();
      setProducts(response.data);
    }

    setIsLoaded(true);
    loadProducts();
  }, []);

  // useEffect(() => {
  //   const lastUserSearched = isAuthenticated
  //     ? [user.searchTags[user.searchTags.length - 1]]
  //     : [];

  //   async function TrendProductsBasedOnUserPreferences() {
  //     const response = await getTrendProductsByUserPreferences(
  //       lastUserSearched[lastUserSearched.length - 1]
  //     );
  //     setTrendsProductUserPreferences(response.data);
  //   }

  //   TrendProductsBasedOnUserPreferences();
  //   setIsUserPreferenceLoaded(true);
  // }, []);

 console.log(products);
  return (
    <Container style={{ margin: "auto" }}>
      {!isLoaded ? (
        <Col
          xl={10}
          xs={10}
          style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
        >
          <ReactLoading type="balls" color="#ff6633" height={200} width={200} />
        </Col>
      ) : (
        <>
          <h1 className="h1">Trends em Consoles</h1>
          <Carousel itemsToShow={4}>
            {products.map((product) => {
              if (product.cathegory.name === "Consoles") {
                return (
                  <CardTrendProduct
                    key={product.id_product}
                    productName={product.name}
                    productPrice={product.price}
                    productThumbImage={product.thumbImgLink}
                    productId={product.id_product}
                  />
                );
              }
            })}
          </Carousel>
          <h1 className="h1">Trends em Celulares</h1>
          <Carousel itemsToShow={4}>
            {products.map((product) => {
              if (product.cathegory.name === "Celulares e Smartphones") {
                return (
                  <CardTrendProduct
                    key={product.id_product}
                    productName={product.name}
                    productPrice={product.price}
                    productThumbImage={product.thumbImgLink}
                    productId={product.id_product}
                  />
                );
              }
            })}

          </Carousel>
          <h1 className="h1">Trends em Geladeiras</h1>
          <Carousel itemsToShow={4}>
            {products.map((product) => {
              if (product.cathegory.name === "Geladeiras") {
                return (
                  <CardTrendProduct
                    key={product.id_product}
                    productName={product.name}
                    productPrice={product.price}
                    productThumbImage={product.thumbImgLink}
                    productId={product.id_product}
                  />
                );
              }

            })}
          </Carousel>
          <h1 className="h1">Trends em Ar Condicionado</h1>
          <Carousel itemsToShow={4}>
            {products.map((product) => {
              if (product.cathegory.name === "Ar Condicionado") {
                return (
                  <CardTrendProduct
                    key={product.id_product}
                    productName={product.name}
                    productPrice={product.price}
                    productThumbImage={product.thumbImgLink}
                    productId={product.id_product}
                  />
                );
              }

            })}
          </Carousel>{" "}
        </>
      )}
    </Container>
  );
}

export default CarouselProducts;
