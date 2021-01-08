import { Form } from "react-bootstrap";

const Stores = (props) => {
  const listStores = props.listStores.map((store) => (
    <Form.Check type="checkbox" label={store} />
  ));
  return (
    <>
      
      <Form>
        <Form.Group>{listStores}</Form.Group>
      </Form>
    </>
  );
};

export default Stores;
