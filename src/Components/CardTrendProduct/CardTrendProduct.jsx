import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

const CardStyled = styled(Card)`
    width:15rem;
    margin:10px
`;

const CardTrendProduct = (props) => {
  
  
  return (
    <CardStyled>
      <Card.Img variant="top" src={props.productName.thumbImgLink} />
      <Card.Body>
        <Card.Title>{props.productName.name}</Card.Title>
        {/* <Card.Text>{props.productDescription}</Card.Text> */}
        <a href={props.productName.linkRedirectShop}><Button variant="primary">Ver Produto</Button></a>
      </Card.Body>
    </CardStyled>
  );
}

export default CardTrendProduct;