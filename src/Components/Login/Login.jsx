import "./LoginStyles.css";
import { LoginPage, LoginButton, JumbotronStyled,Form } from "./loginstyles";
import imagem from "../assets/logoicone.png";
import axios from 'axios';
import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [id, setId] = useState('');
  const history = useHistory(); 

  
  
  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setEmail("E-mail or Password is empty");
    } else {
      try {
        axios.post("https://localhost:5001/achebarato/users/login", { email, password }, {headers: {'UserId':'d57301d0-a125-4be1-b0dd-75a629430525'}})
        .then(res => setId(res.data));
        console.log("deu certo!")
       
      } catch (err) {
        setError("Houve um problema com o login, verifique suas credenciais. T.T");
      }
    }
  };

  console.log(email);
  console.log(id)
  console.log(password);
  
  return (
    <>
      <LoginPage>
        <JumbotronStyled>
          
          <Form onSubmit={handleSignIn}>
          <Link to="/MainPage">
            <img class="img-login" src={imagem} alt="" />
          </Link>
          <p>Login</p>
          {error && <p>{error}</p>}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value )}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit" onClick={() => history.push('/')}>Entrar</LoginButton>
          <hr />
          <Link to="/signup">Criar conta grátis</Link>
        </Form>
        </JumbotronStyled>
      </LoginPage>
    </>
  );
}

export default Login;
