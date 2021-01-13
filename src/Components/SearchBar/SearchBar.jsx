import { InputGroup,Form} from "react-bootstrap";
import {ButtonStyled,FormControlStyled} from "./SearchBar.js";


const SearchBar = () => {
  return (
    <>
      <InputGroup className="mr-auto ml-auto col-sm-9 ">
        <FormControlStyled
          placeholder="Search a product"
          aria-label="Search a product"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <ButtonStyled variant="outline-primary">Search</ButtonStyled>
        </InputGroup.Append>
      </InputGroup>

    </>
  );
};

export default SearchBar;