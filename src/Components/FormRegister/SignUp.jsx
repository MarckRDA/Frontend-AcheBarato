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
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password || !phone) {
      setError("Preencha todos os dados para se cadastrar");
    } else {
      signUp({ name, email, password,phone });
      history.push("/login");
    }
  };
  console.log(phone)  
  
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
              type="text"
              placeholder="cod+ddd+celular"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
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
