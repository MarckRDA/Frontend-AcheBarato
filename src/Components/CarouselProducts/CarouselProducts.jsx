import React, {useEffect, useState} from "react";
import {
  CarouselItem,
  Carousel,
  Container,
  Row,
} from "react-bootstrap";
import axios from 'axios';
import CardTrendProduct from "../CardTrendProduct/CardTrendProduct";

// ToDo: Fix dynamic carousel

function CarouselProducts() {
  
  const [products, setProducts] = useState([]);
 
 useEffect(() => {
   async function loadBooks() {
     const response = await axios.get('https://localhost:5001/achebarato/products?Search=games');
 
     setProducts(response.data);
   }
 
   loadBooks();
 }, []);

 console.log(products)
  
 const CardsTrendsProdutcs = products.map((product) => (
    <CardTrendProduct
      key={product.id_product}
      productName={product}
      // productDescription={rest.description}
    />  
  ));


  const cards = [1, 1, 1, 1, 1, 1, 1].map((n) => (
    <CarouselItem key={n.toString()}>
      <Container>
        <Row className="ml-auto mr-auto mb-3">{CardsTrendsProdutcs}</Row>
      </Container>
    </CarouselItem>
  ));

  return (
    <Container style={{ margin: "auto" }}>
      <h1>Ofertas de eletronicos</h1>
      <Carousel>{cards}</Carousel>
      <h1>Ofertas de Computadores</h1>
      <Carousel>{cards}</Carousel>
      <h1>Oferta em roupas</h1>
      <Carousel>{cards}</Carousel>
    </Container>
  );
}

export default CarouselProducts;
