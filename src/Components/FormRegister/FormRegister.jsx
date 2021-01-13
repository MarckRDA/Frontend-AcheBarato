import React from 'react';
import { useState, Col } from "react";
import styled from "styled-components";
import {Jumbotron} from "react-bootstrap";
import "./styleFormRegister.css";
import { RegisterButton,JumbotronStyled} from "./FormRegisterStyles.js";
import imagem from '../../Components/assets/logoicone.png'

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


  

  return (
    <>
    <img class="img-form" src={imagem}/>
    <JumbotronStyled fluid>
      <div class="formregister">
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
    </div>
    </JumbotronStyled>
</>
  );
}



export default FormRegister;

