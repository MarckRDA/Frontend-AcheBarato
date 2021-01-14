import { TextareaAutosize } from "@material-ui/core";
import { Card, Row, Col } from "react-bootstrap";
import PriceCharts from "./Charts/PriceCharts.jsx"
import NavigationAside from "../NavigationAside/NavigationAside.jsx";


const PriceAverage = () => {
  return (
    <>
      <h3 class="container">Histórico de preços</h3>
      <table>
        <tr>
          <td>
            <Card>
              <Card.Header>
                <p>Variação gráfica do preço</p>
              </Card.Header>
              <Card.Body>
                <PriceCharts />
              </Card.Body>
            </Card>
          </td>
          <td>
          <NavigationAside/>
          </td> 
        </tr>
      </table>
    </>
  );
};

export default PriceAverage;