import { Card, Row, Col } from "react-bootstrap";

const PriceAverage = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Histórico de preços</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={8}>
            <p>Variação gráfica do preço</p>
          </Col>
          <Col xs={4}>
            <p>painel de criação de alertas</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PriceAverage;