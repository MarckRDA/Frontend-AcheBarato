import { Accordion, Button, Badge } from "react-bootstrap";
import { NavStyles } from "./CathegoryStyles.js";
import SliderPrices from "../SliderBarPrices/SlidePrices.jsx";
import { Link, BrowserRouter } from "react-router-dom";

const CathegoryNavAside = () => {
  return (
    <>
    <BrowserRouter forceRefresh={true}>
      <Link to="/PriceAverage/Consoles">
      serei uma categoria
      </Link>
      <NavStyles.Link>serei uma categoria</NavStyles.Link>
      <NavStyles.Link>serei uma categoria</NavStyles.Link>
      <NavStyles.Link>serei uma categoria</NavStyles.Link>
      <Accordion defaultActiveKey="1">
        <Accordion.Collapse eventKey="0">
          <NavStyles.Link>serei uma categoria</NavStyles.Link>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="0">
          <NavStyles.Link>serei uma categoria</NavStyles.Link>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="0">
          <NavStyles.Link>serei uma categoria</NavStyles.Link>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="0">
          <NavStyles.Link>serei uma categoria</NavStyles.Link>
        </Accordion.Collapse>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <Badge variant="primary">Ver mais</Badge>{" "}
        </Accordion.Toggle>
      </Accordion>
      <SliderPrices />
      </BrowserRouter>
    </>
  );
};

export default CathegoryNavAside;
