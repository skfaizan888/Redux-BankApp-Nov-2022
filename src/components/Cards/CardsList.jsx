import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { useSelector } from "react-redux";

export const CardList = () => {
  const [data, setData] = useState([]);
  const selectCards = useSelector((state) => state.cardReducer.cards);

  useEffect(() => {
    setData(selectCards);
  }, [selectCards]);
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" fullWidth>
              {item}
            </Button>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
