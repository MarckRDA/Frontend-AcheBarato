import "./App.css";
import Login from "./Components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import "./Components/styleLogo.css" 
import MainPage from "./MainPage";
import ProdutosPesquisados from "./ProdutosPesquisados";
import NavegacaoLateral from "./NavegacaoLateral";
function App() {
  return (
    //<PrimarySearchAppBar/>

  
      <Container >
        <Row>
          <Col xs={6}>
          </Col>
          <Col xs={6}>
            <Login />
          </Col>
        </Row>
      </Container>
   
    //<MainPage/>
    // <Container className="mr-auto ml-auto ">
    //   <Row>
    //     <Col xs={2}>
    //       <aside>
    //         <NavegacaoLateral />
    //       </aside>
    //     </Col>
    //     <Col xs={10}>
    //       <ProdutosPesquisados />
    //     </Col>
    //   </Row>
    // </Container>
    // <Login/>
  );
}

export default App;
