import { Dropdown } from "react-bootstrap";
import { Twirl as Hamburger } from 'hamburger-react'

const BrandButton = (props) => {
  const dropdownOptions = props.options.map((n) => (
    <Dropdown.Item key={n.toString()} as="button">
      {n}
    </Dropdown.Item>
  ));
  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Button
    </Dropdown.Toggle>
  
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
};

export default BrandButton;
