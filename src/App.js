import "./App.css";
import Login from "./Components/Login/Login";
import SeachPage from "./SeachPage"
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import logopath from "/media/rodrigo/Dados/dev/layouts-projeto/src/Logo.png";
import MainPage from "./MainPage";
import ProdutosPesquisados from "./ProdutosPesquisados";

function App() {
  return (
    //<PrimarySearchAppBar/>

    // <Jumbotron
    //   style={{
    //     margin: "5.5em 1.5em",
    //     backgroundColor: "darkorange",
    //   }}
    // >
    //   <Container>
    //     <Row>
    //       <Col xs={6}>
    //       <Image src={logopath} thumbnail/>
    //       </Col>
    //       <Col xs={6}>
    //         <Login />
    //       </Col>
    //     </Row>
    //   </Container>
    // </Jumbotron>
    //<MainPage/>
    // <Container>
    //   <Col xs={3}>
    //     <h1>Navegação aside</h1>
    //   </Col>
    //   <Col xs={9}>
    //     <ProdutosPesquisados />
    //   </Col>
    // </Container>
    // <SeachPage/>
    <MainPage/>
  );
}

export default App;
