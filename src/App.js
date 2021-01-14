import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProdutoEscolhido from './UI/Pages/ProdutoEscolhido.jsx'
import MainPage from './UI/Pages/MainPage.jsx'
// todo : to make a component call routers and make to render here
function App() {
  return (

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
  //    <ProdutoEscolhido products={[
  //     { name: "cyberpunk", price: "24,20"},
  //     { name: "shbah", price: "43,23" },
  //     { name: "shbah", price: "43,23" },
  //     { name: "shbah", price: "43,23" },
  //     { name: "shbah", price: "43,23" },
  //     { name: "shbah", price: "43,23" },
  //     { name: "shbah", price: "43,23" },
  //     { name: "shbah", price: "43,23" },
  //     { name: "shbah", price: "43,23" },
  //     { name: "shbah", price: "43,23" },
  //     { name: "shbah", price: "43,23" },
  //     { name: "shbah", price: "43,23" },
  //     { name: "shbah", price: "43,23" }]}/>
   );
}

export default App;
