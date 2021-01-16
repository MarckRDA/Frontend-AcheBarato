import React from 'react';
import { useState, Col } from "react";
import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";
import "./styleFormRegister.css";
import { RegisterButton, JumbotronStyled, FormPage } from "./FormRegisterStyles.js";
import imagem from "../assets/logoicone.png";
import backimage from "../assets/backimage.png"
import { Link } from "react-router-dom";


// todo import blobalstyles.js
import {
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { LoginPage } from '../Login/loginstyles';

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
    <FormPage>
      <JumbotronStyled>
      <Link to='/MainPage'>
        <img class="img-form" src={imagem} alt="" />
        </Link>
        <Form>
          <h3 class="h3-register">Sign-in</h3>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="nome" placeholder="nome" />
          </Form.Group>
        
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <RegisterButton variant="primary" type="submit">
            Submit
  </RegisterButton>
        </Form>
      </JumbotronStyled>
      </FormPage>
</>
  );
}



export default FormRegister;