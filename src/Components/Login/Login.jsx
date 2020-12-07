import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={passwd}
          onChange={(event) => setPasswd(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Button variant="outline-primary" type="submit" color="primary" block>
          Login
        </Button>
        <Button variant="outline-primary" type="submit" color="primary" block>
          Register
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Login;
