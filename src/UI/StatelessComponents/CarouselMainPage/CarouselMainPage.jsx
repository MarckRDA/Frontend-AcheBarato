import React from "react";
import { Carousel } from "react-bootstrap";
import Styled from "styled-components";
import imagem from '../../../assets/Logo.png';

const CarouselStyled = Styled(Carousel)`
  margin-bottom: 100px;
`;

function CarouselMainPage() {
  
  return (
    <CarouselStyled>
      <Carousel.Item>
        <img
          height="360px"
          className="d-block w-100"
          src={imagem}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="360px"
          className="d-block w-100"
          src={imagem}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          height="360px"
          className="d-block w-100"
          src={imagem}
          alt="First slide"
        />
      </Carousel.Item>

    </CarouselStyled>
  );
}

export default CarouselMainPage;
