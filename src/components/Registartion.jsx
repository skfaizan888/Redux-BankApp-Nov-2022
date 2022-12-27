import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { yupValidation } from "./Validation/yupValidation.";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Registartion = () => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmpassword: "",
  };
  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: yupValidation,
    onSubmit: async (values) => {
      console.log("----", values);
      //   const type = "ADDEMPLOYE";
      //   const payload = values;
      //   const action = { type, payload };
      //   dispatch(action);
      const payload = values;
      const result = await axios.post("http://localhost:2888/adduser", payload);
      console.log("result", result.data);
      setMsg(result.data);
    },
  });
  useEffect(() => {
    if (!msg == "") {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [msg]);
  //   console.log("====", values);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Card style={{ width: "300px", marginLeft: "38%", marginTop: "30px" }}>
          <CardContent align="center">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h2>Employee Register</h2>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  variant="outlined"
                  label="Enter Name"
                  required
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  helperText={errors ? <span> {errors.name}</span> : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.email}
                  helperText={errors ? <span> {errors.email}</span> : ""}
                  type="email"
                  fullWidth
                  variant="outlined"
                  label="Enter Email"
                  required
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.phone}
                  helperText={errors ? <span> {errors.phone}</span> : ""}
                  type="number"
                  fullWidth
                  variant="outlined"
                  label="Enter Phone"
                  required
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.username}
                  helperText={errors ? <span> {errors.username}</span> : ""}
                  required
                  name="username"
                  type="text"
                  fullWidth
                  variant="outlined"
                  label="Enter username"
                  value={values.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.password}
                  helperText={errors ? <span> {errors.password}</span> : ""}
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  label="Enter password"
                  required
                  value={values.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.confirmpassword}
                  helperText={
                    errors ? <span> {errors.confirmpassword}</span> : ""
                  }
                  name="confirmpassword"
                  type="password"
                  fullWidth
                  variant="outlined"
                  label="Confirm password"
                  required
                  value={values.confirmpassword}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained">
                  Register
                </Button>
              </Grid>
              <Grid item xs={12}>
                <p>
                  Allready have an account ? <a href="">Login</a>
                </p>
              </Grid>
            </Grid>
           
             {msg !== "" && 
              <Alert security="error">{msg}</Alert>
             } 
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  );
};
