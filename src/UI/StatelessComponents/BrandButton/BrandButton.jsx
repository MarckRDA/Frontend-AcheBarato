import { DropdownButton, Dropdown } from "react-bootstrap";

const BrandButton = (props) => {
  const dropdownOptions = props.options.map((n) => (
    <Dropdown.Item key={n.toString()} as="button">
      {n}
    </Dropdown.Item>
  ));
  return (
    <DropdownButton
      variant="link"
      id="dropdown-item-button"
      title="Ache Barato"
    >
      {dropdownOptions}
    </DropdownButton>
  );
};

export default BrandButton;
