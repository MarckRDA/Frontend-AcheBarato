import { InputGroup } from "react-bootstrap";
import { useState } from "react";

import {ButtonStyled,FormControlStyled} from "./SearchBar.js";
import { Link, useLocation, BrowserRouter } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <form className="mr-auto ml-auto col-sm-9 " onSubmit={handleSubmit}>
    <InputGroup>
        <FormControlStyled
          placeholder="Search for a product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BrowserRouter forceRefresh={true}>
        <Link to={search === '' ? `${location.pathname}` : `/PageResults?search=${search}`}>
        <ButtonStyled variant="secondary">Search</ButtonStyled> 
        </Link>
        </BrowserRouter>
      </InputGroup>
    </form>
      

    </>
  );
};

export default SearchBar;