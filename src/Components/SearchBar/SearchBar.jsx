import { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { ButtonStyled, FormControlStyled } from "./SearchBar.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PriceAverage from '../PriceAverage/PriceAverage.jsx'

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
  };

  return (
    
      <form className="mr-auto ml-auto col-sm-9 " onSubmit={handleSubmit}>
        <InputGroup>
          <FormControlStyled
            placeholder="Search for a product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to= {search === '' ? '/MainPage' : `/PriceAverage/${search}`}>
            <ButtonStyled variant="outline-primary">Search</ButtonStyled>
          </Link>
        </InputGroup>
      </form>
     

  );
};

export default SearchBar;
