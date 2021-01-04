import React from 'react';
import { useState,Col } from "react";

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
      <Form>
        
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Nome</Form.Label>
      <Form.Control type="nome" placeholder="nome" />
    </Form.Group>
    

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Sobrenome</Form.Label>
      <Form.Control type="sobrenome" placeholder="sobrenome" />
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="email" />
    </Form.Group>
 

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    );
  }
  


export default FormRegister;