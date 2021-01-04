import { InputGroup, FormControl, Form, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <>
      <InputGroup className="mr-auto ml-auto col-sm-9 ">
        <FormControl
          placeholder="Search a product"
          aria-label="Search a product"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
      <Form inline>
        <Button variant="outline-light">Entrar</Button>
      </Form>
    </>
  );
};

export default SearchBar;