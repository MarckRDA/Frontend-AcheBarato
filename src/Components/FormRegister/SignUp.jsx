import React, { useState } from "react";
import {
  RegisterButton,
  JumbotronStyled,
  FormPage,
  Form,
} from "./FormRegisterStyles.js";
import imagem from "../assets/logoicone.png";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "../../services/api";
import { Button } from "../../UI/Button/index";



const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password || !phoneNumber) {
      setError("Preencha todos os dados para se cadastrar");
    } else {
      signUp({ name, email, password,phoneNumber });
      history.push("/login");
    }
  };
  console.log(phoneNumber)  
  
  return (
    <>
      <FormPage>
        <JumbotronStyled>
          <Form onSubmit={handleSignUp}>
            <Link to="/">
              <img class="img-login" src={imagem} alt="" />
            </Link>
            {error && <p>{error}</p>}
            <p>Sign-In</p>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
           
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <input
              type="text"
              placeholder="cod+ddd+celular"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit">Sign-in</Button>
            <hr />
            <Link to="/Login">Login</Link>
          </Form>
        </JumbotronStyled>
      </FormPage>
    </>
  );
};

export default SignUp;
