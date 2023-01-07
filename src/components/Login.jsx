import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import { LoginValidation } from "./Validation/LoginValidation";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const handlechange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    // console.log("=====>>>", result.data);
    const result = await axios.post("http://localhost:2888/login", values);
    if (result.data.msg == "ok") {
      localStorage.setItem("logintoken", result.data.token);
      navigate("/home");
    } else {
      setMsg(result.data.msg); //error msg
    }
    e.preventDefault();
    setError(LoginValidation(values));
  };

  return (
    <React.Fragment>
      <form>
        <Card style={{ width: "300px", marginLeft: "38%", marginTop: "100px" }}>
          <CardContent align="center">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1>Employee Login</h1>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="email"
                  type="text"
                  fullWidth
                  variant="standard"
                  label="Email"
                  onChange={handlechange}
                  error={error.email}
                  helperText={error ? <span> {error.email}</span> : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="password"
                  type="password"
                  fullWidth
                  variant="standard"
                  label="Password"
                  error={error.password}
                  onChange={handlechange}
                  helperText={error ? <span> {error.password}</span> : ""}
                />
                {/* { error ? <span > {error.password}</span>:""} */}
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" onClick={handlesubmit}>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                {msg !== "" && (
                  <Alert severity="error">
                    {" "}
                    <span style={{ fontSize: "12px" }}>{msg} </span>{" "}
                  </Alert>
                )}
              </Grid>
              <Grid item xs={12}>
                <p>
                  Dont have an Account ?{" "}
                  <Link to="/registartion">Register here</Link>
                </p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  );
};
