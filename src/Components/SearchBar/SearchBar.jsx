import { InputGroup,Form} from "react-bootstrap";
import {ButtonStyled,FormControlStyled} from "./SearchBar.js";
import { Link } from "react-router-dom";


const SearchBar = () => {
  return (
    <>
      <InputGroup className="mr-auto ml-auto col-sm-9 ">
        <FormControlStyled
          placeholder="Search a product"
          aria-label="Search a product"
          aria-describedby="basic-addon2"
        />
        <Link to='/ProdutosPesquisados'>
        <ButtonStyled variant="outline-primary">Search</ButtonStyled> 
        </Link>
      </InputGroup>

    </>
  );
};

export default SearchBar;