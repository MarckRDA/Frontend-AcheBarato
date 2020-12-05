import React, { useState } from "react";
import {
  Card,
  CardContent,
    TextField,
} from "@material-ui/core";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  return (
    <Card>
      <CardContent>
        <form >
          <div>
            <TextField
              id="name"
              label="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="name"
              label="password"
              type="password"
              value={passwd}
              onChange={(event) => setPasswd(event.target.value)}
              variant="outlined"
              fullWidth
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
