import styled from "styled-components";
import { Form, Button, Jumbotron } from "react-bootstrap";




export const RegisterButton = styled(Button)`
    width: 20%;
    height: 2.4rem;
    border: none;
    margin-left:4rem;
    cursor: pointer;
    background: #13d0f1;
    border-radius: 0.5rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    display: block;
    
    `;

export const JumbotronStyled = styled(Jumbotron)` 

  width:fit-content;
  margin-top:10rem;
  margin-left:29rem;
  background-color: #ffff;
  border-radius: 2rem;
  color: #1a1515;
  justify-content: center;
  opacity: 100%;
  box-shadow: inset -1px 4px 27px 7px #ffff, 0px 3px 13px -5px black;
`;