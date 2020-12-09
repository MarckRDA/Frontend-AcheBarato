import React from "react";
import { Card, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import Carrousel from "./Carrousel";

function ProdutoEscolhido() {
  return (
    <Container className="ml-auto mr-auto">
      <Row>
        <Col xs={6}>
          <Carrousel />
        </Col>
        <Col xs={6} className="align-self-center">
          <h1>Titulo</h1>
        </Col>
      </Row>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col xs={3} className="justify-content-start">
              <p>foto do produto</p>
            </Col>
            <Col xs={4} className="justify-content-center ml-auto">
              <h4>Preço</h4>
            </Col>
            <Col xs={3}>
              <p>Link para loja</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col xs={3} className="justify-content-start">
              <p>foto do produto</p>
            </Col>
            <Col xs={4} className="justify-content-center ml-auto">
              <h4>Preço</h4>
            </Col>
            <Col xs={3}>
              <p>Link para loja</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col xs={3} className="justify-content-start">
              <p>foto do produto</p>
            </Col>
            <Col xs={4} className="justify-content-center ml-auto">
              <h4>Preço</h4>
            </Col>
            <Col xs={3}>
              <p>Link para loja</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col xs={3} className="justify-content-start">
              <p>foto do produto</p>
            </Col>
            <Col xs={4} className="justify-content-center ml-auto">
              <h4>Preço</h4>
            </Col>
            <Col xs={3}>
              <p>Link para loja</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col xs={3} className="justify-content-start">
              <p>foto do produto</p>
            </Col>
            <Col xs={4} className="justify-content-center ml-auto">
              <h4>Preço</h4>
            </Col>
            <Col xs={3}>
              <p>Link para loja</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br />
      <br />
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
      <br />
      <br />
      <Card>
        <Card.Header>
          <Card.Title>Ficha Técnica</Card.Title>
        </Card.Header>
        <Card.Body>
          <Container>
            <h4>especificação 1</h4>
            <Table striped bordered>
              <tbody>
                <tr>
                  <th>Modelo</th>
                  <td>X-23</td>
                </tr>
                <tr>
                  <th>Modelo</th>
                  <td>X-23</td>
                </tr>
                <tr>
                  <th>Modelo</th>
                  <td>X-23</td>
                </tr>
              </tbody>
            </Table>
            <h4>especificação 2</h4>
            <Table striped bordered>
              <tbody>
                <tr>
                  <th>Modelo</th>
                  <td>X-23</td>
                </tr>
                <tr>
                  <th>Modelo</th>
                  <td>X-23</td>
                </tr>
                <tr>
                  <th>Modelo</th>
                  <td>X-23</td>
                </tr>
              </tbody>
            </Table>
            <h4>especificação 3</h4>
            <Table striped bordered>
              <tbody>
                <tr>
                  <th>Modelo</th>
                  <td>X-23</td>
                </tr>
                <tr>
                  <th>Modelo</th>
                  <td>X-23</td>
                </tr>
                <tr>
                  <th>Modelo</th>
                  <td>X-23</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProdutoEscolhido;
