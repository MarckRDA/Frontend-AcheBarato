import {Form} from 'react-bootstrap';


const DiscountList = (props) => {
  
    const discounts = props.discounts.map((dis) =>
    <Form.Check type="checkbox" label={dis.toString()} />
    )
    return (
    <>
      <h3>Faixa de Desconto</h3>
      <Form.Group>
        {discounts}
      </Form.Group>
    </>
  );
};

export default DiscountList;
