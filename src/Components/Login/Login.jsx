import React, { useState } from "react";
import { Form} from "react-bootstrap";
import "./LoginStyles.css"
import { LoginPage, LoginButton,JumbotronStyled} from "./loginstyles";
import imagem from "../assets/logoicone.png"
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const onSubmit = (event) => {
    event.preventDefault()
    axios.post(
      'https://localhost:5001/auth/login',
      { email, passwd }
    )
    .then(resp => alert(resp.data))
    .catch(() => alert('Login inválido'))
  }

  
  return (
    <>
    <LoginPage>
        <JumbotronStyled >
        <Link to='/MainPage'>
      <img class="img-login" src={imagem} alt=""/>
          </Link>
        <Form >
        <h3 class="h3-login">Login</h3>
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
      </JumbotronStyled>
  </LoginPage>
  </>
  );
};

export default Login;
