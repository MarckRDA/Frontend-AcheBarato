import "./LoginStyles.css";
import { LoginPage, LoginButton, JumbotronStyled,Form } from "./loginstyles";
import imagem from "../assets/logoicone.png";
import axios from 'axios';
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "E-mail or Password is empty " });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };
  
  render(){
  return (
    <>
      <LoginPage>
        <JumbotronStyled>
          
          <Form onSubmit={this.handleSignIn}>
          <Link to="/MainPage">
            <img class="img-login" src={imagem} alt="" />
          </Link>
          <p>Login</p>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="E-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
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
}

export default Login;
