import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./Components/styleLogo.css" 
import SearchResultProducts from './UI/Pages/SearchResultPage.jsx'

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

    //<MainPage/>
    <SearchResultProducts/>    
    // <Login/>
    // <ProdutoEscolhido/>
    //<FormRegister/>
  );
}

export default App;
