import React, { useState } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import "./LoginStyles.css"
import { LoginPage, LoginButton, JumbotronStyled } from "./loginstyles";
import styled from "styled-components";
import imagem from "../assets/logoicone.png"
import backimage from "../assets/backimage.png"
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  return (
    <LoginPage>
      <JumbotronStyled >
        <img class="img-login" src={imagem} alt="" />
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
                block>
                Register
            </LoginButton>
            </Form.Group>
          </Form>
        </div>
      </JumbotronStyled>

      <Link to='/MainPage'>
        <div class="div-imgback">
          <img class="img-back" src={backimage} alt="" />
        </div>
      </Link>
    </LoginPage>
  );
};

export default Login;
