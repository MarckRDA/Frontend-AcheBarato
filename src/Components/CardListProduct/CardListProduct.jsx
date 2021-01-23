import { Card, Row, Col, Button } from "react-bootstrap";

const CardListProduct = (props) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row>
          <Col xs={3}>
            <Card.Img src={props.productImg} style={{ width: 90 }} />
          </Col>
          <Col xs={3} className="justify-content-start">
            <p>{props.productName}</p>
          </Col>
          <Col xs={3} className="justify-content-center ml-auto">
            <h4>R$ {parseFloat(props.productPrice)}</h4>
          </Col>
          <Col xs={3}>
            <a href={props.productLinkRedirec}>
              <Button variant="primary">Link para Loja</Button>
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardListProduct;
