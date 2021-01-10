import { Card, Row, Col } from "react-bootstrap";
import PriceCharts from "./Charts/PriceCharts.jsx"



const PriceAverage = () => {
  return (
    <Card>
      <Card.Header>
        <h3 class="container">Histórico de preços</h3>
      </Card.Header>
      <Card.Body>
        <p>Variação gráfica do preço</p>
        <PriceCharts />
      </Card.Body>
    </Card>
  );
};

export default PriceAverage;