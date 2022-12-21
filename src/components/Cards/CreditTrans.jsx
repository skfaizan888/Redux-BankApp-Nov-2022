import React, { useState, useEffect } from "react";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";

export const CreditTrans = () => {
  const [options, setOptions] = useState([]);
  const [trasData, setTransdata] = useState([]);
  const [cardtype, setCardtype] = useState("");
  const [amnt, setAmnt] = useState(0);
  const selectCards = useSelector((state) => state.cardReducer.cards);
  const selectTrans = useSelector((state) => state.cardReducer.trans);
  const dispatch = useDispatch();
  const handleCredit = () => {
    const currTrans = {
      cardtype,
      amnt,
      transtype: "C",
    };
    const payload = [currTrans, ...trasData];
    const type = "addTrans";
    const action = { type, payload };
    dispatch(action);
  };
  useEffect(() => {
    const newData = selectCards.map((item) => ({
      value: item,
      label: item,
    }));
    setOptions(newData);
  }, [selectCards]);
  useEffect(() => {
    setTransdata(selectTrans);
  }, [selectTrans]);
  return (
    <React.Fragment>
      <Card sx={{ height: 250 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h3>Credit Transations</h3>
            </Grid>
            <Grid item xs={5}>
              <Select
                options={options}
                onChange={(opt) => setCardtype(opt.value)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                type="number"
                variant="outlined"
                label="enter amount"
                fullWidth
                onChange={(e) => setAmnt(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                onClick={handleCredit}
                sx={{ height: 55 }}
              >
                Credit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
