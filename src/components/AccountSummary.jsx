import React from "react";
import { AccDetails } from "./AccSum/AccDetails";
import { DebitsTotal } from "./AccSum/DebitsTotal";
import { Grid } from "@mui/material";

export const AccountSummary = () => {
  return (
    <React.Fragment>
      <Grid container spacing={7}>
        <Grid item xs={4}>
          <DebitsTotal />
        </Grid>
      </Grid>
      <h1>Account Summary</h1>
      <AccDetails />
    </React.Fragment>
  );
};
