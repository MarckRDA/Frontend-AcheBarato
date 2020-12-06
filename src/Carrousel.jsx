import React from "react";
import { Carousel } from "react-bootstrap";
import imagem from "./Logo.png";

function Carrousel() {
  return (
    <Carousel style={{marginBottom:"100px"}}>
      <Carousel.Item>
        <img
          height="360px"
          className="d-block w-100"
          src={imagem}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Promoção 1</h3>
          <p>Alguma descrição</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="360px" className="d-block w-100" src={imagem} alt="Third slide" />

        <Carousel.Caption>
          <h3>Promoção 2</h3>
          <p>alguma descrição</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height= "360px" className="d-block w-100" src={imagem} alt="Third slide" />

        <Carousel.Caption>
          <h3>Promoção 3</h3>
          <p>
            Alguma Promoção
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
