import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";

export const DebitsTotal = () => {
  const [tot, setTot] = useState(0);
  const selectTrans = useSelector((state) => state.cardReducer.trans);

  useEffect(() => {
    const debitData = selectTrans.filter((item) => item.transtype === "D");
    let totalDebit = 0;

    debitData.forEach((element) => {
      totalDebit = totalDebit + Number(element.amnt);
    });

    setTot(totalDebit);
  }, [selectTrans]);
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              Total Debits
            </Grid>
            <Grid item xs={12}>
              <b> {tot}</b>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
