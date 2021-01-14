import { Card, Row, Col, Button } from "react-bootstrap";

const CardListProduct = (props) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row>
          <Col xs={3} className="justify-content-start">
            <p>{props.productName}</p>
          </Col>
          <Col xs={4} className="justify-content-center ml-auto">
            <h4>{props.productPrice}</h4>
          </Col>
          <Col xs={3}>
            <Button variant='primary'>Link para Loja</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardListProduct;