import React, { useState } from "react";
import {
  RegisterButton,
  JumbotronStyled,
  FormPage,
  Form,
} from "./FormRegisterStyles.js";
import imagem from "../assets/logoicone.png";
import { Link, withRouter } from "react-router-dom";
import { signUp } from "../../services/api";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Preencha todos os dados para se cadastrar");
    } else {
      try {
        signUp({name, email, password});
      } catch (err) {
        setError("Error!");
      }
    }
  };

  return (
    <>
      <FormPage>
        <JumbotronStyled>
          <Form onSubmit={handleSignUp}>
            <Link to="/MainPage">
              <img class="img-login" src={imagem} alt="" />
            </Link>
            {error && <p>{error}</p>}
            <p>Sign-In</p>
            <input
              type="text"
              placeholder="User Name"
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <RegisterButton type="submit">Sign-in</RegisterButton>
            <hr />
            <Link to="/Login">Login</Link>
          </Form>
        </JumbotronStyled>
      </FormPage>
    </>
  );
};

export default withRouter(SignUp);
