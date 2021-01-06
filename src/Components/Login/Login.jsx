import React, { useState } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import styled from "styled-components";
import "./LoginStyles.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const LoginButton = styled(Button)`
    width: 30%;
    height: 2.4rem;
    border: none;
    margin-left:15rem;
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


const Login = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  return (

    <JumbotronStyled>
      <Form >
      <h3>Login</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label >Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" >
          <Form.Label >Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passwd}
            onChange={(event) => setPasswd(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <LoginButton variant="outline-primary" type="submit" color="primary" block>
            Login
        </LoginButton>
          <Router>

            <LoginButton variant="outline-primary"
              type="submit"
              color="primary"
              block

            >
              Register

          </LoginButton>
          </Router>

        </Form.Group>
      </Form>
    </JumbotronStyled>

  );
};

export default Login;
