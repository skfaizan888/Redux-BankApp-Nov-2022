import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const handleLoguot = () => {
    localStorage.removeItem("logintoken");
    navigate("/");
  };
  useEffect(() => {
    const token = localStorage.getItem("logintoken");
    //   if (token) {
    //     navigate("/home");
    //   }
    !token && navigate("/");
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Button variant="contained" onClick={navigate("/")}>
            Login
          </Button>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={handleLoguot}>
            logout
          </Button>
        </Grid>
      </Grid>
      <h1>Home Page</h1>
    </React.Fragment>
  );
};

export default Home;
