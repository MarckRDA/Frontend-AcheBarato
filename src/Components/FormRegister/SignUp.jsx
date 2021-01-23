import React, { Component } from "react";

import { RegisterButton, JumbotronStyled, FormPage, Form } from "./FormRegisterStyles.js";
import imagem from "../assets/logoicone.png";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";


class SignUp extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/achebarato/users", { username, email, password});
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Error!" });
      }
    }
  };

  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
  render() {
    return (
      <>
        <FormPage>
          <JumbotronStyled>
            <Form onSubmit={this.handleSignUp}>
              <Link to="/MainPage">
                <img class="img-login" src={imagem} alt="" />
              </Link>
              {this.state.error && <p>{this.state.error}</p>}
              <p>Sign-In</p>
              <input
                type="text"
                placeholder="User Name"
                onChange={e => this.setState({ username: e.target.value })}
              />
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
              <RegisterButton type="submit">Sign-in</RegisterButton>
              <hr />
              <Link to="/Login">Login</Link>

            </Form>
          </JumbotronStyled>
        </FormPage>
      </>
    );
  }

}



export default withRouter(SignUp);