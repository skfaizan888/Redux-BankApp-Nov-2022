import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const AddCard = () => {
  const [data, setData] = useState([]);
  const [card, setCard] = useState("");
  const dispatch = useDispatch();
  const selectCards = useSelector((state) => state.cardReducer.cards);
  const handleAdd = () => {
    setData([card, ...data]);
  };
  const handleSubmit = () => {
    const type = "addCard";
    const payload = data;
    const action = { type, payload };
    dispatch(action);
  };
  useEffect(() => {
    setData(selectCards);
  }, [selectCards]);
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                onChange={(e) => setCard(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                onClick={handleAdd}
                fullWidth
                color="success"
              >
                Add
              </Button>
            </Grid>
            {data.map((item) => (
              <Grid item xs={3}>
                <Card sx={{ bgcolor: "brown", color: "#ffffff" }}>
                  <CardContent>{item}</CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ height: 65 }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
