import React, { useState } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import "./LoginStyles.css"
import { LoginButton,JumbotronStyled} from "./loginstyles";
import styled from "styled-components";


const Login = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  return (
    

    <JumbotronStyled >
      <div class="container">
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

            <LoginButton variant="outline-primary"
              type="submit"
              color="primary"
              block

            >
              Register

          </LoginButton>

        </Form.Group>
      </Form>
      </div>
    </JumbotronStyled>

  );
};

export default Login;
