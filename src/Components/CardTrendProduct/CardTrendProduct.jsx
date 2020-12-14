import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import l from "../../logo.svg";

const CardStyled = styled(Card)`
    width:15rem;
    margin:10px
`;
const CardTrendProduct = (props) => {
  return (
    <CardStyled>
      <Card.Img variant="top" src={l} />
      <Card.Body>
        <Card.Title>{props.productName}</Card.Title>
        <Card.Text>{props.productDescription}</Card.Text>
        <Button variant="primary">Ver Produto</Button>
      </Card.Body>
    </CardStyled>
  );
};

export default CardTrendProduct;