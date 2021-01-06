import React from 'react';
import { useState, Col } from "react";
import styled from "styled-components";
import {Jumbotron} from "react-bootstrap";
import "./styleFormRegister.css";

// todo import blobalstyles.js
import {
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";

function FormRegister() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  const RegisterButton = styled(Button)`
    width: 20%;
    height: 2.4rem;
    border: none;
    margin-left:10rem;
    cursor: pointer;
    background: #13d0f1;
    border-radius: 0.5rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

  const JumbotronStyled = styled(Jumbotron)`
  border-radius: 3rem;
  color: #1a1515;
  justify-content: center;
  opacity: 100%;
  box-shadow: inset -1px 4px 27px 7px #9e958d, 0px 3px 13px -5px black;

`;

  return (
    <JumbotronStyled>
      <Form>
      <h3>Sign-in</h3>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="nome" placeholder="nome" />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="sobrenome" placeholder="sobrenome" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>


        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <RegisterButton variant="primary" type="submit">
          Submit
  </RegisterButton>
  
  
      </Form>
    </JumbotronStyled>

  );
}



export default FormRegister;