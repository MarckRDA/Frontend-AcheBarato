import React, {useState, useEffect} from "react";
import { CarouselItem, Carousel, Container, Row } from "react-bootstrap";
import instanceAxios from "../../axios/axios";
import CardTrendProduct from "../CardTrendProduct/CardTrendProduct";


function CarouselProducts(props) {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function loadBooks() {
      const response = await instanceAxios.get('/trendproducts');
  
      setProducts(response.data);
    }
  
    loadBooks();
  }, []);

  

  const CardsTrendsProdutcs = products.map((product) => (
    <CardTrendProduct
      key={product.id_product.tostring()}
      productName={product.name}
      productThumbImage={product.thumbImgLink}
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
    </Container>
  );
}

export default CarouselProducts;
