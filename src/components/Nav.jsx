import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Button
                fullWidth
                onClick={() => navigate("/")}
                variant="contained"
              >
                Home
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                onClick={() => navigate("/accsum")}
                variant="contained"
              >
                Account Summary
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                fullWidth
                onClick={() => navigate("/cards")}
                variant="contained"
              >
                Cards
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                fullWidth
                onClick={() => navigate("/loan")}
                variant="contained"
              >
                Loans
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
