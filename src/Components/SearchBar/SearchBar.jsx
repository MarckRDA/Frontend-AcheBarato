import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import styled from "styled-components";


export const FormControlStyled = styled(FormControl)
  `
display: flex;
margin-left: -1rem;
display: block;
width: 57%;
height: calc(1.5em + 0.75rem + 2px);
padding: .375rem .75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #f2f5f8;
border-color: #067eff;
transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;


`;


export const ButtonStyled = styled(Button)
  `
display: flex;
margin-left: 1rem;
    
    `;

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
          <ButtonStyled variant="outline-secondary">Search</ButtonStyled>
        </InputGroup.Append>
      </InputGroup>

    </>
  );
};

export default SearchBar;