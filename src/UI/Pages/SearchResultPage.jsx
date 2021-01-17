import { Container, Row, Col } from "react-bootstrap";
import NavigationAside from "../../Components/NavigationAside/NavigationAside.jsx";
import ProdutosPesquisados from "../../Components/ProdutosPesquisados/ProdutosPesquisados";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

const SearchResultPage = () => {
  return (
    <>
      <NavigationBar optionsMenu={["kamak", "janja", "habha"]} />
      <Container className="mr-auto ml-auto mt-5">
        <Row>
          <Col xs={2}>
            <aside>
              <NavigationAside />
            </aside>
          </Col>
          <Col xs={10}>
            <ProdutosPesquisados
              products={[
                {
                  name: "cyberpunk",
                  description: "xsxs",
                  category: "eletronicos",
                },
                {
                  name: "shbah",
                  description: "dsjbasj",
                  category: "eletronicos",
                },
                {
                  name: "ssjnjn",
                  description: "kmdskmd",
                  category: "eletronicos",
                },
                {
                  name: "hbahasa",
                  description: "dkdmskmd",
                  category: "eletronicos",
                },
                {
                  name: "hbahasa",
                  description: "dkdmskmd",
                  category: "roupas",
                },
                {
                  name: "hbahasa",
                  description: "dkdmskmd",
                  category: "roupas",
                },
                {
                  name: "hbahasa",
                  description: "dkdmskmd",
                  category: "roupas",
                },
                {
                  name: "hbahasa",
                  description: "dkdmskmd",
                  category: "roupas",
                },
                {
                  name: "hbahasa",
                  description: "dkdmskmd",
                  category: "computadores",
                },
                {
                  name: "hbahasa",
                  description: "dkdmskmd",
                  category: "computadores",
                },
                {
                  name: "hbahasa",
                  description: "dkdmskmd",
                  category: "computadores",
                },
                {
                  name: "hbahasa",
                  description: "dkdmskmd",
                  category: "computadores",
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchResultPage;
