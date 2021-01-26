import "./LoginStyles.css";
import { LoginPage, LoginButton, JumbotronStyled, Form } from "./loginstyles";
import imagem from "../assets/logoicone.png";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Context/hooks/useAuth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const { login, isAuthenticated} = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("E-mail or Password is empty");
    } else {
      login({ email, password });
      if (isAuthenticated) {
        history.push("/");
      }
    }
  };
  
  
 
  return (
    <>
      <LoginPage>
        <JumbotronStyled>
          <Form onSubmit={handleSignIn}>
            <Link to="/MainPage">
              <img class="img-login" src={imagem} alt="" />
            </Link>
            <p>Login</p>
            {error && <span>{error}</span>}
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton type="submit">Entrar</LoginButton>
            <hr />
            <Link to="/signup">Criar conta grátis</Link>
          </Form>
        </JumbotronStyled>
      </LoginPage>
    </>
  );
};

export default Login;
