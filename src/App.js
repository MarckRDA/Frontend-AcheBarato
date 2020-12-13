import "./App.css";
import Login from "./Components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
//import "./Components/styleLogo.css" 
import FormRegister from "./FormRegister";
import MainPage from './UI/Pages/MainPage.jsx'
import ProdutosPesquisados from "./ProdutosPesquisados";
import NavegacaoLateral from "./NavegacaoLateral";
import ProdutoEscolhido from "./ProdutoEscolhido";
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// todo : to make a component call routers and make to render here
function App() {
  return (
    //<PrimarySearchAppBar/>

      // <Container >
      //   <Row>
      //     <Col xs={6}  >
      //     </Col>
      //     <Col xs={6} >
      //       <Login />
      //     </Col>
      //   </Row>
      // </Container>
    //  <Login/>

    <MainPage/>
    // <Container className="mr-auto ml-auto ">
    //   <Row>
    //     <Col xs={2}>
    //       <aside>
    //         <NavegacaoLateral />
    //       </aside>
    //     </Col>
    //     <Col xs={10}>
          //  <ProdutosPesquisados />
    //     </Col>
    //   </Row>
    // </Container>
    
    // <Login/>
    // <ProdutoEscolhido/>
    //<FormRegister/>
  );
}

export default App;
