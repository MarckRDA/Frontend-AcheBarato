import "./App.css";
import Login from "./Components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import logopath from "./Components/Logo";
import MainPage from "./MainPage";
import ProdutosPesquisados from "./ProdutosPesquisados";
import NavegacaoLateral from "./NavegacaoLateral";
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
    <Container className="mr-auto ml-auto ">
      <Row>
        <Col xs={2}>
          <aside>
            <NavegacaoLateral />
          </aside>
        </Col>
        <Col xs={10}>
          <ProdutosPesquisados />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
