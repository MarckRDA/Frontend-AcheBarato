import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import l from '../assets/logotipo.png';


const CardStyled = styled(Card)`
  width:15rem;
  margin:10px
`

const CardTrendProduct = (props) => {
  return (
    <>
    <Card>
      <Card.Img variant="top" src={l} />
      <Card.Body>
        <Card.Title>{props.productName}</Card.Title>
        <Card.Text>{props.productDescription}</Card.Text>
        <Button variant="primary">Ver Produto</Button>
        <Card>

        </Card>
      </Card.Body>
    </Card>
    </>
  );
}

export default CardTrendProduct;