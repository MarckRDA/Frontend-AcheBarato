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
    <FormPage>
      <JumbotronStyled>
        <img class="img-form" src={imagem} alt="" />
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
      <Link to='/MainPage'>
        <div class="div-imgback">
          <img class="img-back" src={backimage} alt="" />
        </div>
      </Link>
    </FormPage>

  );
}



export default FormRegister;