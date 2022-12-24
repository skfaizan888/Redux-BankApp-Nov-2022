import React, { useState } from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { LoginValidation } from "./Validation/LoginValidation";

export const Login = () => {
  const [error, setError] = useState({});
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  console.log("erorrr", error);
  const handlechange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setError(LoginValidation(values));
  };

  return (
    <React.Fragment>
      <form onSubmit={handlesubmit}>
        <Card style={{ width: "300px", marginLeft: "38%", marginTop: "100px" }}>
          <CardContent align="center">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1>Employee Login</h1>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  type="text"
                  fullWidth
                  variant="outlined"
                  label="User"
                  error={error.username}
                  onChange={handlechange}
                  helperText={
                    error && (
                      <p style={{ color: "#D32F2F" }}> {error.username}</p>
                    )
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  label="Password"
                  error={error.password}
                  onChange={handlechange}
                  helperText={
                    error && <p style={{ color: "red" }}> {error.password}</p>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained">
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <p>
                  Dont have an Account ? <a href="">Register here</a>
                </p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  );
};
