import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";

export const AccDetails = () => {
  const [data, setData] = useState([]);
  const selectTrans = useSelector((state) => state.cardReducer.trans);

  useEffect(() => {
    setData(selectTrans);
  }, [selectTrans]);
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              Type of Card
            </Grid>
            <Grid item xs={4}>
              Amount (Rs.)
            </Grid>
            <Grid item xs={4}>
              Type of Transaction
            </Grid>
            {data.map((item) => (
              <React.Fragment>
                <Grid item xs={4}>
                  {item.cardtype}
                </Grid>
                <Grid item xs={4}>
                  {item.amnt}
                </Grid>
                <Grid item xs={4}>
                  {item.transtype === "C" ? "Credit" : "Debit"}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
