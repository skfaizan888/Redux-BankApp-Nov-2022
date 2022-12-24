import React from 'react';
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";


export const ForgetPassword = () => {
    return (
        <React.Fragment>
        <Card style={{ width: "300px", marginLeft: "38%", marginTop: "100px" }}>
          <CardContent align="center">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h2>Forget password</h2>
              </Grid>
              <Grid item xs={12}>
                <TextField
                required 
                  type="email"
                  fullWidth
                  variant="outlined"
                  label="Enter email"
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
                <Button fullWidth variant="contained">
               Reset password
                </Button>
              </Grid>
            
            </Grid>
          </CardContent>
        </Card>
      </React.Fragment>
    );
};
