import React from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

export const Registartion = () => {
  return (
    <React.Fragment>
      <Card style={{ width: "300px", marginLeft: "38%", marginTop: "100px" }}>
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                fullWidth
                variant="outlined"
                label="Enter Email"
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                label="Enter Phone"
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required 
                type="text"
                fullWidth
                variant="outlined"
                label="Enter username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                fullWidth
                variant="outlined"
                label="Enter password"
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                fullWidth
                variant="outlined"
                label="Confirm password"
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained">
                Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <p>
                Allready have an account ? <a href="">Login</a>
              </p>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
