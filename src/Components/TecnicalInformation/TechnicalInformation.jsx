import { Card, Table, Container } from "react-bootstrap";

const TechnicalInformation = () => {
  const specificationsProduct = {
    exp1: [{ model: 1 }, { modelx: 2 }],
    exp2: [{ model: 1 }, { modelx: 2 }],
    exp4: [{ model: 1 }, { modelx: 2 }],
  };

  const inf = () => {
    return (
      <Table striped bordered>
        <tbody>
          {Object.keys(specificationsProduct).map((tableTitle) => {
            return (
              <>
                <h4>{tableTitle}</h4>
                {/* {specificationsProduct[tableTitle].items.map((item) => {
                  return (
                    <tr>
                      <th>{item}</th>
                      {specificationsProduct[item].items.map((cod) => {
                        return <td>{cod}</td>;
                      })}
                    </tr>
                  );
                })} */}
              </>
            );
          })}
        </tbody>
      </Table>
    );
  };
  // const tableInf = specificationsProduct.map(
  //   ({ ...specificationsProduct }, index) => (

  //   )
  // );
  return (
    <Card>
      <Card.Header>
        <Card.Title>Ficha Técnica</Card.Title>
      </Card.Header>
      <Card.Body>
        <Container>{inf}</Container>
      </Card.Body>
    </Card>
  );
};
export default TechnicalInformation;
