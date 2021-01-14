import { Nav, Accordion, Button, Badge } from "react-bootstrap";

const CathegoryNavAside = () => {
  return (
    <>
      
      <Nav.Link>serei uma categoria</Nav.Link>
      <Nav.Link>serei uma categoria</Nav.Link>
      <Nav.Link>serei uma categoria</Nav.Link>
      <Nav.Link>serei uma categoria</Nav.Link>
      <Accordion defaultActiveKey="1">
        <Accordion.Collapse eventKey="0">
          <Nav.Link>serei uma categoria</Nav.Link>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="0">
          <Nav.Link>serei uma categoria</Nav.Link>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="0">
          <Nav.Link>serei uma categoria</Nav.Link>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="0">
          <Nav.Link>serei uma categoria</Nav.Link>
        </Accordion.Collapse>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <Badge variant="light">ver mais 4 categorias</Badge>
        </Accordion.Toggle>
      </Accordion>
    </>
  );
};

export default CathegoryNavAside;